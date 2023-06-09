import { SimpleGrid, Card, Box, Skeleton } from '@chakra-ui/react';

const LoadingAnimation = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 2, 3]} spacingX="50px" spacingY="50px" p={5} w="full">
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={index} maxW="sm" bg="white">
            <Skeleton height="200px" />
            <Box p={4}>
              <Skeleton
                startColor="KindaYellow.300"
                endColor="red"
                animation="pulse"
                speed={2}
                height="20px"
                width="100px"
              />
              <Skeleton
                startColor="KindaYellow.500"
                endColor="red"
                animation="pulse"
                speed={2}
                height="20px"
                width="100px"
              />
              <Skeleton
                startColor="KindaYellow.700"
                endColor="red"
                animation="pulse"
                speed={2}
                height="20px"
                width="100px"
              />
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default LoadingAnimation;
