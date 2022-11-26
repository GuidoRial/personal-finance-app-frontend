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
      @clickOnEditModalIcon="openEditWalletModal"
      @clickOnConfirmationToDeleteModalIcon="openConfirmationToDeleteModal"
    />
    <DashboardNotFoundMessage
      v-else
      firstText="Parece que no tenés billeteras creadas ahora mismo."
      secondText="Hacé click en el botón de 'Crear billetera' para crear una."
    />
  </div>
  <DashboardWalletModal
    v-if="showCreateWalletModal"
    @cancelAction="reloadWalletsAndCloseModal"
    @walletCreated="afterCreatingWallet"
  />
  <DashboardWalletModal
    v-if="showEditWalletModal"
    :isEdit="true"
    @cancelAction="reloadWalletsAndCloseModal"
    @walletEdited="reloadWalletsAndCloseModal"
    :walletToBeEdited="walletToBeEdited"
  />
  <ConfirmationToDeleteModal
    v-if="showConfirmationToDeleteModal"
    :walletToBeDeleted="walletToBeDeleted"
    @cancelDeleteWallet="showConfirmationToDeleteModal = false"
    @walletDeleted="reloadWalletsAndCloseModal"
  />
</template>
<script>
import Wallet from "@/components/dashboard/wallet.vue";
import DashboardActionButton from "@/components/dashboard/dashboardActionButton.vue";
import DashboardNotFoundMessage from "@/components/dashboard/dashboardNotFoundMessage.vue";
import DashboardWalletModal from "@/components/dashboard/dashboardWalletModal.vue";
import ConfirmationToDeleteModal from "@/components/dashboard/dashboardConfirmationToDeleteModal.vue";
import { mapActions } from "pinia";
import authStore from "@/store/auth";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "wallets",
  data() {
    return {
      showCreateWalletModal: false,
      showEditWalletModal: false,
      walletToBeEdited: {},
      showConfirmationToDeleteModal: false,
      walletToBeDeleted: {},
    };
  },
  methods: {
    ...mapActions(authStore, ["getUserData"]),
    async afterCreatingWallet() {
      this.showCreateWalletModal = false;
      await this.getUserData("wallets");
    },
    async reloadWalletsAndCloseModal() {
      this.showCreateWalletModal = false;
      this.showEditWalletModal = false;
      this.showConfirmationToDeleteModal = false;
      await this.getUserData("wallets");
      this.walletToBeDeleted = {};
      this.walletToBeEdited = {};
    },
    openCreateWalletModal() {
      if (this.showCreateWalletModal) return;
      this.showCreateWalletModal = true;
    },
    openEditWalletModal(data) {
      if (this.showEditWalletModal) return;
      this.showEditWalletModal = true;
      this.walletToBeEdited = data;
    },
    openConfirmationToDeleteModal(data) {
      if (this.showConfirmationToDeleteModal) return;
      this.showConfirmationToDeleteModal = true;
      this.walletToBeDeleted = data;
    },
  },
  components: {
    Wallet,
    DashboardActionButton,
    DashboardNotFoundMessage,
    DashboardWalletModal,
    ConfirmationToDeleteModal,
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
