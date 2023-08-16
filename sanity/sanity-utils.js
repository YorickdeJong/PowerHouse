import { createClient, groq } from "next-sanity";


export async function getProjects() {
    const client = createClient({
        projectId: "guw6sng1", //id from your sanity project
        dataset: "production", 
        apiVersion: '2023-08-15',
    });


    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name, 
            'slug': slug.current,
            "image": image.asset->url,
            url, 
            content
        }`
    )
}