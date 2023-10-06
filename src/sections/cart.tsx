import {
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  AspectRatio,
  Stack
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <img src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>
        <Stack align='end' direction='row'>Penny board 
          <Button variant="ghost">PNYCOMP27541</Button>
        </Stack>
      </HStack>
    </VStack>
  );
};

export default Cart;
