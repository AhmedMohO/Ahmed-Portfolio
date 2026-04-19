import { type SchemaTypeDefinition } from 'sanity'
import { project } from './schemaTypes/projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project],
} 