// Import the 'path' module from Node.js standard library,
// which provides utilities for handling and transforming file paths.
// Here it's used to construct absolute paths in a cross-platform way.
import path from 'node:path';

// Import the Vite plugin to add legacy browser support.
// This plugin generates additional bundles for older browsers
// (like Internet Explorer 11) so they can still run your app.
import legacy from '@vitejs/plugin-legacy';

// Import your custom configuration file.
// Presumably, _config.js exports server configuration like host and port,
// allowing you to centralize project settings.
import _config from './_config.js';

// Extract the host and port values from your custom config,
// so you can use them below in the Vite server configuration.
const HOST = _config.server.host;
const PORT = _config.server.port;

// Export the Vite configuration object as the default export.
// This object configures how Vite should build and serve your project.
export default {
  // Configuration for the local development server.
  server: {
    host: HOST, // The hostname or IP address the dev server should bind to.
    port: PORT  // The port number for serving your Vite project locally.
  },

  // Register plugins to extend Vite's behavior.
  plugins: [
    // legacy() adds legacy browser support by generating modern + legacy bundles.
    legacy(),
  ]
};
