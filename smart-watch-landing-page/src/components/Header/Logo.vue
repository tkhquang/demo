<template>
  <div class="logo md:w-1/3">
    <div
      class="logo__wrapper mx-auto select-none flex-center rounded-md bg-white w-12 h-12 cursor-pointer"
      @click="scrollToTop"
    >
      <span
        class="logo__text text-4xl font-bold text-center text-theme-primary"
      >
        A
      </span>
    </div>
  </div>
</template>

<script>
import "typeface-ubuntu";

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.logo__text {
  font-family: "Ubuntu", sans-serif;
}
</style>
