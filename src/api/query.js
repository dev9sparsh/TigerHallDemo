import { gql } from '@apollo/client';

export const GET_PODCASTS = gql`
  query ($limit: Int!, $searchKeyword: String) {
    contentCards(filter: { types: [PODCAST], limit: $limit, keywords: $searchKeyword }) {
      edges {
        ...PodcastFields
      }
      meta {
        ...MetaDataFields
      }
    }
  }

  fragment PodcastFields on Podcast {
    name
    image {
      uri
    }
    categories {
      name
    }
    experts {
      firstName
      lastName
      title
      company
    }
  }

  fragment MetaDataFields on PageInfo {
    total
    recommendationId
    offset
    limit
  }
`;
