export interface DotQuote0CardConfig {
  type: string;
  device_id: string;
  show_preview?: boolean;
  show_send_text?: boolean;
  show_send_image?: boolean;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
  last_updated: string;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService(
    domain: string,
    service: string,
    data?: Record<string, any>
  ): Promise<void>;
}
