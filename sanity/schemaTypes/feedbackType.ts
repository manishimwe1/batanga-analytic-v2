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
