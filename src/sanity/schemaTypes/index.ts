import { type SchemaTypeDefinition } from 'sanity'
import { project } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}