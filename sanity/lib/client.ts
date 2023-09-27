import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {schema} from '../schemas/schema'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn,
})
