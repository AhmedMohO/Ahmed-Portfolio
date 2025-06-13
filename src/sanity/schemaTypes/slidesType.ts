import { defineType, defineField } from 'sanity';

export const slide = defineType({
    name: 'slide',
    title: 'Slide',
    type: 'document',
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'path',
                            title: 'Link',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'date',
                            title: 'Date',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1).max(4),
        }),
    ],
    preview: {
        select: {
            title: 'images.0.title',
            media: 'images.0.image',
        },
    },
}); 