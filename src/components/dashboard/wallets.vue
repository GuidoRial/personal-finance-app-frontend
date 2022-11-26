<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="wallets">
    <div class="title">
      <h3>Mis billeteras</h3>
      <DashboardActionButton
        text="Crear billetera"
        @click="openCreateWalletModal"
      />
    </div>
    <Wallet
      v-if="wallets.length"
      v-for="(wallet, i) in wallets"
      :wallet="wallet"
      :key="i"
    />
    <DashboardNotFoundMessage
      v-else
      firstText="Parece que no tenés billeteras creadas ahora mismo."
      secondText="Hacé click en el botón de 'Crear billetera' para crear una."
    />
  </div>
  <CreateWalletModal
    v-if="showCreateWalletModal"
    @cancelAction="showCreateWalletModal = false"
    @walletCreated="showCreateWalletModal = false"
  />
</template>
<script>
import Wallet from "@/components/dashboard/wallet.vue";
import DashboardActionButton from "@/components/dashboard/dashboardActionButton.vue";
import DashboardNotFoundMessage from "@/components/dashboard/dashboardNotFoundMessage.vue";
import CreateWalletModal from "@/components/dashboard/createWalletModal.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wallets",
  data() {
    return {
      showCreateWalletModal: true,
    };
  },
  methods: {
    openCreateWalletModal() {
      if (this.showCreateWalletModal) return;
      this.showCreateWalletModal = true;
    },
  },
  components: {
    Wallet,
    DashboardActionButton,
    DashboardNotFoundMessage,
    CreateWalletModal,
  },
  props: {
    wallets: Array,
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
  justify-content: space-between;
  padding: 0.5rem 2rem;
}
</style>
