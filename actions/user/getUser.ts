"use server";
import { User, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prismaDb";

// Recursive function to convert an object and its nested objects to plain JavaScript objects
const convertToPlainObject = (obj: any) => {
  if (!obj) {
    return obj;
  }

  const plainObj = { ...obj };
  for (const key in plainObj) {
    if (Object.prototype.hasOwnProperty.call(plainObj, key) && typeof plainObj[key] === "object") {
      plainObj[key] = convertToPlainObject(plainObj[key]);
    }
  }

  return plainObj;
};

export async function getUser(){
    try {
        const user: User | null = await currentUser();

        if (!user) {
            throw new Error("User not found");
        }

        let shop = await prisma.shops.findUnique({
            where: {
              userId: user.id,
            },
        });

        // Convert user and shop to plain objects
        const plainUser = convertToPlainObject(user);
        const plainShop = convertToPlainObject(shop);

        // console.log("Plain User:", plainUser);
        // console.log("Plain Shop:", plainShop);

        return { user: plainUser, shop: plainShop };
    } catch (error) {
        console.error("Load user error", error);
        throw error; // Re-throw the error for better debugging
    }
}
