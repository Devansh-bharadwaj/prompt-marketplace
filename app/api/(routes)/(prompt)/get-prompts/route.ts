import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const user: User | null = currentUser();
        const sellerId = user?.id;
        const prompts = await prisma.prompts.findMany({
            where: {
                sellerId,
            },
            include: {
                orders: true,
            }
        })
        return NextResponse.json(prompts)
    } catch (error) {
        console.log("Get products error", error)
        return new NextResponse("Internal error", {status: 500})
    }
}