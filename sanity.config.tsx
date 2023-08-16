import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'guw6sng1', //id from your sanity project
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-08-15',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
