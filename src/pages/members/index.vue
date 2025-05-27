<script setup lang="ts">
import { MEMBERS_LIST_LIMIT } from '~/constants';
import type { Member } from '~/utils/microcms';


definePageMeta({
  layout: 'members'
});

const config = useRuntimeConfig();
const apiKey = config.public.apiKey;
const apiDomain = config.public.apiDomain;

const { data, pending, error } = await useFetch<{ contents: Member[] }>(
  `/api/v1/members`,
  {
    baseURL: `https://${apiDomain}.microcms.io`,
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    query: {
      limit: MEMBERS_LIST_LIMIT
    }
    // pick: ['contents'] // contentsプロパティだけ取得する場合
  }
);

if (error.value) {
  console.error('データ取得エラー:', error.value);
}

</script>

<template>
  <p v-if="pending">読み込み中...</p>
  <p v-else-if="error">エラーが発生しました</p>
  <p v-else-if="!data || data.contents.length === 0" class="empty">メンバーが登録されていません。</p>
  <ul v-else>
    <li v-for="member in data.contents" :key="member.id" class="list">
      <NuxtImg
        :src="member.image.url"
        alt=""
        :width="member.image.width"
        :height="member.image.height"
        class="image"
      />
      <dl>
        <dt class="name">{{ member.name }}</dt>
        <dd class="position">{{ member.position }}</dd>
        <dd class="profile">{{ member.profile }}</dd>
      </dl>
    </li>
  </ul>
</template>

<style scoped>
.text {
  text-align: center;
  margin-bottom: 40px;
}

.list {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 80px;
}

.list:nth-child(even) {
  flex-direction: row-reverse;
}

.image {
  width: 240px;
  height: auto;
  border-radius: var(--border-radius);
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
}

.position {
  margin-bottom: 8px;
}

.profile {
  font-size: 0.9rem;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--color-border);
  padding-top: 40px;
  text-align: center;
  gap: 24px;
}

.message {
  font-size: 2rem;
  font-weight: bold;
}

.empty {
  margin-bottom: 40px;
}
</style>