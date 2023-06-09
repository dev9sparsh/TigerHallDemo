import { Grid, GridItem, Heading, Text, Center } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={3} colSpan={3}>
        <Center h="100%">
          <Heading size="2xl" mb={4}  ml={2}>404</Heading>
          <Text fontSize="xl">Result Not Found</Text>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default NotFoundPage;
