import React from "react";
import PromptDetailsPage from "./_page";
import { getUser } from "@/actions/user/getUser";

type Props = {};

const Page = async (props: Props) => {
  const data = await getUser();
  return (
    <>
      <PromptDetailsPage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </>
  );
};

export default Page;
