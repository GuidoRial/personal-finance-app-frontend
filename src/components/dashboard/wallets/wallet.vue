<template>
  <div class="wallet" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="wallet-name">
      <font-awesome-icon icon="fa-solid fa-wallet" />
      <h4>{{ wallet.name }}</h4>
      <Tooltip text="Transferir fondos">
        <font-awesome-icon
          v-if="hover"
          icon="fa-solid fa-right-left"
          @click="openTransferModal"
        />
      </Tooltip>
      <Tooltip text="Editar">
        <font-awesome-icon
          v-if="hover"
          icon="fa-solid fa-pen-to-square"
          @click="openEditModal"
        />
      </Tooltip>
      <Tooltip text="Eliminar">
        <font-awesome-icon
          v-if="hover"
          icon="fa-solid fa-trash"
          @click="openConfirmationToDeleteModal"
        />
      </Tooltip>
    </div>
    <div class="wallet-balance">
      <h4>
        {{ this.getSymbol(wallet) }}
        {{ wallet.balance.toLocaleString("es-ar") }} {{ wallet.currency }}
      </h4>
    </div>
  </div>
</template>
<script>
import Tooltip from "@/components/UX/Tooltip.vue";
// @TODO => Add different icons for each type of wallet
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
  methods: {
    openEditModal() {
      this.$emit("clickOnEditModalIcon", this.wallet);
    },
    openConfirmationToDeleteModal() {
      this.$emit("clickOnConfirmationToDeleteModalIcon", this.wallet);
    },
    openTransferModal() {
      this.$emit("clickOnOpenTransferModal", this.wallet);
    },
    getSymbol(wallet) {
      return wallet.currency === "ARS" ||
        wallet.currency === "USD" ||
        wallet.currency === "USDT"
        ? "$"
        : "€";
    },
  },
  components: {
    Tooltip,
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
