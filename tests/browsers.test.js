// @ts-check
import { expect, test } from '@playwright/test';

import _config from '../_config';

const HOST = _config.server.host;
const PORT = _config.server.port;

test('Karte enthält alle Controls', async ({ page }) => {
  await page.goto(`http://${HOST}:${PORT}`);

  // Prüfe ScaleControl (Maßstabsleiste)
  //await page.screenshot({ path: 'debug.png' });
  //console.log(await page.content());
  await expect(page.locator('.maplibregl-ctrl-scale')).toHaveCount(1);

  // Prüfe FullscreenControl
  await expect(page.locator('.maplibregl-ctrl-fullscreen')).toHaveCount(1);

  // Prüfe GeolocateControl
  await expect(page.locator('.maplibregl-ctrl-geolocate')).toHaveCount(1);

  // Prüfe NavigationControl (Zoom-Buttons)
  await expect(page.locator('.maplibregl-ctrl-zoom-in')).toHaveCount(1);
  await expect(page.locator('.maplibregl-ctrl-zoom-out')).toHaveCount(1);
  await expect(page.locator('.maplibregl-ctrl-compass')).toHaveCount(1);

  await page.pause();
});
