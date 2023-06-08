/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useLazyQuery } from '@apollo/client';

import SearchToolBar from '../components/SearchToolBar';
import PodcastCard from '../components/PodcastCard';
import { GET_PODCASTS } from '../api/query';

const PodCastSearch = () => {
  const [getPodcasts] = useLazyQuery(GET_PODCASTS, {
    onCompleted: data => {
      console.log(data);
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getPodcasts({
      variables: { limit: 5, searchKeyword: '' },
    });
  }, []);

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
