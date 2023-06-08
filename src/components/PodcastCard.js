import React from 'react';
import {
  Card,
  CardFooter,
  Image,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';

const PodcastCard = () => {
  return (
    <Card as={'main'} maxW="sm" bg="white">
      <Box
        position={'relative'}
        bg="TigerOrange.200"
        borderTopLeftRadius={'xl'}
      >
        <Image
          src={
            'https://media.istockphoto.com/id/1342186559/photo/a-business-man-using-a-computer-to-manage-documents-online-document-communication-database.jpg?s=1024x1024&w=is&k=20&c=M2QhOdBdnPNZtUhAF054T0GmZ4KNHqf-Fj33XJ6lIik='
          }
          alt="Your Image"
          width={'full'}
        />
      </Box>

      <Box as="article" p={4}>
        <Heading as="h1" fontSize="md" color="black">
          {
            'loreum epsum lorem epsum lorem epsum loreum epsum lorem epsum lorem epsum'
          }
        </Heading>

        <Heading as="h1" fontSize="md" color="black">
          {'loreum epsum lorem epsum '}
        </Heading>

        <Heading as="h2" fontSize="md" color="black" fontWeight="normal">
          {'loreum epsum lorem epsum '}
        </Heading>

        <Heading as="h2" fontSize="xl" color="grey.700">
          {'loreum epsum lorem epsum '}
        </Heading>

        <Heading
          as="h2"
          color="grey.700"
          fontWeight={'normal'}
          fontFamily="Montreal"
          fontSize="md"
        >
          {`loreum epsum lorem epsum`}
        </Heading>

        <CardFooter color="Mian.tiger600" justifyContent="end" gap={1} p={2}>
          <Button size={'md'}> Text1</Button>

          <Button size={'md'}> Text2</Button>
        </CardFooter>
      </Box>
    </Card>
  );
};

export default PodcastCard;
