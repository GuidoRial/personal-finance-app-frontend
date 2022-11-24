<template>
  <div class="recent-transactions">
    <div class="title">
      <h4>Transacciones recientes</h4>
      <SecondaryButton text="Ver todo" />
    </div>
    <div class="transactions">
      <DashboardTransaction />
      <DashboardTransaction />
      <DashboardTransaction />
      <DashboardTransaction />
      <DashboardTransaction />
    </div>
  </div>
</template>

<script>
import SecondaryButton from "@/components/secondaryButton.vue";
import DashboardTransaction from "@/components/dashboard/dashboardTransaction.vue";
export default {
  name: "recent-transactions",
  components: { SecondaryButton, DashboardTransaction },
};
</script>

<style scoped>
.transactions {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.recent-transactions {
  width: 35%;
  border-left: 1px solid var(--dark-gray);
  padding: 1rem 0;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}
</style>
