import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Splash } from "@/components/splash";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex m='auto auto'>
        <Splash />
      </Flex>
    </>
  );
}
