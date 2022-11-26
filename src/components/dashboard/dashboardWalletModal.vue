<template>
  <div class="create-wallet-modal" :style="isEdit && 'height: 20rem;'">
    <form class="create-wallet-form" v-if="!loading">
      <h4 class="create-wallet-title">
        {{ this.isEdit ? "Editar Billetera" : "Crear billetera" }}
      </h4>
      <label>Información general</label>
      <input
        v-model="walletData.name"
        class="create-wallet-input"
        placeholder="Brubank, Mercadopago..."
      />
      <input
        v-model="walletData.description"
        class="create-wallet-input"
        placeholder="Descripción (opcional)"
      />
      <div class="select-container input-group" v-if="!isEdit">
        <label>Tipo de billetera</label>
        <div class="physical-wallet-section">
          <label for="s2d">Es una billetera física: </label>
          <input
            id="s2d"
            type="checkbox"
            class="switch"
            :checked="walletData.isPhysicalWallet"
            v-model="walletData.isPhysicalWallet"
          />
        </div>
        <select
          v-if="!walletData.isPhysicalWallet"
          v-model="walletData.identifier.identifierType"
        >
          <option>CBU</option>
          <option>CVU</option>
          <option>Alias</option>
          <option>Address</option>
        </select>
        <input
          v-if="!walletData.isPhysicalWallet"
          v-model="walletData.identifier.value"
          class="create-wallet-input address-or-cbu"
          placeholder="Número de CBU, CVU, Wallet Address"
        />
      </div>
      <label v-if="!isEdit">Divisa</label>
      <div class="select-container" v-if="!isEdit">
        <select v-model="walletData.currency">
          <option v-for="(userOption, i) in this.user.currencies" :key="i">
            {{ userOption }}
          </option>
        </select>
      </div>
      <input
        v-if="!isEdit"
        v-model="walletData.balance"
        class="create-wallet-input"
        type="number"
        placeholder="Balance inicial"
      />
    </form>
    <p
      v-if="errorMessage && !loading"
      class="d-flex justify-content-center error-message"
    >
      {{ errorMessage }}
    </p>
    <div
      class="button-group"
      v-if="!loading"
      :style="errorMessage.length == 0 && 'margin-top: 1rem;'"
    >
      <ModalActionButton :isCancel="true" text="Cancelar" @click="cancel" />
      <ModalActionButton
        :text="this.isEdit ? 'Editar Billetera' : 'Crear billetera'"
        @click="sendWallet"
      />
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-items-center flex-column"
      style="height: 100%"
    >
      <h4 class="create-wallet-title">
        {{ this.isEdit ? "Editando billetera" : "Creando billetera" }}
      </h4>
      <LoadingDots />
    </div>
  </div>
</template>
<script>
import authStore from "@/store/auth";
import { mapActions, mapState } from "pinia";
import ModalActionButton from "@/components/dashboard/modalActionButton.vue";
import LoadingDots from "@/components/UX/loadingDots.vue";
import walletStore from "@/store/wallet";
export default {
  name: "create-wallet-modal",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    walletToBeEdited: Object,
  },
  data() {
    return {
      loading: false,
      errorMessage: "",
      walletData: {
        name: "",
        description: null,
        identifier: {
          identifierType: "CBU",
          value: null,
        },
        isPhysicalWallet: false,
        currency: "USDT",
        balance: 0,
      },
    };
  },
  computed: {
    ...mapState(authStore, ["user"]),
    isButtonDisabled() {
      const { name } = this.walletData;
      return name.length > 0;
    },
  },
  created() {
    this.isEdit && (this.walletData = this.walletToBeEdited);
  },
  methods: {
    ...mapActions(walletStore, ["createWallet", "editWallet"]),
    async sendWallet() {
      this.errorMessage = "";
      if (this.walletData.isPhysicalWallet) {
        (this.walletData.identifier.identifierType = null),
          (this.walletData.identifier.value = null);
      }

      if (!this.walletData.name.length) {
        this.errorMessage = "El nombre no puede estar vacío";
        return;
      }

      this.loading = true;
      try {
        if (!this.isEdit) {
          await this.createWallet(this.walletData);
          this.$emit("walletCreated");
        } else {
          const { _id, name, description } = this.walletData;
          await this.editWallet(_id, { name, description });
          //User is only able to change those values
          this.$emit("walletEdited");
        }
        this.loading = false;
        // eslint-disable-next-line no-useless-catch
      } catch (e) {
        throw e;
      } finally {
        this.loading = false;
      }
    },
    cancel() {
      this.$emit("cancelAction");
    },
  },
  components: {
    ModalActionButton,
    LoadingDots,
  },
};
</script>
<style scoped>
.error-message {
  border: 1px solid var(--red);
  background-color: var(--red);
  width: 50%;
  color: var(--white);
  font-weight: 500;
  margin: 1rem 0 !important;
  padding: 1rem 0.5rem;
}
.physical-wallet-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.button-group {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}
.input-group {
  border: 1px solid var(--soft-gray);
  padding: 1rem;
}
.create-wallet-input {
  width: 70%;
  height: 1.5rem;
}
.address-or-cbu {
  width: 99%;
}
.select-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 3px;
}
.create-wallet-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.create-wallet-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 80%;
}
.create-wallet-modal {
  background-color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 35rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
}
</style>
