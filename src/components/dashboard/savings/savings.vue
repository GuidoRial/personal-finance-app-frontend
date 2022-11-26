<template>
  <div class="savings">
    <div class="title">
      <h3>Ahorros</h3>
    </div>
    <Savings />
    <Savings />
    <Savings />
  </div>
</template>
<script>
import Savings from "@/components/dashboard/savings/dashboardSaving.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "savings",
  components: {
    Savings,
  },
};
</script>
<style scoped>
.savings {
  padding: 1rem 0 0 0;
  border-bottom: 2px solid var(--dark-gray);
}

.title {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
}
</style>
