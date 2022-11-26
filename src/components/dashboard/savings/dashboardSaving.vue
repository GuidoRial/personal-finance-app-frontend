<template>
  <div class="saving" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="saving-name">
      <font-awesome-icon icon="fa-solid fa-piggy-bank" />
      <h4>Guitarra nueva</h4>
      <font-awesome-icon icon="fa-solid fa-money-bill-transfer" v-if="hover" />
    </div>
    <div class="saving-balance">
      <h4>1000 / 2000 ARS</h4>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "saving",
  data() {
    return { hover: false };
  },
};
</script>
<style scoped>
.fa-money-bill-transfer {
  color: var(--soft-gray);
}
.saving-name {
  display: flex;
  gap: 1rem;
}
.saving {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  cursor: pointer;
}
.saving:hover {
  border-bottom: 1px solid var(--dark-gray);
}

.saving-balance {
  /* color: var(--white); */
}
</style>
