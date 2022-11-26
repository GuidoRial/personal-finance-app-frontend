<!-- eslint-disable no-useless-catch -->
<template>
  <div class="confirmation-to-delete-modal">
    <h2>
      ¿Estas seguro que deseas eliminar
      {{ walletToBeDeleted.name }}?
    </h2>
    <div class="button-group">
      <ModalActionButton :isCancel="true" text="Cancelar" @click="cancel" />
      <ModalActionButton text="Eliminar" @click="triggerDeletion" />
    </div>
  </div>
</template>
<script>
import ModalActionButton from "@/components/dashboard/shared/modalActionButton.vue";
import { mapActions } from "pinia";
import walletStore from "@/store/wallet";
export default {
  name: "confirmation-to-delete-modal",
  components: {
    ModalActionButton,
  },
  props: {
    walletToBeDeleted: Object,
  },
  methods: {
    ...mapActions(walletStore, ["deleteWallet"]),
    cancel() {
      this.$emit("cancelDeleteWallet");
    },
    async triggerDeletion() {
      // eslint-disable-next-line no-useless-catch
      try {
        this.deleteWallet(this.walletToBeDeleted._id);
        this.$emit("walletDeleted");
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>
<style scoped>
.confirmation-to-delete-modal {
  background-color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 45rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
}
</style>
