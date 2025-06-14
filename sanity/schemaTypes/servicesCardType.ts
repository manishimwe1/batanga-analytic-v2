import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const servicesType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: TagIcon,
  fields: [
    // defineField({
    //   name: 'title',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'subTitle',
    //   type: 'string',
    // }),
    defineField({
      name: 'cardTitle',
      type: 'string',
    }),
    defineField({
      name: 'cardDescription',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
    
  ],
})
