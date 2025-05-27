<script setup lang="ts">
import { formatDate } from '~/utils/dayjs';

type Props = {
  date: string;
}
const props = defineProps<Props>();
</script>

<template>
  <span clas="date">
    <NuxtImg src="/clock.svg" alt="" width="16" height="16" loading="eager" />
    {{ formatDate(date) }}
  </span>
</template>

<style scoped>
.date {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0.8rem 0;
  font-size: 1rem;
}
</style>