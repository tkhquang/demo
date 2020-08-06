<template>
  <span
    class="link cursor-pointer"
    :title="title"
    @click="handleAnchorClick(id)"
  >
    {{ title }}
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    id: {
      type: String,
      required: true
    }
  },

  methods: {
    scrollToElement(el) {
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset - 70,
          behavior: "smooth"
        });
      }
    },

    handleAnchorClick(id) {
      const el = document.getElementById(id);
      if (!el) {
        return;
      }

      this.scrollToElement(el);
    }
  }
};
</script>
