<script setup lang="ts">
import { NEWS_LIST_LIMIT } from '~/constants';

type Props = {
  totalCount: number;
  current?: number;
}

const props = withDefaults(defineProps<Props>(), {
  current: 1
});

const pages = Array.from(
  { length: Math.ceil(props.totalCount / NEWS_LIST_LIMIT) },
  (_, i) => i + 1
);
</script>

<template>
  <nav>
    <ul class="container">
      <li class="list" v-for="p in pages" :key="p">
        <NuxtLink v-if="props.current !== p" :to="`/news/p/${p}`" class="item">
          {{ p }}
        </NuxtLink>
        <span v-else class="item current">
          {{ p }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 24px;
}

.list {
  margin: 0 4px;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius);
}

.current {
  color: var(--color-text-unpainted);
  background-color: var(--color-button-primary);
}
</style>