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
      v-if="wallets?.length"
      v-for="(wallet, i) in wallets"
      :wallet="wallet"
      :key="i"
      @clickOnEditModalIcon="openEditWalletModal"
      @clickOnConfirmationToDeleteModalIcon="openConfirmationToDeleteModal"
      @clickOnOpenTransferModal="openTransferMoneyModal"
    />
    <DashboardNotFoundMessage
      v-else
      firstText="Parece que no tenés billeteras creadas ahora mismo."
      secondText="Hacé click en el botón de 'Crear billetera' para crear una."
    />
  </div>
  <interactionWalletModal
    v-if="showCreateWalletModal"
    @cancelAction="reloadWalletsAndCloseModal"
    @walletCreated="afterCreatingWallet"
  />
  <interactionWalletModal
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
  <TransferModal
    v-if="showTransferModal"
    :originWallet="originWallet"
    @cancelTransfer="this.showTransferModal = false"
    @transferFinished="reloadWalletsAndCloseModal"
  />
</template>
<script>
import Wallet from "@/components/dashboard/wallets/wallet.vue";
import DashboardActionButton from "@/components/dashboard/shared/dashboardActionButton.vue";
import DashboardNotFoundMessage from "@/components/dashboard/shared/dashboardNotFoundMessage.vue";
import interactionWalletModal from "@/components/dashboard/wallets/walletModal.vue";
import ConfirmationToDeleteModal from "@/components/dashboard/wallets/confirmationToDeleteModal.vue";
import TransferModal from "@/components/dashboard/wallets/transferModal.vue";
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
      originWallet: {},
      showTransferModal: false,
    };
  },
  computed: {
    otherModalsAreOpen() {
      return (
        this.showCreateWalletModal ||
        this.showEditWalletModal ||
        this.showConfirmationToDeleteModal ||
        this.showTransferModal
      );
    },
  },
  methods: {
    ...mapActions(authStore, ["getUserData"]),
    closeAllModals() {
      this.showCreateWalletModal = false;
      this.showEditWalletModal = false;
      this.showConfirmationToDeleteModal = false;
      this.showTransferModal = false;
    },
    returnWalletsToDefaultValue() {
      this.walletToBeDeleted = {};
      this.walletToBeEdited = {};
      this.originWallet = {};
    },
    async afterCreatingWallet() {
      this.showCreateWalletModal = false;
      await this.getUserData("wallets");
    },
    async reloadWalletsAndCloseModal() {
      await this.getUserData("wallets");
      this.closeAllModals();
      this.returnWalletsToDefaultValue();
    },
    openCreateWalletModal() {
      if (this.otherModalsAreOpen) return;
      this.showCreateWalletModal = true;
    },
    openEditWalletModal(data) {
      if (this.otherModalsAreOpen) return;
      this.showEditWalletModal = true;
      this.walletToBeEdited = data;
    },
    openConfirmationToDeleteModal(data) {
      if (this.otherModalsAreOpen) return;
      this.showConfirmationToDeleteModal = true;
      this.walletToBeDeleted = data;
    },
    openTransferMoneyModal(data) {
      if (this.otherModalsAreOpen) return;
      this.originWallet = data;
      this.showTransferModal = true;
    },
  },
  components: {
    Wallet,
    DashboardActionButton,
    DashboardNotFoundMessage,
    interactionWalletModal,
    ConfirmationToDeleteModal,
    TransferModal,
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
