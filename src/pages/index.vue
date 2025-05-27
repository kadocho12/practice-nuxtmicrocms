<script setup lang="ts">
import { NEWS_LIST_LIMIT } from "~/constants";
import type { News } from "~/utils/microcms";

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
    query: {
      limit: NEWS_LIST_LIMIT
    }
    // pick: ['contents'] // contentsプロパティだけ取得する場合
  }
);
</script>

<template>
  <section class="top">
    <div>
      <h1 class="title">テクノロジーの力で世界を変える</h1>
      <p class="description">私たちは市場をリードしているグローバルテックカンパニーです。</p>
    </div>
    <NuxtImg
      class="bgimg"
      src="/img-mv.jpg"
      alt=""
      width="4000"
      height="1200"
    />
  </section>
  <section class="news">
    <h2 class="newsTitle">News</h2>
    <NewsList :news="data?.contents || []" />
    <div class="newsLink">
      <ButtonLink href="/news">もっと見る</ButtonLink>
    </div>
  </section>
</template>

<style scoped>
.top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  overflow: hidden;
  padding: 200px 0;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.description {
  text-align: center;
}

.bgimg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.news {
  position: relative;
  background-color: #fff;
  width: 840px;
  margin: -40px auto 0;
  padding: 23px 40px;
  border-radius: var(--border-radius);
}

.newsTitle {
  font-size: 1.5rem;
}

.newsLink {
  position: absolute;
  right: -40px;
  bottom: -40px;
}



@media (max-width: 1000px) {
  .news {
    width: calc(100% - 160px);
  }
}

@media (max-width: 640px) {
  .top {
    padding: 120px 16px;
  }
  .title {
    font-size: 2rem;
    text-align: left;
  }

  .description {
    text-align: center;
    font-size: 0.9rem;
    text-align: left;
  }

  .bgimg {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 600px;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }

  .news {
    width: calc(100% - 32px);
    padding: 16px 24px;
  }

  .newsLink {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 16px;
  }
}
</style>