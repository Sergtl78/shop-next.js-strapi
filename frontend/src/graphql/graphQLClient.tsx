import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export const graphqlClient = new GraphQLClient(
  (process.env.NEXT_PUBLIC_STRAPI_GQL_URL as string) ?? "",
  {
    headers: {
      "Content-Type": "application/json",
      //Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? '',
    },
  },
);

export const gql = getSdk(graphqlClient);
export * from "./generated";
