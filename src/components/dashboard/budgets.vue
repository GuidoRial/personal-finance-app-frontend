<template>
  <div class="budgets">
    <div class="title">
      <h3>Mis presupuestos</h3>
    </div>
    <DashboardBudget />
    <DashboardBudget />
    <DashboardBudget />
  </div>
</template>
<script>
import DashboardBudget from "@/components/dashboard/dashboardBudget.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "budgets",
  components: {
    DashboardBudget,
  },
};
</script>
<style scoped>
.budgets {
  padding: 1rem 0 0 0;
  border-bottom: 2px solid var(--dark-gray);
}

.title {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
}
</style>
