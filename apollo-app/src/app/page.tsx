"use client"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { DisplayFilms } from "./components/DisplayFilms/DisplayFilms";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
})

// const client = () => {
//   const httpLink = new HttpLink({
//     uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
//     fetchOptions: { cache: "no store" }
//   })
// }

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <DisplayFilms />
    </ApolloProvider>
  );
}
