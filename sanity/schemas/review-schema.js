const reviews = {
    name: 'reviews',
    tile: 'reviews',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
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
            name: 'stars',
            title: 'stars',
            type: 'number',
        },
        {
            name: 'reviewText',
            title: 'reviewText',
            type: 'array',
            of: [{type: 'block'}], //allows rich text
        }
    ]
}

export default reviews;