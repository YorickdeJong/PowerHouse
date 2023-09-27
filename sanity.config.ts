/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/admin/[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemas/schema'

const config = defineConfig({
  projectId,
  dataset,
  apiVersion,
  title: 'Sanity Studio',
  basePath: '/admin',
  plugins: [deskTool()],
  schema
});
export default  config;
