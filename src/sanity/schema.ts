import { type SchemaTypeDefinition } from 'sanity'
import { project } from './schemaTypes/projectType'
import { slide } from './schemaTypes/slidesType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [slide, project],
} 