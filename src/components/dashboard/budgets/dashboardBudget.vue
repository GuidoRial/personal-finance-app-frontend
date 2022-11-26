<template>
  <div class="budget">
    <div class="budget-name">
      <font-awesome-icon icon="fa-solid fa-table" />
      <h4>Presupuesto anual</h4>
    </div>
    <div class="budget-balance">
      <h4>$30000 ARS</h4>
    </div>
  </div>
</template>
<script>
export default { name: "dashboard-budget" };
</script>
<style scoped>
.budget {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  cursor: pointer;
}

.budget:hover {
  border-bottom: 1px solid var(--dark-gray);
}

.budget-name {
  display: flex;
  gap: 1rem;
}
.budget-balance {
  color: var(--primary);
}
</style>
