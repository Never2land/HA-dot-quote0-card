# Dot. Quote/0 Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)

A custom Lovelace card for [Dot. Quote/0](https://dot.mindreset.tech/docs/quote_0) e-ink devices in Home Assistant.

Monitor device status, preview the current display, push text or image content, and generate pixel art with Gemini AI — all from a single dashboard card.

> **Requires** the [Dot. Quote/0 integration](https://github.com/Never2land/HA-dot-quote0) to be installed first.

## Features

- **E-ink hero preview** — full-width display preview at the top of the card; shows generated art with a "Preview — not sent yet" badge before it's sent
- **Device status** — online indicator, power state, battery, Wi-Fi signal, firmware version, and render timestamps shown as inline chips
- **Next Content** — always-visible tonal button to cycle the device to its next scheduled content
- **Send Text** — collapsible section to compose and push text content (title, message, signature) directly from the card
- **Send Image** — collapsible section to upload a PNG (296 × 152), choose dither algorithm and border color, then push to the device
- **✨ Generate Art** — uses Gemini AI (`gemini-3.1-flash-image-preview`) to generate a random cute pixel-art scene sized for the e-ink display; appears instantly in the hero preview before sending
- **Device picker** — select from discovered Quote/0 devices already in Home Assistant (no manual serial entry)
- **Visual editor** — configure the card from the dashboard UI (device picker, section toggles, Gemini API key)

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
| `show_preview`    | boolean | `true`       | Show the e-ink display preview hero                                    |
| `show_send_text`  | boolean | `true`       | Show the Send Text collapsible section                                 |
| `show_send_image` | boolean | `true`       | Show the Send Image collapsible section (includes Generate Art)        |
| `gemini_api_key`  | string  | —            | Google Gemini API key for AI art generation (optional; client-side only) |

### Full example

```yaml
type: custom:dot-quote0-card
device_id: ABCD1234ABCD
show_preview: true
show_send_text: true
show_send_image: true
gemini_api_key: AIzaSy...
```

## Card Layout

```
┌────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────┐  │
│  │                                          │  │
│  │        296 × 152 e-ink preview           │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
│  Quote/0 4C14                       [● Online] │
│  FW 1.2.0                                      │
│  ⚡ Power Active  · 🔋 Charging  · 📶 -62 dBm  │
│  🕐 14:11  · ⏱ Next: 14:16                     │
├────────────────────────────────────────────────┤
│  [      ▶ Next Content       ]                 │
├────────────────────────────────────────────────┤
│  ▼  SEND TEXT                                  │
│     Title:     [________________________]      │
│     Message:   [________________________]      │
│     Signature: [________________________]      │
│     [Send Text]                                │
├────────────────────────────────────────────────┤
│  ▼  SEND IMAGE                                 │
│     [  ✨ Generate Art  ]                      │
│     Image (296 × 152 PNG)  [Choose file…]      │
│     Dither: [Diffusion ▾]  Border: [White ▾]   │
│     [Send Image]                               │
└────────────────────────────────────────────────┘
```

## AI Art Generation

The **✨ Generate Art** button is available in the Send Image section when a Gemini API key is configured.

1. Open the card editor → paste your [Google Gemini API key](https://aistudio.google.com/apikey) → Save
2. Expand **Send Image** and click **✨ Generate Art**
3. A random cute pixel-art scene is generated (e.g. *sleeping cat on a windowsill*, *chubby robot watering a cactus*, *frog in a top hat*) and immediately shown in the hero preview with a **"Preview — not sent yet"** badge
4. Click **Send Image** to push it to the device — the badge clears and the preview returns to the live device state

The API key is stored in the card YAML and used directly in the browser. It is never sent to Home Assistant.

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
