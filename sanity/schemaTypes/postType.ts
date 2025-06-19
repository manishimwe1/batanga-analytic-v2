import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'heroSection',
  title: 'HeroSection',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
    }),
    defineField({
      name: 'mainVideo',
      type: 'file',
      title: 'Main Video',
      options: {
        accept: 'video/*',
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ]
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainVideo',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
