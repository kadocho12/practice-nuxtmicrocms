<template>
  <header class="header">
    <NuxtLink href="/" class="logoLink">
      <NuxtImg
        src="/logo.svg"
        alt="SIMPLE"
        class="logo"
        width="348"
        height="133"
        priority
      />
    </NuxtLink>
    <Menu />
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  padding: 16px 24px 8px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logoLink {
  display: flex;
}

.logo {
  height: 24px;
  width: auto;
}

@media (max-width: 640px) {
  .header {
    padding: 24px 16px 8px;
  }
}
</style>