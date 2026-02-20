import {
  Hass,
  DOMAIN,
  DotDevice,
  EntityRegistryEntry,
  DeviceRegistryEntry,
} from "./types";

let _cache: { devices: DotDevice[]; ts: number } | null = null;
const CACHE_TTL = 30_000;

export async function discoverDevices(hass: Hass): Promise<DotDevice[]> {
  if (_cache && Date.now() - _cache.ts < CACHE_TTL) return _cache.devices;

  const [entityEntries, deviceEntries]: [
    EntityRegistryEntry[],
    DeviceRegistryEntry[],
  ] = await Promise.all([
    hass.connection.sendMessagePromise({ type: "config/entity_registry/list" }),
    hass.connection.sendMessagePromise({ type: "config/device_registry/list" }),
  ]);

  const dotEntities = entityEntries.filter((e) => e.platform === DOMAIN);

  const haDeviceIds = new Set(dotEntities.map((e) => e.device_id));
  const deviceMap = new Map<string, DeviceRegistryEntry>();
  for (const d of deviceEntries) {
    if (haDeviceIds.has(d.id)) deviceMap.set(d.id, d);
  }

  const grouped = new Map<string, DotDevice>();
  for (const ent of dotEntities) {
    const dev = deviceMap.get(ent.device_id);
    if (!dev) continue;

    let dotDev = grouped.get(ent.device_id);
    if (!dotDev) {
      const dotId =
        dev.identifiers.find(([domain]) => domain === DOMAIN)?.[1] ?? "";
      dotDev = {
        ha_device_id: ent.device_id,
        dot_device_id: dotId,
        name: dev.name || `Quote/0 ${dotId.slice(-4)}`,
        entities: {},
      };
      grouped.set(ent.device_id, dotDev);
    }

    const suffix = ent.unique_id.replace(`${dotDev.dot_device_id}_`, "");
    dotDev.entities[suffix] = ent.entity_id;
  }

  const devices = Array.from(grouped.values());
  _cache = { devices, ts: Date.now() };
  return devices;
}

export function findDevice(
  devices: DotDevice[],
  deviceId: string,
): DotDevice | undefined {
  return devices.find((d) => d.dot_device_id === deviceId);
}
