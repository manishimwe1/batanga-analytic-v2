'use server'
import { groq, SanityDocument } from "next-sanity";
import { client } from "../lib/client";
import { sanityFetch } from "../lib/live";

export const getHeroSection = async()=>{
    try {
        const queryOptions = {
            query: groq`*[_type == "post"]|order(_createdAt  desc)[0]{_id, title,subTitle,mainImage,_createdAt }`,
            tags: ["Homepage"],
        };
    
        const data = await sanityFetch(
            queryOptions,
        );
        console.log(data);
        
        return data;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}