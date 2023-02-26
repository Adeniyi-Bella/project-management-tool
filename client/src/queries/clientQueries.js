import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    # This is the name of the query which is destructured to data
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };