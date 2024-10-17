import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        mdi: () =>
          import('@iconify-json/mdi/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
