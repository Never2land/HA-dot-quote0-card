import { css } from "lit";

export const cardStyles = css`
  :host {
    --dot-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --dot-text: var(--primary-text-color, #212121);
    --dot-secondary: var(--secondary-text-color, #727272);
    --dot-accent: var(--primary-color, #03a9f4);
    --dot-divider: var(--divider-color, rgba(0, 0, 0, 0.12));
    --dot-success: var(--success-color, #4caf50);
    --dot-error: var(--error-color, #f44336);
    --dot-surface: var(--secondary-background-color, #f5f5f5);
    --dot-ripple: var(--primary-color, #03a9f4);
  }

  ha-card {
    overflow: hidden;
  }

  /* ---- Header ---- */

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 8px;
  }

  .device-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .device-name {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--dot-text);
    letter-spacing: 0.01em;
  }

  .device-meta {
    font-size: 0.8em;
    color: var(--dot-secondary);
    letter-spacing: 0.02em;
  }

  /* Material Design chip-style online badge */
  .status-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72em;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 10px 4px 8px;
    border-radius: 16px;
  }

  .status-chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .status-chip.online {
    background: color-mix(in srgb, var(--dot-success) 15%, transparent);
    color: var(--dot-success);
  }

  .status-chip.online .status-chip-dot {
    background: var(--dot-success);
  }

  .status-chip.offline {
    background: color-mix(in srgb, var(--dot-error) 15%, transparent);
    color: var(--dot-error);
  }

  .status-chip.offline .status-chip-dot {
    background: var(--dot-error);
  }

  /* ---- Section / Status grid ---- */

  .section {
    padding: 8px 16px 12px;
  }

  .section-title {
    font-size: 0.72em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--dot-secondary);
    margin-bottom: 8px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 16px;
  }

  .status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875em;
    padding: 2px 0;
  }

  .status-label {
    color: var(--dot-secondary);
  }

  .status-value {
    color: var(--dot-text);
    font-weight: 500;
  }

  /* ---- Divider ---- */

  .divider {
    height: 1px;
    background: var(--dot-divider);
    margin: 0 16px;
  }

  /* ---- Preview ---- */

  .preview-section {
    padding: 12px 16px;
  }

  .preview-frame {
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid var(--dot-divider);
    display: block;
    width: 100%;
    aspect-ratio: 296 / 152;
    position: relative;
    background: var(--dot-surface);
  }

  .preview-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  /* SVG fallback inherits color for monochromatic theming */
  .preview-fallback {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--dot-text);
  }

  /* ---- Expandable sections ---- */

  .expand-section {
    /* no extra padding; header handles it */
  }

  .expand-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    transition: background 0.15s ease;
  }

  .expand-header:hover {
    background: color-mix(in srgb, var(--dot-accent) 8%, transparent);
  }

  .expand-header .section-title {
    margin-bottom: 0;
  }

  .expand-chevron {
    color: var(--dot-secondary);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
  }

  .expand-chevron.open {
    transform: rotate(180deg);
  }

  /* Animate height via max-height trick */
  .expand-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-content.open {
    max-height: 600px;
  }

  .expand-body {
    padding: 4px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* ---- Material text field / select sizing ---- */

  ha-textfield,
  ha-select {
    display: block;
    width: 100%;
  }

  /* ---- Two-column row for selects ---- */

  .md-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* ---- File input styled as Material outlined button ---- */

  .file-input-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .file-input-label {
    font-size: 0.75em;
    color: var(--dot-secondary);
    letter-spacing: 0.02em;
  }

  .file-input-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border: 1.5px solid var(--dot-divider);
    border-radius: 4px;
    font-size: 0.875em;
    color: var(--dot-text);
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    background: transparent;
  }

  .file-input-btn:hover {
    border-color: var(--dot-accent);
    background: color-mix(in srgb, var(--dot-accent) 6%, transparent);
  }

  .file-input-btn ha-icon {
    color: var(--dot-accent);
    --mdc-icon-size: 18px;
  }

  .file-input-btn input[type="file"] {
    display: none;
  }

  /* ---- Button row (mwc-button) ---- */

  .md-button-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 4px;
  }

  .md-button-row mwc-button {
    --mdc-theme-primary: var(--dot-accent);
  }

  /* ---- Toast ---- */

  .card-footer {
    padding: 0 16px 12px;
  }

  .toast {
    font-size: 0.8em;
    padding: 8px 12px;
    border-radius: 4px;
    text-align: center;
    letter-spacing: 0.02em;
  }

  .toast.success {
    background: color-mix(in srgb, var(--dot-success) 15%, transparent);
    color: var(--dot-success);
  }

  .toast.error {
    background: color-mix(in srgb, var(--dot-error) 15%, transparent);
    color: var(--dot-error);
  }
`;
