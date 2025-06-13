import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const statCardType = defineType({
  name: 'statCard',
  title: 'StatCard',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'number',
      type: 'number',
    }),
    
  ],
})
