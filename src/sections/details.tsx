import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1});
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here!</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Daniel" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Ulelu" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="RSVP. Broken Dreams 2023" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Nairobi" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="ken">Kenya</option>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="den">Denmark</option>
              <option value="hun">Hungary</option>
              <option value="pol">Poland</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem>
            <Checkbox colorScheme="gray" defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;