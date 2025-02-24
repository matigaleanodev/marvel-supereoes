import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'marver-superheroes',
  webDir: 'www',
  server: {
    cleartext: true,
  },
  android: {
    allowMixedContent: true,
  },
  plugins: {
    StatusBar: {
      style: 'DEFAULT',
      backgroundColor: '#e30613',
      overlaysWebView: false,
    },
  },
};

export default config;
