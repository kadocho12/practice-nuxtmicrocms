<script setup lang="ts">
import { getMembersList } from '../../utils/microcms';
definePageMeta({
  layout: 'members'
});
const data = await getMembersList();
</script>

<template>
  <p v-if="data.contents.length === 0" class="empty">メンバーが登録されていません。</p>
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