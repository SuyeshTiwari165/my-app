import { gql } from '@apollo/client';

export const GET_GOVINFO_DATA = gql`
  query GetGOVInfo {
    govInfos {
      id
      Country
      Possession
      Sale
      Transport
      Cultivation
      Notes
    }
  }
`;