import React, { useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { useLazyQuery } from '@apollo/client';

import SearchToolBar from '../components/SearchToolBar';
import PodcastCard from '../components/PodcastCard';
import { GET_PODCASTS } from '../api/query';

const PodCastSearch = () => {
  const [podcasts, setPodcasts] = useState([]);

  const [getPodcasts] = useLazyQuery(GET_PODCASTS, {
    onCompleted: data => {
      setPodcasts(data?.contentCards?.edges);
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <>
      <SearchToolBar ApiHook={getPodcasts} />
      <SimpleGrid columns={[1, 2, 2, 3]} spacingX="50px" spacingY="50px" p={5}>
        {podcasts &&
          Array.isArray(podcasts) &&
          podcasts.length !== 0 &&
          podcasts.map(item => {
            const mockifiedItem = {
              ...item,
              // here hardcoding some texts for display Purpose.
              text: `${
                item.experts?.length > 0
                  ? `Peak Performance: Going From Good to Great with ${item?.experts[0].firstName} ${item?.experts[0].lastName}`
                  : `Peak Performance: Going From Good to Great.`
              }`,
              text2: `${
                item.experts?.length > 0
                  ? `${item?.experts[0]?.company || 'Subway'} ${
                      item?.experts[0]?.title || 'APAC'
                    }`
                  : `Peak Performance Going From Good to Great.`
              }`,
              text23: `${
                item.experts?.length > 0
                  ? `${item?.experts[0].firstName} ${item?.experts[0].lastName}`
                  : `Peak Performance Going From Good to Great.`
              }`,
              title: `communicating as a leader`,
            };
            return (
              <PodcastCard edgeTileInfo={mockifiedItem} key={item?.name} />
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default PodCastSearch;
