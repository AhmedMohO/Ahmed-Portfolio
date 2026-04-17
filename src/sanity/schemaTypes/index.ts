import { type SchemaTypeDefinition } from 'sanity'
import { project } from './projectType'
import { slide } from './slidesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, slide],
}