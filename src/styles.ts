import { css } from "lit";

export const cardStyles = css`
  :host {
    --dot-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --dot-text: var(--primary-text-color, #212121);
    --dot-secondary: var(--secondary-text-color, #727272);
    --dot-accent: var(--primary-color, #03a9f4);
    --dot-divider: var(--divider-color, #e0e0e0);
    --dot-success: #4caf50;
    --dot-error: #f44336;
  }

  ha-card {
    overflow: hidden;
  }

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
  }

  .device-meta {
    font-size: 0.85em;
    color: var(--dot-secondary);
  }

  .online-badge {
    font-size: 0.75em;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
  }

  .online-badge.online {
    background: var(--dot-success);
    color: #fff;
  }

  .online-badge.offline {
    background: var(--dot-error);
    color: #fff;
  }

  .section {
    padding: 8px 16px;
  }

  .section-title {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    font-size: 0.9em;
  }

  .status-label {
    color: var(--dot-secondary);
  }

  .status-value {
    color: var(--dot-text);
    font-weight: 500;
  }

  .divider {
    border: none;
    border-top: 1px solid var(--dot-divider);
    margin: 8px 16px;
  }

  .preview-section {
    padding: 8px 16px;
    text-align: center;
  }

  .preview-frame {
    display: inline-block;
    border: 2px solid var(--dot-text);
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    max-width: 100%;
  }

  .preview-frame img {
    display: block;
    width: 296px;
    height: 152px;
    max-width: 100%;
    height: auto;
    image-rendering: pixelated;
  }

  .preview-placeholder {
    width: 296px;
    height: 152px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dot-secondary);
    font-size: 0.85em;
    background: #f5f5f5;
  }

  .input-group {
    margin-bottom: 8px;
  }

  .input-group label {
    display: block;
    font-size: 0.8em;
    color: var(--dot-secondary);
    margin-bottom: 2px;
  }

  .input-group input,
  .input-group textarea,
  .input-group select {
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid var(--dot-divider);
    border-radius: 4px;
    font-size: 0.9em;
    font-family: inherit;
    background: var(--dot-card-bg);
    color: var(--dot-text);
    outline: none;
  }

  .input-group input:focus,
  .input-group textarea:focus,
  .input-group select:focus {
    border-color: var(--dot-accent);
  }

  .input-group textarea {
    resize: vertical;
    min-height: 60px;
  }

  .input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .button-row {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    padding-bottom: 4px;
  }

  .btn {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn:hover {
    opacity: 0.85;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background: var(--dot-accent);
    color: #fff;
  }

  .btn-secondary {
    background: var(--dot-divider);
    color: var(--dot-text);
  }

  .btn-send {
    background: var(--dot-success);
    color: #fff;
  }

  .toast {
    font-size: 0.8em;
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: 4px;
    text-align: center;
  }

  .toast.success {
    background: #e8f5e9;
    color: var(--dot-success);
  }

  .toast.error {
    background: #ffebee;
    color: var(--dot-error);
  }

  .card-footer {
    padding: 0 16px 12px;
  }
`;
