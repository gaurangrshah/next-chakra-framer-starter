import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
export const Splash = () => {
  return (
    <Box maxW='md' textAlign='center' mx='auto' mt='50%'>
      <Heading
        as='h3'
        fontFamily='body'
        textTransform='uppercase'
        color='white'
        mb={12}
      >
        Coming Soon!
      </Heading>
      <Flex w='full' justify='center' align='center' color='#fad201'>
        <Box as='span' pl='6'>
          <Heading
            as='h1'
            fontSize='7xl'
            letterSpacing='widest'
            lineHeight='10'
            fontFamily="heading"
          >
            Your Site
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};
