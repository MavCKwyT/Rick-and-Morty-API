import { createReactClient } from '@gqty/react';
import type { QueryFetcher } from 'api/graphql/gqty/index';
import { createClient } from 'api/graphql/gqty/index';

import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';
import { generatedSchema, scalarsEnumsHash } from './schema.generated';
import { tokenRefresher } from './TokenRefresher';
import { parseServerError, ServerErrorCode } from './utils';

const DEFAULT_GRAPHQL_URL = 'https://hasura-sbo-hasura-dev.sbed.site/v1/graphql';
const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions,
) {
  const response = await fetch(
    window.ENV_CONFIG?.GQL_API_URL || DEFAULT_GRAPHQL_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'vendor',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        query,
        variables,
      }),
      ...fetchOptions,
    },
  );

  const json = await response.json();
  if (json.errors) {
    const { code } = Array.isArray(json.errors)
      ? parseServerError(json.errors[0])
      : parseServerError(json.errors);
    if (code === ServerErrorCode.NEED_REFRESH) {
      await tokenRefresher.refreshToken();
      return queryFetcher(query, variables);
    }
  }
  return json;
};

export const client = createClient<
GeneratedSchema,
SchemaObjectTypesNames,
SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

const {
  query, mutation, mutate, subscription, resolved, refetch, track,
} = client;

export {
  query, mutation, mutate, subscription, resolved, refetch, track,
};

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
};

export * from './schema.generated';
