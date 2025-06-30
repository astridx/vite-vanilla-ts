// Define a custom configuration object for your project.
// This object centralizes server-related settings, making it easy
// to change them in one place without modifying multiple files.
// Used in vite.config.js
const _config = {
  server: {
    host: 'localhost', // The hostname or IP address where your local development server should run.
    port: 3000         // The port number on which your development server will listen for requests.
  }
};

// Export the configuration object as the default export,
// so it can be easily imported and used in other parts of your project.
export default _config;
