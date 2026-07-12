// Temporary stock-photo placeholder until the real photo is added.
// Deterministic by seed, so the same person/spot always gets the same placeholder.
export function dummyPhoto(seed: string, width = 480, height = 600) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
