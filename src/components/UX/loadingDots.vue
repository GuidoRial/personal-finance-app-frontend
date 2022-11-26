<template>
  <div class="d-flex align-items-center justify-content-center">
    <div class="dot1 bg-dark rounded-circle m-2"></div>
    <div class="dot2 bg-dark rounded-circle m-2"></div>
    <div class="dot3 bg-dark rounded-circle m-2"></div>
  </div>
</template>
<script>
export default { name: "loading-dots" };
</script>
<style scoped>
@keyframes ScaleInOut {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.5);
  }
}

.bg-dark {
  background-color: var(--white);
}
.dot1 {
  width: 15px;
  height: 15px;
  animation: ScaleInOut 0.6s ease-in-out 0.2s infinite alternate;
}

.dot2 {
  width: 15px;
  height: 15px;
  animation: ScaleInOut 0.6s ease-in-out 0.4s infinite alternate;
}

.dot3 {
  width: 15px;
  height: 15px;
  animation: ScaleInOut 0.6s ease-in-out 0.6s infinite alternate;
}
</style>
