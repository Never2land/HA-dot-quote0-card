import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass, HassEntity } from "./types";
import { cardStyles } from "./styles";
import "./editor";

const DOMAIN = "dot_quote0";

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
      device_id: "",
      show_preview: true,
      show_send_text: true,
      show_send_image: true,
    };
  }

  setConfig(config: DotQuote0CardConfig): void {
    if (!config.device_id) {
      throw new Error("Please set device_id");
    }
    this._config = config;
  }

  getCardSize(): number {
    return 8;
  }

  getGridOptions() {
    return { rows: 8, columns: 12, min_rows: 4, min_columns: 6 };
  }

  private _entityId(suffix: string): string {
    return `sensor.${DOMAIN}_${this._config.device_id}_${suffix}`;
  }

  private _getState(suffix: string): string {
    const eid = this._entityId(suffix);
    const entity = this.hass?.states[eid];
    return entity?.state ?? "unavailable";
  }

  private _getOnline(): boolean {
    const eid = `binary_sensor.${DOMAIN}_${this._config.device_id}_online`;
    const entity = this.hass?.states[eid];
    return entity?.state === "on";
  }

  private _getPreviewImages(): string[] {
    // Try to get images from the last render sensor attributes
    const eid = this._entityId("last_render");
    const entity = this.hass?.states[eid];
    // The coordinator stores current_images but they're not exposed as attributes by default
    // We'll check if there's an image attribute on any sensor
    // Fallback: check all entity attributes for 'current_images'
    for (const key in this.hass?.states) {
      if (key.startsWith(`sensor.${DOMAIN}_${this._config.device_id}`)) {
        const e = this.hass.states[key];
        if (e.attributes.current_images) {
          return e.attributes.current_images;
        }
      }
    }
    return [];
  }

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
        device_id: this._config.device_id,
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
        device_id: this._config.device_id,
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
    const eid = `button.${DOMAIN}_${this._config.device_id}_next_content`;
    try {
      await this.hass.callService("button", "press", {
        entity_id: eid,
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

  private _renderStatus() {
    const online = this._getOnline();
    const power = this._getState("power_state");
    const battery = this._getState("battery_status");
    const wifi = this._getState("wifi_signal");
    const firmware = this._getState("firmware_version");
    const lastRender = this._getState("last_render");
    const nextPower = this._getState("next_render_power");

    return html`
      <div class="card-header">
        <div class="device-info">
          <span class="device-name">Quote/0 ${this._config.device_id.slice(-4)}</span>
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
            <span class="status-value">${wifi} dBm</span>
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
          <label>Image (296×152 PNG)</label>
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
                  (e.target as HTMLSelectElement).value
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
