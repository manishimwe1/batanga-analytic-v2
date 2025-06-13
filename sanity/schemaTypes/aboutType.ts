import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'aboutUs',
  title: 'AboutUs',
  type: 'document',
  icon: UserIcon,
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
      name: 'addititionalContent',
      type: 'string',
    }),
    
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'bio',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
