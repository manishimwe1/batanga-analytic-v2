import {TagIcon,FeedbackIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  icon: FeedbackIcon,
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
      name: 'userName',
      type: 'string',
    }),
    defineField({
      name: 'feedback',
      type: 'text',
    }),
    defineField({
      name: 'numberStar',
      type: 'number',
    }),
    defineField({
      name: 'userImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    
  ],
})
