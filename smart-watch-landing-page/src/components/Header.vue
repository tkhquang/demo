<template>
  <header
    class="header fixed inset-0 z-fg h-header flex-center has-transition"
    :class="{ 'header--is-scrolled': isScrolled }"
  >
    <div class="container mx-4 md:mx-auto flex justify-between items-center">
      <Navigation />
      <Logo />
      <Action />
      <svg
        viewBox="0 0 10 8"
        width="40"
        class="block md:hidden flex-center cursor-pointer"
      >
        <path
          d="M1 1h8M1 4h 8M1 7h8"
          stroke="#FFFFFF"
          stroke-width="1.25"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </header>
</template>

<script>
import Navigation from "@/components/Header/Navigation";
import Logo from "@/components/Header/Logo";
import Action from "@/components/Header/Action";

export default {
  components: {
    Navigation,
    Logo,
    Action
  },

  data() {
    return {
      isScrolled: false
    };
  },

  created() {
    window.addEventListener("scroll", this.setYOffset);
    window.addEventListener("load", this.setYOffset);
  },

  destroyed() {
    window.removeEventListener("scroll", this.setYOffset);
    window.removeEventListener("load", this.setYOffset);
  },

  methods: {
    setYOffset() {
      const headerHeight = 70;
      const top = window.pageYOffset || 0;
      this.isScrolled = top > parseInt(headerHeight);
    }
  }
};
</script>

<style lang="scss" scoped>
.header--is-scrolled {
  background-color: #2186eb;
}
</style>
