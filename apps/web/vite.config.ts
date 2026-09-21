import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const prohibitedEnvironmentNames = Object.keys(process.env).filter((name) => {
  const value = process.env[name];
  return Boolean(value) && (
    /^(?:TYPESAFE|JEV).*(?:API_)?(?:KEY|TOKEN|SECRET|CREDENTIAL)/i.test(name) ||
    /^VITE_.*(?:KEY|TOKEN|SECRET|PASSWORD|CREDENTIAL)/i.test(name)
  );
});

if (prohibitedEnvironmentNames.length) {
  throw new Error(`Refusing a browser build with credential-like environment variable names: ${prohibitedEnvironmentNames.join(', ')}`);
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/scam-signal-lens/' : '/',
  plugins: [react()],
  build: { sourcemap: false, target: 'es2022' }
});
