<template>
  <div class="welcome-back" v-if="showWelcomeMessage">
    <div>Bienvenido de vuelta, <span class="user-name">Guido</span></div>
    <div class="close-btn" @click="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
  </div>
</template>
<script>
export default {
  name: "welcomeBackMessage",
  data() {
    return {
      showWelcomeMessage: false,
    };
  },
  methods: {
    close() {
      this.showWelcomeMessage = false;
    },
  },
};
</script>
<style scoped>
.welcome-back {
  background-color: var(--dark-gray);
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 2px;
  position: absolute;
  margin-top: 1rem;
  animation: fadeIn 2s normal forwards;
  animation-delay: 2s;
}
.user-name {
  color: var(--primary);
  font-weight: 700;
  font-family: "Gothic A1", sans-serif;
}

.close-btn {
  position: relative;
  left: 45px;
  bottom: 10px;
  cursor: pointer;
}

@keyframes fadeIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
