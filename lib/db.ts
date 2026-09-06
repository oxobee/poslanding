import { SiteSettings } from "./types";
import { defaultSettings } from "./defaults";
import path from "path";
import fs from "fs";

const DATA_FILE = path.join(process.cwd(), "data", "settings.json");

function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export async function getSettings(): Promise<SiteSettings> {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      await saveSettings(defaultSettings);
      return defaultSettings;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw) as SiteSettings;
    // Merge with defaults to fill any missing fields
    return deepMerge(defaultSettings, parsed) as SiteSettings;
  } catch {
    return defaultSettings;
  }
}

export async function saveSettings(settings: SiteSettings): Promise<void> {
  ensureDataDir();
  settings.updatedAt = new Date().toISOString();
  fs.writeFileSync(DATA_FILE, JSON.stringify(settings, null, 2), "utf-8");
}

export async function updateSettings(
  partial: Partial<SiteSettings>
): Promise<SiteSettings> {
  const current = await getSettings();
  const updated = { ...current, ...partial, updatedAt: new Date().toISOString() };
  await saveSettings(updated);
  return updated;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge(defaults: any, override: any): any {
  if (typeof defaults !== "object" || defaults === null) return override ?? defaults;
  if (typeof override !== "object" || override === null) return defaults;
  if (Array.isArray(defaults)) return Array.isArray(override) ? override : defaults;
  const result: Record<string, unknown> = { ...defaults };
  for (const key of Object.keys(override)) {
    result[key] = deepMerge(defaults[key], override[key]);
  }
  return result;
}
