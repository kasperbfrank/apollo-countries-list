const { gql } = require('@apollo/client');

export const COUNTRY_QUERY = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
      emoji
      emojiU
    }
  }
`;
