<script setup lang="ts">
type Props = {
  title: string;
  sub: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <p class="sub">{{ sub }}</p>
    </div>
    <NuxtImg
      class="bgimg"
      src="/img-mv.jpg"
      alt=""
      width="4000"
      height="1200"
    />
  </section>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  overflow: hidden;
  padding: 100px 0;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.sub {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  justify-content: center;
}

.sub::before {
  content: "";
  display: block;
  height: 1px;
  width: 20px;
  background-color: var(--color-text-unpainted);
}

.sub::after {
  content: "";
  display: block;
  height: 1px;
  width: 20px;
  background-color: var(--color-text-unpainted);
}

.bgimg {
  position: absolute;
  top: 0;
  right: 0;
  height: 600px;
  width: 100%;
  object-fit: cover;
  object-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}
</style>