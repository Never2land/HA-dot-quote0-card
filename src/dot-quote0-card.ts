import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass, DOMAIN } from "./types";
import { cardStyles } from "./styles";
import "./editor";

@customElement("dot-quote0-card")
export class DotQuote0Card extends LitElement {
  @property({ attribute: false }) public hass!: Hass;
  @state() private _config!: DotQuote0CardConfig;

  @state() private _textTitle = "";
  @state() private _textMessage = "";
  @state() private _textSignature = "";
  @state() private _imageData = "";
  @state() private _ditherType = "DIFFUSION";
  @state() private _border = 0;
  @state() private _toast = "";
  @state() private _toastType: "success" | "error" = "success";
  @state() private _sending = false;

  static getConfigElement() {
    return document.createElement("dot-quote0-card-editor");
  }

  static getStubConfig() {
    return {
      entity: "",
      show_preview: true,
      show_send_text: true,
      show_send_image: true,
    };
  }

  setConfig(config: DotQuote0CardConfig): void {
    if (!config.entity) {
      throw new Error("Please select a device");
    }
    this._config = config;
  }

  getCardSize(): number {
    return 8;
  }

  getGridOptions() {
    return { rows: 8, columns: 12, min_rows: 4, min_columns: 6 };
  }

  // ---- Entity helpers: read directly from hass.states ----

  private _eid(platform: string, suffix: string): string {
    return `${platform}.${this._config.entity}_${suffix}`;
  }

  private _state(platform: string, suffix: string): string {
    const entity = this.hass?.states[this._eid(platform, suffix)];
    return entity?.state ?? "unavailable";
  }

  private _attr(
    platform: string,
    suffix: string,
    attr: string,
  ): any {
    const entity = this.hass?.states[this._eid(platform, suffix)];
    return entity?.attributes?.[attr];
  }

  private _isOnline(): boolean {
    return this._state("binary_sensor", "online") === "on";
  }

  private _deviceId(): string {
    // Extract the raw device serial from the entity prefix
    // Entity prefix is like "dot_quote0_ABCD1234ABCD"
    const prefix = this._config.entity;
    return prefix.startsWith(`${DOMAIN}_`)
      ? prefix.slice(DOMAIN.length + 1)
      : prefix;
  }

  private _deviceName(): string {
    const eid = this._eid("sensor", "power_state");
    const entity = this.hass?.states[eid];
    const friendly = entity?.attributes?.friendly_name;
    if (friendly) return friendly.replace(" Power State", "");
    return `Quote/0 ${this._deviceId().slice(-4)}`;
  }

