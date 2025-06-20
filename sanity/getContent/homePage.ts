'use server'
import { groq, SanityDocument } from "next-sanity";
import { client } from "../lib/client";
import { sanityFetch } from "../lib/live";
import { AboutUs, FeatureType, FeedbackType, HeroSectionType, ServicesType, StatCardType } from "@/types";

const options = { next: { revalidate: 5 } }

export const getFeature = async()=>{
    try {
       
        const data = await client.fetch(
            groq`*[_type == "feature"]|order(_createdAt  desc){_id, title,description,image,_createdAt }`,{},options 

        );
        console.log(data);
        
        return data as FeatureType[];
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}

export const getFeedback = async()=>{
    try {



        const data = await client.fetch(
            groq`*[_type == "feedback"]|order(_createdAt  desc){_id,userName,feedback,numberStar,userImage}`,{},options 

        );
        return data as FeedbackType[];
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getServicesCard = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "service"]|order(_createdAt  desc){_id, cardTitle,cardDescription,buttonText}`,{},options 

        );
        return data as ServicesType[];
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getAboutUs = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "aboutUs"]|order(_createdAt  desc)[0]{_id, title,subTitle,addititionalContent,image,_createdAt }`,{},options 

        );
        
        return data as AboutUs;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getStatCard = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "statCard"]|order(_createdAt  desc){_id, title,number,_createdAt }`,{},options

        );
        const Resultdata:StatCardType[] = data
        return Resultdata;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getHeroSection = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "heroSection"]|order(_createdAt  desc)[0]{_id, title,subTitle,"videoUrl": mainVideo.asset->url,_createdAt }`,{},
            options
        );
        
        return data as HeroSectionType;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}

export const getBlogPost = async () => {
    try {
        const data = await client.fetch(
            groq`*[_type == "blogPost"]|order(date desc){
                _id,
                title,
                description,
                image,
                date,
                author,
                slug,
                content
            }`,
            {},
            options
        );
        return data;
    } catch (error) {
        console.log(error, 'ERROR IN GETTING BLOG POSTS');
    }
}