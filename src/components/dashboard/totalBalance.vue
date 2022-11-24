<template>
  <div class="total-balance">
    <div class="title">
      <h3>Balance total</h3>
    </div>
    <h2 class="balance">$1.000 USDT</h2>
    <h2 class="balance">$100.000 ARS</h2>
  </div>
</template>
<script>
export default { name: "total-balance" };
</script>
<style scoped>
.title {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
}
.balance-text {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
}
.balance {
  padding: 0.3rem 3rem;
}
.total-balance {
  /* height: 12%; */
  display: flex;
  justify-content: start;
  padding: 1rem 0;
  flex-direction: column;
  text-align: left;
  border-bottom: 2px solid var(--dark-gray);
  border-right: 2px solid var(--dark-gray);
}
.balance {
  color: var(--white);
}
</style>
