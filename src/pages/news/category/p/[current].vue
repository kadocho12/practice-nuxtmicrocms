<script setup lang="ts">
import { NEWS_LIST_LIMIT } from '~/constants';
import type { News } from '~/utils/microcms';

definePageMeta({
  layout: 'news'
});

const route = useRoute();
const params = route.params;
const current = parseInt(params.current as string, 10);

if (Number.isNaN(current) || current < 1) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News not found'
  });
}

const config = useRuntimeConfig();
const apiKey = config.public.apiKey;
const apiDomain = config.public.apiDomain;

const { data, pending, error } = await useFetch<{ contents: News[], totalCount: number }>(
  `/api/v1/news`,
  {
    baseURL: `https://${apiDomain}.microcms.io`,
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    // pick: ['contents'] // contentsプロパティだけ取得する場合
    query: {
      limit: NEWS_LIST_LIMIT,
      offset: (current - 1) * NEWS_LIST_LIMIT,
    },
  }
);

if (data.value?.contents.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News not found'
  });
}
</script>

<template>
  <NewsList :news="data?.contents || []" />
  <Pagination :total-count="data?.totalCount || 0" :current="current" />
</template>