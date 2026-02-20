import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass } from "./types";

@customElement("dot-quote0-card-editor")
export class DotQuote0CardEditor extends LitElement {
  @property({ attribute: false }) public hass!: Hass;
  @state() private _config!: DotQuote0CardConfig;

  setConfig(config: DotQuote0CardConfig): void {
    this._config = { ...config };
  }

  private _dispatchChange(newConfig: DotQuote0CardConfig): void {
    const event = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _valueChanged(key: string, ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const value =
      target.type === "checkbox" ? target.checked : target.value;
    this._dispatchChange({ ...this._config, [key]: value });
  }

  protected render() {
    if (!this._config) return html``;

    return html`
      <div class="editor">
        <div class="field">
          <label>Device ID (serial number from Dot. App)</label>
          <input
            type="text"
            .value=${this._config.device_id || ""}
            @input=${(e: Event) => this._valueChanged("device_id", e)}
            placeholder="e.g. ABCD1234ABCD"
          />
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_preview !== false}
              @change=${(e: Event) => this._valueChanged("show_preview", e)}
            />
            Show e-ink preview
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_send_text !== false}
              @change=${(e: Event) => this._valueChanged("show_send_text", e)}
            />
            Show Send Text controls
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_send_image !== false}
              @change=${(e: Event) => this._valueChanged("show_send_image", e)}
            />
            Show Send Image controls
          </label>
        </div>
      </div>
    `;
  }

  static styles = css`
    .editor {
      padding: 8px;
    }
    .field {
      margin-bottom: 12px;
    }
    .field > label {
      display: block;
      font-size: 0.85em;
      margin-bottom: 4px;
      color: var(--secondary-text-color);
    }
    .field input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
    }
    .field label input[type="checkbox"] {
      margin-right: 6px;
    }
  `;
}
