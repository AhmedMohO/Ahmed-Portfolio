import { defineType, defineField } from 'sanity';

const MONTHS = [
    { title: 'January', value: 'January' },
    { title: 'February', value: 'February' },
    { title: 'March', value: 'March' },
    { title: 'April', value: 'April' },
    { title: 'May', value: 'May' },
    { title: 'June', value: 'June' },
    { title: 'July', value: 'July' },
    { title: 'August', value: 'August' },
    { title: 'September', value: 'September' },
    { title: 'October', value: 'October' },
    { title: 'November', value: 'November' },
    { title: 'December', value: 'December' },
];

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
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
            name: 'isFeatured',
            title: 'Featured Project',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'month',
            title: 'Month',
            type: 'string',
            options: {
                list: MONTHS,
                layout: 'dropdown',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule) =>
                Rule.required()
                    .min(2000)
                    .max(new Date().getFullYear())
                    .integer(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            month: 'month',
            year: 'year',
        },
        prepare({ title, media, month, year }) {
            return {
                title,
                media,
                subtitle: month && year ? `${month} ${year}` : undefined,
            };
        },
    },
});
