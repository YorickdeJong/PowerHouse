const project = {
    name: 'project',
    tile: 'Projects',
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
            name: 'Image',
            title: 'Image',
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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}], //allows rich text
        }
    ]
}

export default project;