import { LitElement, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass, DotDevice, DOMAIN } from "./types";
import { cardStyles } from "./styles";
import { discoverDevices, findDevice } from "./helpers";
import "./editor";

@customElement("dot-quote0-card")
export class DotQuote0Card extends LitElement {
  @state() private _config!: DotQuote0CardConfig;
  @state() private _device: DotDevice | undefined;
  @state() private _resolved = false;

  @state() private _textTitle = "";
  @state() private _textMessage = "";
  @state() private _textSignature = "";
  @state() private _imageData = "";
  @state() private _ditherType = "DIFFUSION";
  @state() private _border = 0;
  @state() private _toast = "";
  @state() private _toastType: "success" | "error" = "success";
  @state() private _sending = false;
  @state() private _generating = false;
  @state() private _generatedPreview = "";

  @state() private _sendTextExpanded = false;
  @state() private _sendImageExpanded = false;

  private _hass!: Hass;

  set hass(hass: Hass) {
    const old = this._hass;
    this._hass = hass;
    this.requestUpdate("hass", old);
    if (hass && this._config?.device_id && !this._resolved) {
      this._resolveDevice();
    }
  }

  get hass(): Hass {
    return this._hass;
  }

  private async _resolveDevice(): Promise<void> {
    try {
      const devices = await discoverDevices(this._hass);
      this._device = findDevice(devices, this._config.device_id);
      this._resolved = true;
    } catch {
      // Will retry on next hass update
    }
  }

  static getConfigElement() {
    return document.createElement("dot-quote0-card-editor");
  }

  static getStubConfig() {
    return {
      device_id: "",
      show_preview: true,
      show_send_text: true,
      show_send_image: true,
    };
  }

  setConfig(config: DotQuote0CardConfig): void {
    if (!config.device_id) {
      throw new Error("Please select a device");
    }
    this._config = config;
    this._resolved = false;
    if (this._hass) {
      this._resolveDevice();
    }
  }

  getCardSize(): number {
    return 8;
  }

  getGridOptions() {
    return { rows: 8, columns: 12, min_rows: 4, min_columns: 6 };
  }

  // ---- Entity helpers ----

  private _eid(suffix: string): string | undefined {
    return this._device?.entities[suffix];
  }

  private _stateOf(suffix: string): string {
    const eid = this._eid(suffix);
    if (!eid) return "unavailable";
    return this.hass?.states[eid]?.state ?? "unavailable";
  }

  private _isOnline(): boolean {
    return this._stateOf("online") === "on";
  }

  private _getPreviewImages(): string[] {
    if (!this._device) return [];
    for (const suffix of Object.keys(this._device.entities)) {
      const eid = this._device.entities[suffix];
      const entity = this.hass?.states[eid];
      if (entity?.attributes?.current_images) {
        return entity.attributes.current_images;
      }
    }
    return [];
  }

  // ---- Icon helpers ----

  private _batteryIcon(pct: string): string {
    const n = parseInt(pct);
    if (isNaN(n)) return "mdi:battery-unknown";
    if (n >= 90) return "mdi:battery";
    if (n >= 70) return "mdi:battery-80";
    if (n >= 50) return "mdi:battery-60";
    if (n >= 30) return "mdi:battery-40";
    if (n >= 10) return "mdi:battery-20";
    return "mdi:battery-outline";
  }

  private _wifiIcon(dbm: string): string {
    const n = parseFloat(dbm);
    if (isNaN(n)) return "mdi:wifi-off";
    if (n >= -50) return "mdi:wifi-strength-4";
    if (n >= -60) return "mdi:wifi-strength-3";
    if (n >= -70) return "mdi:wifi-strength-2";
    return "mdi:wifi-strength-1";
  }

  // ---- Actions ----

  private async _showToast(msg: string, type: "success" | "error") {
    this._toast = msg;
    this._toastType = type;
    await new Promise((r) => setTimeout(r, 3000));
    this._toast = "";
  }

  private async _handleSendText() {
    if (this._sending) return;
    this._sending = true;
    try {
      await this.hass.callService(DOMAIN, "send_text", {
        serial: this._device!.dot_device_id,
        title: this._textTitle || undefined,
        message: this._textMessage || undefined,
        signature: this._textSignature || undefined,
        refresh_now: true,
      });
      this._showToast("Text sent!", "success");
    } catch (e: any) {
      this._showToast(e.message || "Failed to send", "error");
    } finally {
      this._sending = false;
    }
  }

