<template>
  <div class="wallet" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="wallet-name">
      <font-awesome-icon icon="fa-solid fa-wallet" />
      <h4>{{ wallet.name }}</h4>
      <font-awesome-icon v-if="hover" icon="fa-solid fa-right-left" />
    </div>
    <div class="wallet-balance">
      <h4>
        {{
          wallet.currency === "ARS" ||
          wallet.currency === "USD" ||
          wallet.currency === "USDT"
            ? "$"
            : "€"
        }}
        {{ wallet.balance.toLocaleString() }} {{ wallet.currency }}
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wallet",
  props: {
    wallet: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style scoped>
.fa-right-left {
  color: var(--soft-gray);
}
.wallet-name {
  display: flex;
  gap: 1rem;
}
.wallet {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  cursor: pointer;
}
.wallet:hover {
  border-bottom: 1px solid var(--dark-gray);
}
</style>
