<template>
  <div class="dashboard">
    <WelcomeBackMessage />
    <div class="wallets-and-budgets">
      <!-- <TotalBalance /> -->
      <Wallets :wallets="wallets" />
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
import walletStore from "@/store/wallet";
export default {
  name: "dashboard-page",
  data() {
    return {
      showWelcomeMessage: false,
      wallets: [],
    };
  },
  async created() {
    this.wallets = await this.getWallets();
    console.log(this.wallets);
  },
  methods: {
    ...mapActions(walletStore, ["getWallets"]),
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
