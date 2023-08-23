const portfolio = {
    name: 'portfolio',
    tile: 'portfolio',
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
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'url'
        },
        {
            name: 'text',
            title: 'text',
            type: 'array',
            of: [{type: 'block'}], //allows rich text
        },
        {
            name: 'titleProjectPage',
            title: 'title',
            type: 'string',
        },
        {
            name: 'subHeaderProjectPage',
            title: 'sub title',
            type: 'array',
            of: [{type: 'block'}], //allows rich text
        },
        {
            name: 'projectDetails',
            title: 'Project Details',
            type: 'array',
            of: [
                    {
                        name: 'detailImage',
                        title: 'Detail Image',
                        type: 'image',
                        options: {hotspot: true},
                        fields: [
                            {
                                name: 'alt',
                                title: 'Alt',
                                type: 'string'
                            },
                            {
                                name: 'text',
                                title: 'text',
                                type: 'array',
                                of: [{type: 'block'}], //allows rich text
                            },
                        ]
                    },
            ],
        }
    ]
}

export default portfolio;

