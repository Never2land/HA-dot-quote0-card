import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass, DotDevice } from "./types";
import { discoverDevices } from "./helpers";

@customElement("dot-quote0-card-editor")
export class DotQuote0CardEditor extends LitElement {
  @state() private _config!: DotQuote0CardConfig;
  @state() private _devices: DotDevice[] = [];
  @state() private _loading = true;

  private _hass!: Hass;

  set hass(hass: Hass) {
    const old = this._hass;
    this._hass = hass;
    if (hass && hass !== old) {
      this._loadDevices();
    }
  }

  get hass(): Hass {
    return this._hass;
  }

  private async _loadDevices(): Promise<void> {
    try {
      this._devices = await discoverDevices(this._hass);
    } catch {
      this._devices = [];
    }
    this._loading = false;
  }

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

  private _deviceChanged(ev: Event): void {
    const value = (ev.target as HTMLSelectElement).value;
    this._dispatchChange({ ...this._config, device_id: value });
  }

  private _checkboxChanged(key: string, ev: Event): void {
    const checked = (ev.target as HTMLInputElement).checked;
    this._dispatchChange({ ...this._config, [key]: checked });
  }

  protected render() {
    if (!this._config) return html``;

    return html`
      <div class="editor">
        <div class="field">
          <label>Device</label>
          ${this._loading
            ? html`<div class="hint">Loading devices...</div>`
            : html`
                <select @change=${this._deviceChanged}>
                  <option value="" ?selected=${!this._config.device_id}>
                    -- Select a Quote/0 device --
                  </option>
                  ${this._devices.map(
                    (d) => html`
                      <option
                        value=${d.dot_device_id}
                        ?selected=${this._config.device_id ===
                        d.dot_device_id}
                      >
                        ${d.name}
                      </option>
                    `,
                  )}
                </select>
                ${this._devices.length === 0
                  ? html`<div class="hint">
                      No Dot. Quote/0 devices found. Make sure the integration
                      is installed and configured.
                    </div>`
                  : ""}
              `}
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_preview !== false}
              @change=${(e: Event) => this._checkboxChanged("show_preview", e)}
            />
            Show e-ink preview
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_send_text !== false}
              @change=${(e: Event) =>
                this._checkboxChanged("show_send_text", e)}
            />
            Show Send Text controls
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${this._config.show_send_image !== false}
              @change=${(e: Event) =>
                this._checkboxChanged("show_send_image", e)}
            />
            Show Send Image controls
          </label>
        </div>
        <div class="field">
          <label class="text-label">Gemini API Key (for AI art generation)</label>
          <input
            type="password"
            class="text-input"
            .value=${this._config.gemini_api_key || ""}
            placeholder="AIza…"
            @input=${(e: Event) =>
              this._dispatchChange({
                ...this._config,
                gemini_api_key: (e.target as HTMLInputElement).value || undefined,
              })}
          />
          <div class="hint-neutral">Optional. Used only in the browser — never sent to HA.</div>
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
    .field select {
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(
        --ha-card-background,
        var(--card-background-color, #fff)
      );
      color: var(--primary-text-color);
      font-size: 0.9em;
    }
    .field label input[type="checkbox"] {
      margin-right: 6px;
    }
    .hint {
      font-size: 0.8em;
      color: var(--error-color, #db4437);
      margin-top: 4px;
    }
    .text-label {
      display: block;
      font-size: 0.85em;
      margin-bottom: 4px;
      color: var(--secondary-text-color);
    }
    .text-input {
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      color: var(--primary-text-color);
      font-size: 0.9em;
    }
    .hint-neutral {
      font-size: 0.78em;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
  `;
}
