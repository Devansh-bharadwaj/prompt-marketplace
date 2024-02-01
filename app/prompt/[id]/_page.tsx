"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

type Props = {};

const PromptDetailsPage = ({
  user,
  isSellerExist,
}: {
  user: User | undefined;
  isSellerExist: boolean | undefined;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="ShopBanner" />
      </div>
      <div>
        <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
          {/* <PromptDetails
                promptData={prompt}
                // stripePromise={stripePromise}
                // clientSecret={clientSecret}
              /> */}
          <Divider className="bg-[#ffffff14] mt-5" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PromptDetailsPage;
