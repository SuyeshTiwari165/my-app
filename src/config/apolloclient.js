import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    split,
  } from "@apollo/client";
  // import { ApolloLink } from "apollo-link";
  // import { onError } from "@apollo/link-error";
  import { RA_URI } from ".";
  import { setContext } from "@apollo/link-context";
  
  // const subscribe = require("@jumpn/utils-graphql");
  console.log("RA_URI",RA_URI)
  const ragqlClient = (auth_token) => {
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: auth_token ? "Bearer" + " " + auth_token : null,
        },
      };
    });
  
    // const errorLink = onError(({ graphQLErrors, networkError }) => {
    //   if (graphQLErrors)
    //     graphQLErrors.map(({ message, locations, path }) =>
    //       console.log(
    //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //       )
    //     );
  
    //   if (networkError) console.log(`[Network error]: ${networkError}`);
    // });
    let httpLink;
    let link;
    httpLink = createHttpLink({ uri: 'http://localhost:1337/graphql' });
    link = auth_token ? authLink.concat(httpLink) : httpLink;
  
    return new ApolloClient({
      link: link,
      cache: new InMemoryCache(),
    });
  };
  export default ragqlClient;
  