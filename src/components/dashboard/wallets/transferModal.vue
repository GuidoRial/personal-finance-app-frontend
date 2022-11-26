<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="modal">
    <div class="origin-wallet-section">
      <p>Transferir fondos desde</p>
      <span class="primary">{{ originWallet.name }}</span>
    </div>
    <p>
      Fondos disponibles:
      <span class="primary"
        >{{ this.getSymbol(originWallet) }}
        {{ originWallet.balance }}
        {{ originWallet.currency }}</span
      >
    </p>
    <div class="d-flex align-items-center gap-1">
      <label>Monto a transferir:</label>
      <input type="number" v-model="amount" />
    </div>

    <div class="arrow-down-container">
      <font-awesome-icon icon="fa-solid fa-arrow-down" />
    </div>
    <div class="origin-wallet-section" v-if="receiverWallets?.length">
      <p>Recibir fondos en:</p>
    </div>
    <div class="receiver-wallets" v-if="receiverWallets?.length">
      <div
        @click="receiverWallet = wallet"
        v-for="wallet in receiverWallets"
        :key="wallet._id"
        :class="
          wallet._id === receiverWallet._id
            ? ['selected-wallet receiver-wallet primary']
            : ['receiver-wallet primary']
        "
      >
        {{ wallet.name }}
      </div>
    </div>
    <p v-else>
      Parece que no tienes ninguna billetera que
      <span class="primary"> comparta divisa</span> con tu billetera origen
    </p>
    <p v-if="errorMessage.length" class="error-message">
      {{ errorMessage }}
    </p>
    <div class="button-group">
      <ModalActionButton :isCancel="true" text="Cancelar" @click="cancel" />
      <ModalActionButton text="Transferir fondos" @click="triggerTransfer" />
    </div>
  </div>
</template>
<script>
import ModalActionButton from "@/components/dashboard/shared/modalActionButton.vue";
import { mapActions, mapState } from "pinia";
import authStore from "@/store/auth";
import useWallet from "@/store/wallet";
export default {
  name: "transfer-modal",
  props: {
    originWallet: Object,
  },
  data() {
    return {
      receiverWallets: [],
      receiverWallet: {},
      amount: 0,
      errorMessage: "",
    };
  },
  computed: {
    ...mapState(authStore, ["user"]),
  },
  async mounted() {
    this.receiverWallets = this.user.wallets.filter(
      (w) =>
        w._id !== this.originWallet._id &&
        w.currency === this.originWallet.currency
    );
  },
  methods: {
    ...mapActions(useWallet, ["transferFromWalletToWallet"]),
    cancel() {
      this.$emit("cancelTransfer");
    },
    async triggerTransfer() {
      // @TODO => Transfer when origin.balance === 0
      // eslint-disable-next-line no-useless-catch, no-empty
      try {
        this.errorMessage = "";
        if (this.originWallet.balance === 0) {
          this.errorMessage = "No tenes saldo para transferir";
          return;
        }
        if (this.amount == 0) {
          this.errorMessage = "El monto a transferir no puede ser 0";
          return;
        }
        if (this.amount > this.originWallet.balance) {
          this.errorMessage =
            "El monto a transferir no puede ser mayor al balance de la billetera de origen";
          return;
        }
        // eslint-disable-next-line no-prototype-builtins
        if (!this.receiverWallet.hasOwnProperty("_id")) {
          this.errorMessage = "Por favor seleccione una billetera de destino";
          return;
        }

        // eslint-disable-next-line vue/no-mutating-props
        const senderNewBalance = (this.originWallet.balance =
          this.originWallet.balance - this.amount);
        const receiverNewBalance = (this.receiverWallet.balance =
          this.receiverWallet.balance + this.amount);

        await this.transferFromWalletToWallet(this.originWallet._id, {
          receiverWalletId: this.receiverWallet._id,
          senderNewBalance,
          receiverNewBalance,
        });
        this.$emit("transferFinished");
      } catch (e) {
        throw e;
      }
    },
    getSymbol(wallet) {
      return wallet.currency === "ARS" ||
        wallet.currency === "USD" ||
        wallet.currency === "USDT"
        ? "$"
        : "€";
    },
  },
  components: { ModalActionButton },
};
</script>
<style scoped>
.error-message {
  border: 1px solid var(--red);
  background-color: var(--red);
  color: var(--white);
  font-weight: 500;
  margin: 0.4rem 0 !important;
  padding: 0.5rem;
}
.receiver-wallet {
  border: 1px dashed var(--primary);
  padding: 0.5rem;
  cursor: pointer;
}

.receiver-wallet:hover {
  background-color: var(--primary);
  color: var(--white);
}

.selected-wallet {
  background-color: var(--primary);
  color: var(--white) !important;
}
.receiver-wallets {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.button-group {
  display: flex;
  gap: 1rem;
}
.fa-arrow-down {
  color: var(--primary);
}
.arrow-down-container {
  border: 2px dashed var(--primary);
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1rem;
}
.origin-wallet-section {
  position: relative;
  top: 0;
  display: flex;
  gap: 0.5rem;
  font-size: 1.7rem;
}

.modal {
  background-color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
}
</style>
