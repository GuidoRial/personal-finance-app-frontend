<template>
  <button>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "authButton",
  props: {
    text: String,
  },
};
</script>
