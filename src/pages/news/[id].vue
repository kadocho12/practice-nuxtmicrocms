<script setup lang="ts">
import Article from '~/components/Article.vue';
import ButtonLink from '~/components/ButtonLink.vue';
import type { News } from '~/utils/microcms';

definePageMeta({
  layout: 'news'
});

const route = useRoute();
const id = route.params.id as string;

const config = useRuntimeConfig();
const apiKey = config.public.apiKey;
const apiDomain = config.public.apiDomain;

const { data, pending, error } = await useFetch<News>(
  `/api/v1/news/${id}`,
  {
    baseURL: `https://${apiDomain}.microcms.io`,
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
  }
);

// エラーが発生した場合（存在しないIDなど）はNotFoundページを表示
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News not found'
  });
}
</script>

<template>
  <Article v-if="data" :data="data" />
  <div class="button">
    <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
  </div>
</template>