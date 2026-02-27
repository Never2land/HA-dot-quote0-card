import { css } from "lit";

export const cardStyles = css`
  /* ---- MD3 tokens ---- */
  :host {
    --md-primary: var(--primary-color, #6750a4);
    --md-on-primary: var(--text-primary-color, #fff);
    --md-surface: var(--ha-card-background, var(--card-background-color, #fff));
    --md-on-surface: var(--primary-text-color, #1c1b1f);
    --md-on-surface-var: var(--secondary-text-color, #49454f);
    --md-outline: var(--divider-color, rgba(0, 0, 0, 0.12));
    --md-surface-var: var(--secondary-background-color, #f5f5f5);
    --md-success: var(--success-color, #4caf50);
    --md-error: var(--error-color, #f44336);
    --md-r-sm: 8px;
    --md-r-md: 12px;
    --md-r-lg: 16px;
    --md-r-full: 50px;
  }

  ha-card {
    overflow: hidden;
  }

  /* ---- Hero preview — full-width, touches card edges ---- */

  .hero-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 296 / 152;
    background: var(--md-surface-var);
    overflow: hidden;
    display: block;
  }

  .hero-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  .hero-badge {
    position: absolute;
    bottom: 6px;
    right: 8px;
    font-size: 0.65em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: var(--md-r-full);
    background: color-mix(in srgb, var(--md-primary) 85%, transparent);
    color: var(--md-on-primary);
    pointer-events: none;
  }

  .hero-fallback {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--md-on-surface);
  }

  /* ---- Device header ---- */

  .device-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 4px;
  }

  .device-header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .device-name {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--md-on-surface);
    letter-spacing: 0.01em;
  }

  .device-fw {
    font-size: 0.72em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.03em;
  }

  /* Online pill */
  .online-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68em;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 4px 10px 4px 7px;
    border-radius: var(--md-r-full);
  }

  .online-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .online-pill.online {
    background: color-mix(in srgb, var(--md-success) 16%, transparent);
    color: var(--md-success);
  }

  .online-pill.online .online-dot {
    background: var(--md-success);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--md-success) 30%, transparent);
  }

  .online-pill.offline {
    background: color-mix(in srgb, var(--md-error) 14%, transparent);
    color: var(--md-error);
  }

  .online-pill.offline .online-dot {
    background: var(--md-error);
  }

  /* ---- Inline status chips ---- */

  .status-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 8px;
    padding: 2px 16px 2px;
  }

  .stat-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.82em;
    font-weight: 500;
    color: var(--md-on-surface);
  }

  .chip-icon {
    --mdc-icon-size: 15px;
    color: var(--md-primary);
  }

  .chip-icon.battery {
    color: color-mix(in srgb, var(--md-success) 80%, var(--md-primary));
  }

  .chip-icon.wifi {
    color: color-mix(in srgb, var(--md-primary) 70%, var(--md-success));
  }

  .stat-sep {
    color: var(--md-outline);
    font-size: 0.85em;
    user-select: none;
  }

  /* ---- Render-times row ---- */

  .render-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 2px 16px 12px;
    font-size: 0.73em;
    color: var(--md-on-surface-var);
  }

  .render-icon {
    --mdc-icon-size: 13px;
    color: var(--md-on-surface-var);
    flex-shrink: 0;
  }

  /* ---- Next Content row ---- */

  .next-content-row {
    padding: 10px 14px 10px;
  }

  /* ---- Divider ---- */

  .divider {
    height: 1px;
    background: var(--md-outline);
  }

  /* ---- Expand sections ---- */

  .expand-section {
    border-top: 1px solid var(--md-outline);
  }

  .expand-section:first-of-type {
    border-top: none;
  }

  .expand-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease;
  }

  .expand-header:hover {
    background: color-mix(in srgb, var(--md-on-surface) 5%, transparent);
  }

  .expand-header.open {
    background: color-mix(in srgb, var(--md-primary) 8%, transparent);
  }

  .expand-lead-icon {
    --mdc-icon-size: 17px;
    color: var(--md-on-surface-var);
    flex-shrink: 0;
    transition: color 0.15s;
  }

  .expand-header.open .expand-lead-icon {
    color: var(--md-primary);
  }

  .expand-label {
    flex: 1;
    font-size: 0.78em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--md-on-surface-var);
    transition: color 0.15s;
  }

  .expand-header.open .expand-label {
    color: var(--md-primary);
  }

  .expand-chevron {
    --mdc-icon-size: 18px;
    color: var(--md-on-surface-var);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s;
    flex-shrink: 0;
  }

  .expand-chevron.open {
    transform: rotate(180deg);
    color: var(--md-primary);
  }

  .expand-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-content.open {
    max-height: 640px;
  }

  .expand-body {
    padding: 10px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* ---- Generated scene label ---- */

  .scene-label {
    font-size: 0.73em;
    font-style: italic;
    color: var(--md-on-surface-var);
    line-height: 1.4;
    padding: 2px 4px;
    border-left: 2px solid color-mix(in srgb, var(--md-primary) 40%, transparent);
    margin-top: -2px;
  }

  /* ---- ha-textfield ---- */

  ha-textfield {
    display: block;
    width: 100%;
  }

  /* ---- File input ---- */

  .file-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .file-field-label {
    font-size: 0.7em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.02em;
  }

  .file-input-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1.5px solid var(--md-outline);
    border-radius: var(--md-r-sm);
    font-size: 0.84em;
    color: var(--md-primary);
    cursor: pointer;
    background: transparent;
    transition: border-color 0.15s, background 0.15s;
  }

  .file-input-btn:hover {
    border-color: var(--md-primary);
    background: color-mix(in srgb, var(--md-primary) 6%, transparent);
  }

  .file-input-btn ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
  }

  .file-input-btn input[type="file"] {
    display: none;
  }

  /* ---- Native selects (MD3 outlined style) ---- */

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .md3-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .md3-field-label {
    font-size: 0.7em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.02em;
  }

  .md3-select {
    width: 100%;
    padding: 9px 32px 9px 11px;
    border: 1.5px solid var(--md-outline);
    border-radius: var(--md-r-sm);
    background: transparent;
    color: var(--md-on-surface);
    font-size: 0.875em;
    font-family: inherit;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%23888' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 7px center;
    box-sizing: border-box;
  }

  .md3-select:focus {
    border-color: var(--md-primary);
    outline: none;
  }

  /* ---- MD3 native buttons ---- */

  .action-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 2px;
  }

  .md3-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: var(--md-r-full);
    font-size: 0.84em;
    font-weight: 500;
    letter-spacing: 0.01em;
    font-family: inherit;
    cursor: pointer;
    border: none;
    transition: box-shadow 0.15s, filter 0.15s, background 0.15s;
    white-space: nowrap;
  }

  .md3-btn ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
  }

  .md3-btn.full-width {
    width: 100%;
    justify-content: center;
  }

  .md3-btn.filled {
    background: var(--md-primary);
    color: var(--md-on-primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
  }

  .md3-btn.filled:hover:not(:disabled) {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22), 0 1px 4px rgba(0, 0, 0, 0.14);
    filter: brightness(1.06);
  }

  .md3-btn.filled:active:not(:disabled) {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    filter: brightness(0.96);
  }

  .md3-btn.tonal {
    background: color-mix(in srgb, var(--md-primary) 14%, var(--md-surface));
    color: var(--md-primary);
  }

  .md3-btn.tonal:hover:not(:disabled) {
    background: color-mix(in srgb, var(--md-primary) 22%, var(--md-surface));
  }

  .md3-btn:disabled {
    opacity: 0.38;
    cursor: not-allowed;
    box-shadow: none;
    filter: none;
  }

  /* ---- Toast ---- */

  .card-footer {
    padding: 0 14px 12px;
  }

  .toast {
    font-size: 0.78em;
    padding: 8px 12px;
    border-radius: var(--md-r-sm);
    text-align: center;
    letter-spacing: 0.02em;
  }

  .toast.success {
    background: color-mix(in srgb, var(--md-success) 15%, transparent);
    color: var(--md-success);
  }

  .toast.error {
    background: color-mix(in srgb, var(--md-error) 15%, transparent);
    color: var(--md-error);
  }
`;
