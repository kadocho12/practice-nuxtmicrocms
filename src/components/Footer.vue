<template>
  <footer class="footer">
    <nav class="nav">
      <ul class="items">
        <li class="item">
          <a href="/news">ニュース</a>
        </li>
        <li class="item">
          <a href="/members">メンバー</a>
        </li>
        <li class="item">
          <a href="/contact">お問い合わせ</a>
        </li>
      </ul>
    </nav>
    <p class="cr">© SIMPLE. All Rights Reserved 2024</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 16px 24px;
  text-align: center;
  color: var(--color-text-sub);
  font-size: 0.8rem;
  margin-top: 80px;
}

.nav {
  margin-bottom: 16px;
}

.items {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 1rem;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .items {
    flex-wrap: wrap;
    gap: 8px 0;
  }
  .item {
    width: 59%;
  }
}
</style>