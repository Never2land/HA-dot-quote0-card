export interface DotQuote0CardConfig {
  type: string;
  device_id: string;
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

export interface HassConnection {
  sendMessagePromise(msg: Record<string, any>): Promise<any>;
}

export interface Hass {
  states: Record<string, HassEntityState>;
  connection: HassConnection;
  callService(
    domain: string,
    service: string,
    data?: Record<string, any>,
    target?: { device_id?: string; entity_id?: string; area_id?: string },
  ): Promise<void>;
}

export const DOMAIN = "dot_quote0";

export interface EntityRegistryEntry {
  entity_id: string;
  unique_id: string;
  platform: string;
  device_id: string;
}

export interface DeviceRegistryEntry {
  id: string;
  name: string;
  identifiers: [string, string][];
  manufacturer: string;
  model: string;
  sw_version: string;
}

export interface DotDevice {
  ha_device_id: string;
  dot_device_id: string;
  name: string;
  entities: Record<string, string>;
}
