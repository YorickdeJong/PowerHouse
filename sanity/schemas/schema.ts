import { type SchemaTypeDefinition } from 'sanity'
import review from './review-schema'
import profilepicture from './profilepicture-schema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, profilepicture],
}
