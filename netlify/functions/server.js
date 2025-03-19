import { createServerRenderer } from '@netlify/angular-runtime';
import { join } from 'path';

// Import the server bundle
import { AppServerModule } from '../../dist/miami-2000/server/main';

// Path to the browser build
const browserBuildPath = join(__dirname, '../../dist/miami-2000/browser');

// Create the server renderer
const handle = createServerRenderer({
  serverBundlePath: join(__dirname, '../../dist/miami-2000/server/main.js'),
  AppServerModule,
  browserBuildPath,
});

export const handler = handle;