  private _getPreviewImages(): string[] {
    const prefix = this._config.entity;
    for (const key in this.hass?.states) {
      if (key.startsWith(`sensor.${prefix}`)) {
        const e = this.hass.states[key];
        if (e.attributes.current_images) {
          return e.attributes.current_images;
        }
      }
    }
    return [];
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
        device_id: this._deviceId(),
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
        device_id: this._deviceId(),
        image: this._imageData,
        dither_type: this._ditherType,
        border: this._border,
        refresh_now: true,
      });
      this._showToast("Image sent!", "success");
    } catch (e: any) {
      this._showToast(e.message || "Failed to send", "error");
    } finally {
      this._sending = false;
    }
  }

  private async _handleNextContent() {
    try {
      await this.hass.callService("button", "press", {
        entity_id: this._eid("button", "next_content"),
      });
      this._showToast("Switched to next content", "success");
    } catch (e: any) {
      this._showToast(e.message || "Failed", "error");
    }
  }

  private _handleFileSelect(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      this._imageData = result.split(",")[1] || result;
    };
    reader.readAsDataURL(file);
  }

  // ---- Render ----

  private _renderStatus() {
    const online = this._isOnline();
    const power = this._state("sensor", "power_state");
    const battery = this._state("sensor", "battery_status");
    const wifi = this._state("sensor", "wifi_signal");
    const firmware = this._state("sensor", "firmware_version");
    const lastRender = this._state("sensor", "last_render");
    const nextPower = this._state("sensor", "next_render_power");

    return html`
      <div class="card-header">
        <div class="device-info">
          <span class="device-name">${this._deviceName()}</span>
          <span class="device-meta">FW ${firmware}</span>
        </div>
        <span class="online-badge ${online ? "online" : "offline"}">
          ${online ? "Online" : "Offline"}
        </span>
      </div>
      <div class="section">
        <div class="section-title">Status</div>
        <div class="status-grid">
          <div class="status-item">
            <span class="status-label">Power</span>
            <span class="status-value">${power}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Battery</span>
            <span class="status-value">${battery}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Wi-Fi</span>
            <span class="status-value">${wifi !== "unavailable" ? wifi + " dBm" : wifi}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Last render</span>
            <span class="status-value">${lastRender}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Next render</span>
            <span class="status-value">${nextPower}</span>
          </div>
        </div>
      </div>
    `;
  }

  private _renderPreview() {
    if (this._config.show_preview === false) return nothing;

    const images = this._getPreviewImages();
    const src = images.length > 0 ? images[0] : null;

    return html`
      <hr class="divider" />
      <div class="preview-section">
        <div class="section-title">Display Preview</div>
        <div class="preview-frame">
          ${src
            ? html`<img src="${src}" alt="Current display" />`
            : html`<div class="preview-placeholder">No preview available</div>`}
        </div>
      </div>
    `;
  }

  private _renderSendText() {
    if (this._config.show_send_text === false) return nothing;

    return html`
      <hr class="divider" />
      <div class="section">
        <div class="section-title">Send Text</div>
        <div class="input-group">
          <label>Title</label>
          <input
            type="text"
            .value=${this._textTitle}
            @input=${(e: Event) =>
              (this._textTitle = (e.target as HTMLInputElement).value)}
            placeholder="Enter title"
          />
        </div>
        <div class="input-group">
          <label>Message</label>
          <textarea
            .value=${this._textMessage}
            @input=${(e: Event) =>
              (this._textMessage = (e.target as HTMLTextAreaElement).value)}
            placeholder="Enter message (use \\n for line breaks)"
          ></textarea>
        </div>
        <div class="input-group">
          <label>Signature</label>
          <input
            type="text"
            .value=${this._textSignature}
            @input=${(e: Event) =>
              (this._textSignature = (e.target as HTMLInputElement).value)}
            placeholder="e.g. 2025-08-04 20:00"
          />
        </div>
        <div class="button-row">
          <button
            class="btn btn-send"
            @click=${this._handleSendText}
            ?disabled=${this._sending ||
            (!this._textTitle && !this._textMessage)}
          >
            Send Text
          </button>
          <button
            class="btn btn-secondary"
            @click=${this._handleNextContent}
            ?disabled=${this._sending}
          >
            Next Content
          </button>
        </div>
      </div>
    `;
  }

  private _renderSendImage() {
    if (this._config.show_send_image === false) return nothing;

    return html`
      <hr class="divider" />
      <div class="section">
        <div class="section-title">Send Image</div>
        <div class="input-group">
          <label>Image (296x152 PNG)</label>
          <input type="file" accept="image/png" @change=${this._handleFileSelect} />
        </div>
        <div class="input-row">
          <div class="input-group">
            <label>Dither</label>
            <select
              .value=${this._ditherType}
              @change=${(e: Event) =>
                (this._ditherType = (e.target as HTMLSelectElement).value)}
            >
              <option value="DIFFUSION">Diffusion</option>
              <option value="ORDERED">Ordered</option>
              <option value="NONE">None</option>
            </select>
          </div>
          <div class="input-group">
            <label>Border</label>
            <select
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
        <div class="button-row">
          <button
            class="btn btn-send"
            @click=${this._handleSendImage}
            ?disabled=${this._sending || !this._imageData}
          >
            Send Image
          </button>
        </div>
      </div>
    `;
  }

  protected render() {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    return html`
      <ha-card>
        ${this._renderStatus()} ${this._renderPreview()}
        ${this._renderSendText()} ${this._renderSendImage()}
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
