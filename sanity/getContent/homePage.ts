'use server'
import { groq, SanityDocument } from "next-sanity";
import { client } from "../lib/client";
import { sanityFetch } from "../lib/live";
import { AboutUs, HeroSectionType, StatCardType } from "@/types";

export const getAboutUs = async()=>{
    try {
        
        const data = await client.fetch(
            groq`*[_type == "aboutUs"]|order(_createdAt  desc)[0]{_id, title,subTitle,addititionalContent,image,_createdAt }`, 

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
            groq`*[_type == "statCard"]|order(_createdAt  desc){_id, title,number,_createdAt }`,

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
        const queryOptions = {
            query: groq`*[_type == "heroSection"]|order(_createdAt  desc)[0]{_id, title,subTitle,mainImage,_createdAt }`,
            tags: ["Homepage"],
        };
    
        const data = await client.fetch(
            groq`*[_type == "heroSection"]|order(_createdAt  desc)[0]{_id, title,subTitle,mainImage,_createdAt }`,
        );
        console.log(data);
        const Resultdata:HeroSectionType = data
        return Resultdata;
        
    } catch (error) {
        console.log(error,'ERROR IN GETTING HERO SECTION');
        
    }
}