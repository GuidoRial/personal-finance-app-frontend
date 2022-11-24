<template>
  <div class="dashboard">
    <WelcomeBackMessage />
    <div class="wallets-and-budgets">
      <TotalBalance />
      <Wallets />
      <Budgets />
      <Savings />
    </div>
    <div class="recent-transactions"></div>
  </div>
</template>

<script>
import WelcomeBackMessage from "@/components/dashboard/welcomeBackMessage.vue";
import TotalBalance from "@/components/dashboard/totalBalance.vue";
import Wallets from "@/components/dashboard/wallets.vue";
import Budgets from "@/components/dashboard/budgets.vue";
import Savings from "@/components/dashboard/savings.vue";
export default {
  name: "dashboard-page",
  data() {
    return {
      showWelcomeMessage: false,
    };
  },
  methods: {},
  components: {
    WelcomeBackMessage,
    TotalBalance,
    Wallets,
    Budgets,
    Savings,
  },
};
</script>
<style scoped>
.wallets-and-budgets {
  width: 100%;
}

.recent-transactions {
  width: 45%;
}
.dashboard {
  background-color: var(--main-bg);
  height: calc(100vh - 4rem);
  color: var(--white);
  display: flex;
  justify-content: center;
}
</style>
