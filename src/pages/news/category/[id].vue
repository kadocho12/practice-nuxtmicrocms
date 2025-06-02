<script setup lang="ts">
import NewsList from '~/components/NewsList.vue';
import { NEWS_LIST_LIMIT } from '~/constants';
import type { News } from '~/utils/microcms';

definePageMeta({
  layout: 'news'
});

const route = useRoute();
const id = route.params.id as string;

const config = useRuntimeConfig();
const apiKey = config.public.apiKey;
const apiDomain = config.public.apiDomain;

const { data, pending, error } = await useFetch<{ contents: News[] }>(
  `/api/v1/news?filters=category[equals]${id}`,
  {
    baseURL: `https://${apiDomain}.microcms.io`,
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    // pick: ['contents'] // contentsプロパティだけ取得する場合
    query: {
      limit: NEWS_LIST_LIMIT,
    },
  }
);
</script>

<template>
  <NewsList :news="data?.contents || []" />
</template>