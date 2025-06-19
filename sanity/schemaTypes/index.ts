import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockType'
import {statCardType} from './statCardType'
import {postType} from './postType'
import {aboutType} from './aboutType'
import { servicesType } from './servicesCardType'
import { feedbackType } from './feedbackType'
import { featureType } from './featureType'
import { contactFormType } from './formSubmit'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType,feedbackType, statCardType, postType, aboutType,featureType,contactFormType],
}
