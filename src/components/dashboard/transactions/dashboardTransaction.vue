<template>
  <div class="transaction">
    <div class="name-icon">
      <font-awesome-icon icon="fa-solid fa-building-columns" />
      Depósito
    </div>
    <div>+ $10.000 ARS</div>
  </div>
</template>
<script>
export default { name: "dashboard-transaction" };
</script>

<style scoped>
.transaction {
  border: 1px solid var(--dark-gray);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.name-icon {
  display: flex;
  gap: 1rem;
}
</style>
