# Dot. Quote/0 Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)

A custom Lovelace card for [Dot. Quote/0](https://dot.mindreset.tech/docs/quote_0) e-ink devices in Home Assistant.

Monitor device status, preview the current display, and push text or image content — all from a single dashboard card.

> **Requires** the [Dot. Quote/0 integration](https://github.com/Never2land/HA-dot-quote0) to be installed first.

## Features

- **Device status** — power state, battery, Wi-Fi signal, firmware version, render timestamps
- **Online indicator** — live connectivity badge
- **E-ink preview** — shows the current rendered image on the device display
- **Send Text** — compose and push text content (title, message, signature) directly from the card
- **Send Image** — upload a PNG, choose dither algorithm and border color, then push to the device
- **Next Content** — cycle the device to its next scheduled content
- **Device picker** — select from discovered Quote/0 devices already in Home Assistant (no manual serial entry)
- **Visual editor** — configure the card from the dashboard UI (device picker + section toggles)

## Installation

### HACS (recommended)

1. Open **HACS → Frontend → ⋮ menu → Custom repositories**
2. Add `https://github.com/Never2land/HA-dot-quote0-card` with category **Dashboard**
3. Search for and install **Dot. Quote/0 Card**
4. Reload the browser (hard refresh)

### Manual

1. Download `dist/dot-quote0-card.js` from the [latest release](https://github.com/Never2land/HA-dot-quote0-card/releases)
2. Copy it to your `config/www/` directory
3. Add the resource in **Settings → Dashboards → ⋮ → Resources**:
   - URL: `/local/dot-quote0-card.js`
   - Type: JavaScript Module
4. Reload the browser

## Configuration

Use the **visual card editor** — add a new card, search for **Dot. Quote/0**, and pick your device from the dropdown. All configured Quote/0 devices are discovered automatically from the HA entity and device registries.

Or add manually in YAML:

```yaml
type: custom:dot-quote0-card
device_id: ABCD1234ABCD
```

### Options

| Option            | Type    | Default      | Description                                                            |
| ----------------- | ------- | ------------ | ---------------------------------------------------------------------- |
| `device_id`       | string  | **required** | Device serial (auto-populated when using the visual editor)            |
| `show_preview`    | boolean | `true`       | Show the e-ink display preview                                         |
| `show_send_text`  | boolean | `true`       | Show the Send Text controls                                            |
| `show_send_image` | boolean | `true`       | Show the Send Image controls                                           |

### Full example

```yaml
type: custom:dot-quote0-card
device_id: ABCD1234ABCD
show_preview: true
show_send_text: true
show_send_image: false
```

## Card Layout

```
┌──────────────────────────────────────────────┐
│  Quote/0 4C14                       [Online] │
│  FW 1.0.0                                    │
├──────────────────────────────────────────────┤
│  STATUS                                      │
│  Power    Power Active    Battery  Charging   │
│  Wi-Fi    -62 dBm        Last render  14:11  │
│  Next render  14:16                           │
├──────────────────────────────────────────────┤
│  DISPLAY PREVIEW                             │
│  ┌──────────────────────────────────────┐    │
│  │         296 × 152 e-ink image        │    │
│  └──────────────────────────────────────┘    │
├──────────────────────────────────────────────┤
│  SEND TEXT                                   │
│  Title:     [________________________]       │
│  Message:   [________________________]       │
│  Signature: [________________________]       │
│  [Send Text]              [Next Content]     │
├──────────────────────────────────────────────┤
│  SEND IMAGE                                  │
│  Image:  [Browse...]                         │
│  Dither: [Diffusion ▾]   Border: [White ▾]   │
│  [Send Image]                                │
└──────────────────────────────────────────────┘
```

## Development

```bash
# Install dependencies
npm install

# Build (outputs to dist/dot-quote0-card.js)
npm run build

# Watch mode for development
npm run watch
```

Copy the built file to your HA `config/www/` directory and add it as a resource to test locally.

## License

MIT
