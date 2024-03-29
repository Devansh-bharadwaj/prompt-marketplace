"use server";
import prisma from "@/lib/prismaDb";

export async function getAllPrompts(pageNumber = 1, pageSize=8){
    try {
        const prompts = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true
            },
            where: {
                status: "Live"
            },
            take: pageNumber,
            skip: (pageNumber - 1) * pageSize
        })
        return prompts
    } catch (error) {
        console.log("Get all prompts error", error)
    }
}