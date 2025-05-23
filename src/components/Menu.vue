<script setup lang="ts">
const isOpen = ref(false);
const open = () => isOpen.value = true;
const close = () => isOpen.value = false;
</script>

<template>
  <nav class="nav" :class="{ 'open': isOpen }">
    <ul class="items">
      <li>
        <NuxtLink to="/news">ニュース</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/members">メンバー</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">お問い合わせ</NuxtLink>
      </li>
    </ul>
    <button class="button" :class="{ 'close': isOpen }" @click="close">
      <NuxtImg src="/close.svg" alt="閉じる" width="24" height="24" />
    </button>
  </nav>
  <button class="button" @click="open">
    <NuxtImg src="/menu.svg" alt="メニュー" width="24" height="24" />
  </button>
</template>

<style scoped>
.items {
  display: flex;
  color: #fff;
  gap: 40px;
}

.button {
  display: none;
}

@media (max-width: 640px) {
  .nav {
    display: none;
  }

  .nav.open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-bg-painted);
    color: var(--color-text-unpainted);
    padding: 24px 16px;
  }

  .items {
    flex-direction: column;
    gap: 24px;
  }

  .button {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 24px;
    right: 16px;
  }
}
</style>