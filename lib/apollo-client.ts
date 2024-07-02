import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import dotenv from 'dotenv';

dotenv.config();

const SPACE_ID = process.env.SPACE_ID;
const TOKEN =
  process.env.APP_ENVIRONMENT === 'production'
    ? process.env.DELIVERY_TOKEN
    : process.env.PREVIEW_TOKEN;

const uri = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${TOKEN}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
