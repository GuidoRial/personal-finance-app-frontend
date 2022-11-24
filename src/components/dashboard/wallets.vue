<template>
  <div class="wallets">
    <div class="title">
      <h3>Mis billeteras</h3>
    </div>
    <Wallet />
    <Wallet />
    <Wallet />
  </div>
</template>
<script>
import Wallet from "@/components/dashboard/wallet.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wallets",
  components: {
    Wallet,
  },
};
</script>
<style scoped>
.wallets {
  padding: 1rem 0 0 0;
  border-bottom: 2px solid var(--dark-gray);
}
.title {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
}
</style>
