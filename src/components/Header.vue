<template>
  <div class="nav-bar">
    <div class="app-name">BIRRITA</div>
    <div class="links-container">
      <ul class="links">
        <li class="link">Dashboard</li>
        <li class="link">Billeteras</li>
        <li class="link">Presupuestos</li>
        <li class="link">Ahorros</li>
        <li class="link">
          <font-awesome-icon icon="fa-solid fa-user" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line vue/multi-word-component-names
export default { name: "header" };
</script>
<style scoped>
.nav-bar {
  background-color: var(--dark-gray);
  width: 100%;
  height: 4rem;
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
}
.links {
  display: flex;
  list-style-type: none;
  gap: 1rem;
}

.app-name {
  color: var(--primary);
  font-family: "Gothic A1", sans-serif;
  font-size: 1.7rem;
}

.link {
  cursor: pointer;
}

.link:hover {
  color: var(--primary);
}
</style>
