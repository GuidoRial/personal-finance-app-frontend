<template>
  <div class="dashboard">
    <WelcomeBackMessage />
    <div class="wallets-and-budgets">
      <!-- <TotalBalance /> -->
      <Wallets :wallets="user.wallets" />
      <!-- <Budgets /> -->
      <!-- <Savings /> -->
    </div>
    <RecentTransactions />
  </div>
</template>

<script>
import WelcomeBackMessage from "@/components/dashboard/welcomeBackMessage.vue";
// import TotalBalance from "@/components/dashboard/totalBalance.vue";
import Wallets from "@/components/dashboard/wallets.vue";
// import Budgets from "@/components/dashboard/budgets.vue";
// import Savings from "@/components/dashboard/savings.vue";
import RecentTransactions from "@/components/dashboard/recentTransactions.vue";
import { mapActions, mapState } from "pinia";
import authStore from "@/store/auth";
export default {
  name: "dashboard-page",
  data() {
    return {
      showWelcomeMessage: false,
      wallets: [],
    };
  },
  async created() {
    await this.getUserData("wallets");
  },
  methods: {
    ...mapActions(authStore, ["getUserData"]),
  },
  computed: {
    ...mapState(authStore, ["user"]),
  },
  components: {
    WelcomeBackMessage,
    // TotalBalance,
    Wallets,
    // Budgets,
    // Savings,
    RecentTransactions,
  },
};
</script>
<style scoped>
.wallets-and-budgets {
  width: 100%;
}

.dashboard {
  background-color: var(--main-bg);
  height: calc(100vh - 4rem);
  color: var(--white);
  display: flex;
  justify-content: center;
}
</style>
