import React from 'react';
import {
  Card,
  CardFooter,
  Image,
  Box,
  Button,
  SimpleGrid,
  Heading,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/react';

import { FiShare2 } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { FaHeadphones, FaClock } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';
import PropTypes from 'prop-types';

const PodcastCard = ({ edgeTileInfo }) => {
  return (
    <Card as={'main'} maxW="sm" bg="white">
      <Box position={'relative'} bg="TigerOrange.200" borderTopLeftRadius={'xl'}>
        <Box position="relative" top="0" bottom="0" left="0" w="full">
          <Flex
            alignItems="center"
            gap="10px"
            bg="white"
            flexWrap="wrap"
            w="50%"
            p={[2, 4]}
            justifyContent={['center', 'flex-start']}
            borderTopLeftRadius={['md', 'xl']}>
            <FaClock fill="#ff5900" />
            <Heading as="h3" fontSize={['sm', 'md']} fontFamily="PPNeueMontreal" color="grey.600">
              30% Completed
            </Heading>
          </Flex>
        </Box>
        <Image
          src={edgeTileInfo?.image?.uri?.replace('.io/', '.io/resize/500x/')}
          alt="Your Image"
          width={'full'}
        />

        <Box position="relative" bottom="0" left="0" p={2} w="full">
          <Flex>
            <Box p="1">
              <Button
                style={{ borderRadius: '20px', gap: '5px' }}
                bg="Main.600"
                _hover={{ bg: 'Secondary.Black' }}>
                {' '}
                <FaHeadphones fill="white" boxshadow="md" />
              </Button>
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Box p="1">
              <Button
                style={{ borderRadius: '20px', gap: '5px' }}
                bg="Secondary.Black"
                _hover={{ bg: 'Main.600' }}>
                {' '}
                <BsStopwatch fill="white" />
                <Text color={'Secondary.White'} fontFamily="PPNeueMontreal" fontSize={['sm', 'md']}>
                  20m
                </Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box as="article" p={4}>
        <Heading
          as="h1"
          fontSize="md"
          fontFamily="PPNeueMontreal"
          fontWeight="400"
          color="grey.600">
          {edgeTileInfo.title?.toUpperCase()}
        </Heading>

        <Heading
          as="h1"
          fontFamily="PPNeueMontreal"
          fontWeight="700"
          fontSize="2xl"
          color="Secondary.Black">
          {edgeTileInfo.text}
        </Heading>

        <Heading
          as="h2"
          fontFamily="PPNeueMontreal"
          fontSize="md"
          color="grey.700"
          fontWeight="400">
          {edgeTileInfo.name.includes('audio')
            ? edgeTileInfo.name?.replace('audio ', '')
            : edgeTileInfo.name}
        </Heading>

        <Heading
          as="h2"
          fontFamily="PPNeueMontreal"
          fontWeight="700"
          fontSize="lg"
          color="grey.700">
          {edgeTileInfo.text2}
        </Heading>

        <Heading
          as="h2"
          color="grey.700"
          fontWeight={'400'}
          fontFamily="PPNeueMontreal"
          fontSize="md">
          {`${edgeTileInfo?.text23}`}
        </Heading>
        <SimpleGrid columns={[1, 2, 2, 3]} spacingX="5px" spacingY="5px" p={1}>
          {edgeTileInfo?.categories.map((item) => (
            <Heading
              key={item?.name}
              as="h4"
              fontFamily="PPNeueMontreal"
              fontWeight={'400'}
              fontSize="md"
              color="grey.700">
              {item.name.includes('category') ? item.name?.replace('category ', '') : item.name}
            </Heading>
          ))}
        </SimpleGrid>
        <CardFooter justifyContent="end" gap={1} p={2}>
          <Button size={'md'} _hover={{ bg: 'TigerOrange.200' }}>
            {' '}
            <FiShare2 color="#ff5900" />
          </Button>

          <Button size={'md'} _hover={{ bg: 'TigerOrange.200' }}>
            {' '}
            <BsBookmark color="#ff5900" />
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
};

export default PodcastCard;

PodcastCard.propTypes = {
  edgeTileInfo: PropTypes.shape({
    image: PropTypes.shape({
      uri: PropTypes.string
    }),
    title: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    text2: PropTypes.string,
    text23: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    )
  })
};
