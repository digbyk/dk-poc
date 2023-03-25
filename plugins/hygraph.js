import { GraphQLClient } from "graphql-request";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  // const { host, token } = config.public.clients.gql.hygraph;
  console.log(config.public);
  // console.table(host, token);
  const client = new GraphQLClient("host", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(client);
  return {
    provide: {
      hygraph: client,
    },
  };
});
