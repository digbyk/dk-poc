import { GraphQLClient } from "graphql-request";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { host, token } = config.public.gql.clients.hygraph;
  const client = new GraphQLClient(host, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return {
    provide: {
      hygraph: client,
    },
  };
});
