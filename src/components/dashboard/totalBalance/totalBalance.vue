<template>
  <div class="total-balance">
    <div class="title">
      <h3>Balance total</h3>
    </div>

    <h2
      class="balance"
      v-for="(balance, i) in this.user?.totalBalance"
      :key="i"
    >
      {{ this.getSymbol(balance) }}
      {{ balance.total.toLocaleString() }} {{ balance.currency }}
    </h2>
  </div>
</template>
<script>
import useAuth from "@/store/auth";
import { mapState } from "pinia";

export default {
  name: "total-balance",
  computed: {
    ...mapState(useAuth, ["user"]),
  },
  methods: {
    getSymbol(balance) {
      return balance.currency === "ARS" ||
        balance.currency === "USD" ||
        balance.currency === "USDT"
        ? "$"
        : "€";
    },
  },
  mounted() {
    console.log(this.user);
  },
};
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
}
.balance {
  color: var(--white);
}
</style>
