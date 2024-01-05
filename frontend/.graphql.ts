import { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "http://localhost:1337/graphql",
  documents: ["./src/graphql/documents/**/*.gql", "!src/graphql/generated.ts"],
  extensions: {
    codegen: {
      debug: true,
      verbose: true,
      ignoreNoDocuments: true,
      overwrite: true,
      hooks: {
        afterAllFileWrite: ["prettier --write"],
      },
      generates: {
        "./src/graphql/generated.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-graphql-request",
          ],
          config: {
            documentMode: "string",
            addDocBlocks: false,
            dedupeFragments: true,
            pureMagicComment: true,
            disableDescriptions: true,
            fetcher: "graphql-request",
            legacyMode: true,
            exposeFetcher: true,
            exposeDocument: true,
            exposeQueryKeys: true,
            exposeMutationKeys: true,
            addInfiniteQuery: true,
            errorType: "any",
          },
        },
      },
    },
  },
};

export default config;
