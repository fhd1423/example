import { useEffect, useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Home = () => {
  const { primaryWallet } = useDynamicContext();

  return <div> {primaryWallet?.address || "hey"} </div>;
};

export default Home;