  private async _handleSendImage() {
    if (this._sending || !this._imageData) return;
    this._sending = true;
    try {
      await this.hass.callService(DOMAIN, "send_image", {
        serial: this._device!.dot_device_id,
        image: this._imageData,
        dither_type: this._ditherType,
        border: this._border,
        refresh_now: true,
      });
      this._generatedPreview = "";
      this._showToast("Image sent!", "success");
    } catch (e: any) {
      this._showToast(e.message || "Failed to send", "error");
    } finally {
      this._sending = false;
    }
  }

  private async _handleNextContent() {
    const eid = this._eid("next_content");
    if (!eid) return;
    try {
      await this.hass.callService("button", "press", { entity_id: eid });
      this._showToast("Switched to next content", "success");
    } catch (e: any) {
      this._showToast(e.message || "Failed", "error");
    }
  }

  private _snapToEink(dataUrl: string): Promise<{ base64: string; dataUrl: string }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 296;
        canvas.height = 152;
        const ctx = canvas.getContext("2d")!;
        ctx.imageSmoothingEnabled = false; // nearest-neighbour — preserve hard pixel edges
        ctx.drawImage(img, 0, 0, 296, 152);
        const result = canvas.toDataURL("image/png");
        resolve({ base64: result.split(",")[1], dataUrl: result });
      };
      img.onerror = () => reject(new Error("Failed to load generated image"));
      img.src = dataUrl;
    });
  }

  private async _handleGenerateImage() {
    const apiKey = this._config.gemini_api_key;
    if (!apiKey) {
      this._showToast("Add a Gemini API key in the card editor first", "error");
      return;
    }
    if (this._generating) return;
    this._generating = true;

    const scenes = [
      "a tiny sleeping cat curled up on a windowsill with rain outside",
      "a cute chubby robot watering a small potted cactus",
      "a happy frog wearing a tiny top hat sitting on a mushroom",
      "a little astronaut floating in space waving at stars",
      "a cozy teapot with steam hearts floating above it",
      "a chubby penguin sliding down a snowy hill",
      "a small owl reading a book by candlelight",
      "a cheerful sun wearing sunglasses over rolling hills",
      "a tiny hedgehog carrying a huge backpack through a forest",
      "a smiling cloud raining hearts on little flowers",
    ];
    const scene = scenes[Math.floor(Math.random() * scenes.length)];
    const prompt =
      `Pixel art, 296 by 152 pixels, pure black and white only, ` +
      `chunky 8-bit style pixels clearly visible, high contrast, no gradients, no grey, ` +
      `cute and fun scene: ${scene}. ` +
      `Fill the entire 296x152 canvas. Landscape orientation. Dithered where needed for depth.`;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
          }),
        },
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${res.status}`);
      }
      const data = await res.json();
      const part = data?.candidates?.[0]?.content?.parts?.find(
        (p: any) => p.inlineData?.mimeType?.startsWith("image/"),
      );
      if (!part?.inlineData?.data) throw new Error("No image in response");

      const dataUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      const snapped = await this._snapToEink(dataUrl);
      this._imageData = snapped.base64;
      this._generatedPreview = snapped.dataUrl;
      this._showToast("Art generated! Review and send.", "success");
    } catch (e: any) {
      this._showToast(e.message || "Generation failed", "error");
    } finally {
      this._generating = false;
    }
  }

  private _handleFileSelect(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this._generatedPreview = "";
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      this._imageData = result.split(",")[1] || result;
    };
    reader.readAsDataURL(file);
  }

  // ---- Render ----

  private _renderHero() {
    if (this._config.show_preview === false) return nothing;

    const generatedSrc = this._generatedPreview;
    const images = this._getPreviewImages();
    const src = generatedSrc || (images.length > 0 ? images[0] : null);

    return html`
      <div class="hero-frame">
        ${src
          ? html`
              <img class="hero-img" src="${src}" alt="Current display" />
              ${generatedSrc
                ? html`<div class="hero-badge">Preview — not sent yet</div>`
                : nothing}
            `
          : html`
              <svg
                class="hero-fallback"
                viewBox="0 0 296 152"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="No preview available"
              >
                <defs>
                  <pattern id="dotgrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.12" />
                  </pattern>
                </defs>
                <rect width="296" height="152" fill="url(#dotgrid)" />
                <rect x="108" y="38" width="80" height="52" rx="5"
                  fill="none" stroke="currentColor" stroke-width="2" opacity="0.25" />
                <rect x="113" y="43" width="70" height="38" rx="2"
                  fill="currentColor" opacity="0.06" />
                <line x1="120" y1="54" x2="176" y2="54" stroke="currentColor" stroke-width="1.5" opacity="0.18" />
                <line x1="120" y1="62" x2="166" y2="62" stroke="currentColor" stroke-width="1.5" opacity="0.18" />
                <line x1="120" y1="70" x2="172" y2="70" stroke="currentColor" stroke-width="1.5" opacity="0.18" />
                <text x="148" y="116" text-anchor="middle" font-size="8"
                  font-family="Roboto, sans-serif" letter-spacing="1"
                  fill="currentColor" opacity="0.3">NO PREVIEW</text>
              </svg>
            `}
      </div>
    `;
  }

  private _renderInfo() {
    const online = this._isOnline();
    const power = this._stateOf("power_state");
    const battery = this._stateOf("battery_status");
    const wifi = this._stateOf("wifi_signal");
    const firmware = this._stateOf("firmware_version");
    const lastRender = this._stateOf("last_render");
    const nextPower = this._stateOf("next_render_power");
    const name =
      this._device?.name ||
      `Quote/0 ${this._config.device_id.slice(-4)}`;

    const wifiVal = wifi !== "unavailable" ? `${wifi} dBm` : "—";
    const battVal = battery !== "unavailable" ? battery : "—";

    return html`
      <div class="device-header">
        <div class="device-header-left">
          <span class="device-name">${name}</span>
          <span class="device-fw">FW&nbsp;${firmware}</span>
        </div>
        <span class="online-pill ${online ? "online" : "offline"}">
          <span class="online-dot"></span>
          ${online ? "Online" : "Offline"}
        </span>
      </div>

      <div class="status-row">
        <span class="stat-chip">
          <ha-icon icon="mdi:lightning-bolt" class="chip-icon power"></ha-icon>
          <span>${power}</span>
        </span>
        <span class="stat-sep">·</span>
        <span class="stat-chip">
          <ha-icon icon="${this._batteryIcon(battery)}" class="chip-icon battery"></ha-icon>
          <span>${battVal}</span>
        </span>
        <span class="stat-sep">·</span>
        <span class="stat-chip">
          <ha-icon icon="${this._wifiIcon(wifi)}" class="chip-icon wifi"></ha-icon>
          <span>${wifiVal}</span>
        </span>
      </div>

      <div class="render-row">
        <ha-icon icon="mdi:history" class="render-icon"></ha-icon>
        <span>${lastRender}</span>
        <span class="stat-sep">·</span>
        <ha-icon icon="mdi:timer-outline" class="render-icon"></ha-icon>
        <span>Next:&nbsp;${nextPower}</span>
      </div>
    `;
  }

  private _renderNextContent() {
    const eid = this._eid("next_content");
    if (!eid) return nothing;
    return html`
      <div class="next-content-row">
        <button
          class="md3-btn tonal full-width"
          @click=${this._handleNextContent}
          ?disabled=${this._sending}
        >
          <ha-icon icon="mdi:skip-next-outline"></ha-icon>
          Next Content
        </button>
      </div>
    `;
  }

  private _renderSendText() {
    if (this._config.show_send_text === false) return nothing;
    const open = this._sendTextExpanded;

    return html`
      <div class="expand-section">
        <div
          class="expand-header ${open ? "open" : ""}"
          @click=${() => (this._sendTextExpanded = !this._sendTextExpanded)}
          role="button"
          aria-expanded=${open}
        >
          <ha-icon class="expand-lead-icon" icon="mdi:card-text-outline"></ha-icon>
          <span class="expand-label">Send Text</span>
          <ha-icon class="expand-chevron ${open ? "open" : ""}" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="expand-content ${open ? "open" : ""}">
          <div class="expand-body">
            <ha-textfield
              label="Title"
              .value=${this._textTitle}
              @input=${(e: Event) =>
                (this._textTitle = (e.target as HTMLInputElement).value)}
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Message"
              .value=${this._textMessage}
              @input=${(e: Event) =>
                (this._textMessage = (e.target as HTMLInputElement).value)}
              helper="Use \\n for line breaks"
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Signature"
              .value=${this._textSignature}
              @input=${(e: Event) =>
                (this._textSignature = (e.target as HTMLInputElement).value)}
              placeholder="e.g. 2026-02-20"
              style="width:100%"
            ></ha-textfield>
            <div class="action-row">
              <button
                class="md3-btn filled"
                @click=${this._handleSendText}
                ?disabled=${this._sending ||
                (!this._textTitle && !this._textMessage)}
              >
                <ha-icon icon="mdi:send"></ha-icon>
                Send Text
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private _renderSendImage() {
    if (this._config.show_send_image === false) return nothing;
    const open = this._sendImageExpanded;

    return html`
      <div class="expand-section">
        <div
          class="expand-header ${open ? "open" : ""}"
          @click=${() => (this._sendImageExpanded = !this._sendImageExpanded)}
          role="button"
          aria-expanded=${open}
        >
          <ha-icon class="expand-lead-icon" icon="mdi:image-outline"></ha-icon>
          <span class="expand-label">Send Image</span>
          <ha-icon class="expand-chevron ${open ? "open" : ""}" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="expand-content ${open ? "open" : ""}">
          <div class="expand-body">
            ${this._config.gemini_api_key
              ? html`
                  <button
                    class="md3-btn tonal full-width"
                    @click=${this._handleGenerateImage}
                    ?disabled=${this._generating || this._sending}
                  >
                    <ha-icon icon="mdi:creation"></ha-icon>
                    ${this._generating ? "Generating…" : "✨ Generate Art"}
                  </button>
                `
              : nothing}
            <div class="file-field">
              <span class="file-field-label">Image (296 × 152 PNG)</span>
              <label class="file-input-btn">
                <ha-icon icon="mdi:image-plus"></ha-icon>
                <span>${this._imageData ? "Image selected ✓" : "Choose file…"}</span>
                <input type="file" accept="image/png" @change=${this._handleFileSelect} />
              </label>
            </div>
            <div class="two-col">
              <div class="md3-field">
                <label class="md3-field-label">Dither</label>
                <select
                  class="md3-select"
                  .value=${this._ditherType}
                  @change=${(e: Event) =>
                    (this._ditherType = (e.target as HTMLSelectElement).value)}
                >
                  <option value="DIFFUSION">Diffusion</option>
                  <option value="ORDERED">Ordered</option>
                  <option value="NONE">None</option>
                </select>
              </div>
              <div class="md3-field">
                <label class="md3-field-label">Border</label>
                <select
                  class="md3-select"
                  .value=${String(this._border)}
                  @change=${(e: Event) =>
                    (this._border = parseInt(
                      (e.target as HTMLSelectElement).value,
                    ))}
                >
                  <option value="0">White</option>
                  <option value="1">Black</option>
                </select>
              </div>
            </div>
            <div class="action-row">
              <button
                class="md3-btn filled"
                @click=${this._handleSendImage}
                ?disabled=${this._sending || !this._imageData}
              >
                <ha-icon icon="mdi:image-send"></ha-icon>
                Send Image
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  protected render() {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    if (!this._resolved) {
      return html`<ha-card><div class="section">Discovering device…</div></ha-card>`;
    }

    if (!this._device) {
      return html`<ha-card><div class="section">Device not found. Check the integration.</div></ha-card>`;
    }

    return html`
      <ha-card>
        ${this._renderHero()}
        ${this._renderInfo()}
        <div class="divider"></div>
        ${this._renderNextContent()}
        <div class="divider"></div>
        ${this._renderSendText()}
        ${this._renderSendImage()}
        ${this._toast
          ? html`<div class="card-footer">
              <div class="toast ${this._toastType}">${this._toast}</div>
            </div>`
          : nothing}
      </ha-card>
    `;
  }

  static styles = cardStyles;
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "dot-quote0-card",
  name: "Dot. Quote/0",
  description: "Control and monitor your Dot. Quote/0 e-ink device",
  preview: false,
});
