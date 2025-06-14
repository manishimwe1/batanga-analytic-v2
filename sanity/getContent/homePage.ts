'use server'
import { groq, SanityDocument } from "next-sanity";
import { client } from "../lib/client";
import { sanityFetch } from "../lib/live";
import { AboutUs, HeroSectionType, ServicesType, StatCardType } from "@/types";

const options = { next: { revalidate: 5 } }

export const getServicesCard = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "service"]|order(_createdAt  desc){_id, cardTitle,cardDescription,buttonText}`,{},options 

        );
        console.log(data);
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
        console.log(data);
        const Resultdata:AboutUs = data
        return Resultdata;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getStatCard = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "statCard"]|order(_createdAt  desc){_id, title,number,_createdAt }`,{},options

        );
        console.log(data);
        const Resultdata:StatCardType[] = data
        return Resultdata;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}
export const getHeroSection = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "heroSection"]|order(_createdAt  desc)[0]{_id, title,subTitle,mainImage,_createdAt }`,{},
            options
        );
        console.log(data);
        const Resultdata:HeroSectionType = data
        return Resultdata;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}