import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {statCardType} from './statCardType'
import {postType} from './postType'
import {aboutType} from './aboutType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, statCardType, postType, aboutType],
}
