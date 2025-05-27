<script setup lang="ts">
import NewsList from '~/components/NewsList.vue';
import type { News } from '~/utils/microcms';

definePageMeta({
  layout: 'news'
});

const config = useRuntimeConfig();
const apiKey = config.public.apiKey;
const apiDomain = config.public.apiDomain;

const { data, pending, error } = await useFetch<{ contents: News[] }>(
  `/api/v1/news`,
  {
    baseURL: `https://${apiDomain}.microcms.io`,
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    // pick: ['contents'] // contentsプロパティだけ取得する場合
  }
);
</script>

<template>
  <NewsList :news="data?.contents || []" />
</template>