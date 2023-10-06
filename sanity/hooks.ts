import { groq } from "next-sanity";
import { client } from "./lib/client";


interface ProfilePicture {
    _id: string;
    name: string;
    email: string;
    profilePicture?: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
}

export async function getProfilePicture({ userId, userRole } : any) {
    try {
        // If the userRole is admin, we don't fetch the profile picture
        if (userRole === 'admin') {
            return null;
        }

        return client.fetch(
            groq`*[_type == "user" && _id == "${userId}"]{
                _id,
                profilePicture {
                    asset->url,
                    alt
                }
            }`,
            { cache: 'no-store' }
        );
    } catch (error) {
        console.log(error);
    }
}