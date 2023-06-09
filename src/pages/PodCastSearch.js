import React, { useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { useLazyQuery } from '@apollo/client';

import SearchToolBar from '../components/SearchToolBar';
import PodcastCard from '../components/PodcastCard';
import { GET_PODCASTS } from '../api/query';

import LoadingAnimation from '../components/LoadingAnimation';
import NotFound from '../components/NotFound';

const PodCastSearch = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resultNotFound, setResultNotFound] = useState(false);

  const [getPodcasts] = useLazyQuery(GET_PODCASTS, {
    onCompleted: (data) => {
      setIsLoading(false);
      setPodcasts(data?.contentCards?.edges);
      if (data?.contentCards?.edges?.length === 0) {
        setResultNotFound(true);
      } else {
        setResultNotFound(false);
      }
    },
    fetchPolicy: 'no-cache'
  });

  return (
    <>
      <SearchToolBar ApiHook={getPodcasts} LoaderHook={setIsLoading} />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {resultNotFound ? (
            <NotFound />
          ) : (
            <SimpleGrid columns={[1, 2, 2, 3]} spacingX="50px" spacingY="50px" p={5}>
              {podcasts &&
                Array.isArray(podcasts) &&
                podcasts.length !== 0 &&
                podcasts.map((item) => {
                  const mockifiedItem = {
                    ...item,
                    // here hardcoding some texts for display Purpose.
                    text: `${
                      item.experts?.length > 0
                        ? `Peak Performance: Going From Good to Great with ${
                            item?.experts[0].firstName || 'Simon'
                          } ${item?.experts[0].lastName || 'Taudel'}`
                        : `Peak Performance: Going From Good to Great with Simon Taudel.`
                    }`,
                    text2: `${
                      item.experts?.length > 0
                        ? `${item?.experts[0]?.company || 'Subway'} ${
                            item?.experts[0]?.title || 'APAC'
                          }`
                        : `Subway APAC.`
                    }`,
                    text23: `${
                      item.experts?.length > 0
                        ? `${item?.experts[0].firstName} ${item?.experts[0].lastName}`
                        : `Jane Doe.`
                    }`,
                    title: `communicating as a leader`
                  };
                  return <PodcastCard edgeTileInfo={mockifiedItem} key={item?.name} />;
                })}
            </SimpleGrid>
          )}
        </>
      )}
    </>
  );
};

export default PodCastSearch;
