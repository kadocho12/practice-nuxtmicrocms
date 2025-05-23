<script setup lang="ts">
import type { News } from "~/utils/microcms";
import Category from "./Category.vue";
import Date from "./Date.vue";

type Props = {
  news: News[];
};

const props = defineProps<Props>();
</script>

<template>
  <p v-if="news.length === 0">記事がありません。</p>
  <ul v-else>
    <li v-for="article in props.news" :key="article.id" class="list">
      <NuxtLink :to="`/news/${article.id}`" class="link">
        <NuxtImg
          class="image"
          src="/no-image.png"
          alt="No Image"
          width={1200}
          height={630}
        />
        <dl class="content">
          <dt class="title">{{ article.title }}</dt>
          <dd class="meta">
            <Category :category="article.category" />
            <Date :date="article.publishedAt ?? article.createdAt" />
          </dd>
        </dl>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.list {
  border-bottom: 1px solid var(--color-border-light);
}
.list:last-child {
  border-bottom: none;
}

.link {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 24px 0;
}

.image {
  width: 200px;
  height: auto;
  border-radius: var(--border-radius);
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

@media (max-width: 640px) {
  .link {
    display: block;
    padding: 16px 0;
  }
  .image {
    display: none;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>