<template>
  <div class="container">
    <dl>
      <dt class="title">ページが見つかりませんでした。</dt>
      <dd class="text">
        あなたがアクセスしようとしたページは存在しません。
        <br />
        URLを再度ご確認ください。
      </dd>
    </dl>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  font-family: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  margin-bottom: 24px;
}

.text {
  font-size: 1rem;
  text-align: center;
}

.container {
  position: relative;
  background-color: #fff;
  width: 840px;
  margin: -40px auto 0;
  padding: 160px 80px;
  border-radius: var(--border-radius);
}
</style>