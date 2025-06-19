import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const featureType = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
