const reviews = {
    name: 'reviews',
    tile: 'reviews',
    type: 'document',
    fields: [
        {
            name: 'label',
            title: 'label',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',   
            options: {
                source: 'name',
            }
        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]

        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'text',
            title: 'text',
            type: 'array',
            of: [{type: 'block'}], //allows rich text
        }
    ]
}

export default reviews;