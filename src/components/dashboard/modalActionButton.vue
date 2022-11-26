<template>
  <button
    :class="
      isCancel
        ? ['is-cancel modal-action-button']
        : ['is-success modal-action-button']
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "modal-action-button",
  props: {
    isCancel: { type: Boolean, default: false },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.modal-action-button {
  width: 11rem;
  height: 2.5rem;
  border-radius: 3px;
  cursor: pointer;
  color: var(--white);
  border: 1px solid var(--dark-gray);
}
.modal-action-button:hover {
  opacity: 0.7;
}
.is-cancel {
  background-color: var(--red);
}

.is-success {
  background-color: var(--primary);
}
</style>
