const profilepicture = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userRole',
            type: 'string',
            hidden: true, // This hides the field in the studio
        },
        {
            name: 'profilePicture',
            type: 'image',
            title: 'Profile Picture',
            hidden: ({currentUser} : any) => {
              // Hide the profile picture field if the current user's role is 'admin'
              return currentUser.roles.find(({name} : any) => name === 'administrator');
        },
        fields: [
            {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'For accessibility (e.g., screen readers) and SEO. Describe the image content.',
                options: {
                isHighlighted: true // To give this field a bit more prominence in the studio UI
                }
            }
        ]
      },
    ],
};

export default profilepicture;