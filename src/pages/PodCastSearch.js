import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import SearchToolBar from '../components/SearchToolBar';
import PodcastCard from '../components/PodcastCard';

const PodCastSearch = () => {
  return (
    <>
      <SearchToolBar />
      <SimpleGrid columns={[1, 2, 2, 3]} spacingX="50px" spacingY="50px" p={5}>
        {Array.from({ length: 6 }, (_, index) => index).map(item => {
          return <PodcastCard />;
        })}
      </SimpleGrid>
    </>
  );
};

export default PodCastSearch;
