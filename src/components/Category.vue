<script setup lang="ts">
import type { Category } from '~/types/microcms';

type Props = {
  category: Category;
}
const props = defineProps<Props>();
</script>

<template>
  <span class="tag">{{ category.name }}</span>
</template>

<style scoped>
.tag {
  background-color: var(--color-bg-sub);
  padding: 4px 12px;
  border-radius: var(--border-radius);
  white-space: nowrap;
  font-size: 1rem;
}
</style>