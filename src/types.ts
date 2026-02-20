export interface DotQuote0CardConfig {
  type: string;
  entity: string;
  show_preview?: boolean;
  show_send_text?: boolean;
  show_send_image?: boolean;
}

export interface HassEntityState {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
  last_updated: string;
}

export interface Hass {
  states: Record<string, HassEntityState>;
  callService(
    domain: string,
    service: string,
    data?: Record<string, any>,
  ): Promise<void>;
}

export const DOMAIN = "dot_quote0";

export const ENTITY_SUFFIXES = {
  power_state: "sensor",
  battery_status: "sensor",
  wifi_signal: "sensor",
  firmware_version: "sensor",
  last_render: "sensor",
  next_render_battery: "sensor",
  next_render_power: "sensor",
  online: "binary_sensor",
  next_content: "button",
  send_text: "button",
  send_image: "button",
  text_title: "text",
  text_message: "text",
  text_signature: "text",
  image_data: "text",
  dither_type: "select",
} as const;
