import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DotQuote0CardConfig, Hass, DOMAIN } from "./types";

interface DeviceOption {
  label: string;
  prefix: string;
  entity: string;
}

@customElement("dot-quote0-card-editor")
export class DotQuote0CardEditor extends LitElement {
  @property({ attribute: false }) public hass!: Hass;
  @state() private _config!: DotQuote0CardConfig;

  setConfig(config: DotQuote0CardConfig): void {
    this._config = { ...config };
  }

  private _getDevices(): DeviceOption[] {
    if (!this.hass) return [];
    const seen = new Map<string, DeviceOption>();

    for (const eid of Object.keys(this.hass.states)) {
      if (!eid.startsWith(`sensor.${DOMAIN}_`)) continue;
      if (!eid.endsWith("_power_state")) continue;

      const prefix = eid.replace("sensor.", "").replace("_power_state", "");
      if (seen.has(prefix)) continue;

      const entity = this.hass.states[eid];
      const name =
        entity.attributes.friendly_name?.replace(" Power State", "") ||
        prefix;
      seen.set(prefix, { label: name, prefix, entity: eid });
    }
    return Array.from(seen.values());
  }

  private _dispatchChange(newConfig: DotQuote0CardConfig): void {
    const event = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _entityChanged(ev: Event): void {
    const value = (ev.target as HTMLSelectElement).value;
    this._dispatchChange({ ...this._config, entity: value });
  }

  private _checkboxChanged(key: string, ev: Event): void {
    const checked = (ev.target as HTMLInputElement).checked;
    this._dispatchChange({ ...this._config, [key]: checked });
  }

  protected render() {
    if (!this._config) return html``;

    const devices = this._getDevices();

    return html`
      <div class="editor">
        <div class="field">
          <label>Device</label>
          <select @change=${this._entityChanged}>
            <option value="" ?selected=${!this._config.entity}>
              -- Select a Quote/0 device --
            </option>
            ${devices.map(
              (d) => html`
                <option
                  value=${d.prefix}
                  ?selected=${this._config.entity === d.prefix}
                >
                  ${d.label}
                </option>
              `,
            )}
          </select>
          ${devices.length === 0
            ? html`<div class="hint">
                No Dot. Quote/0 devices found. Make sure the integration is
                installed and configured.
              </div>`
            : ""}
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
      background: var(--ha-card-background, var(--card-background-color, #fff));
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
  `;
}
