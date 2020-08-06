<template>
  <ul class="w-1/3 hidden md:inline-flex justify-end gap-4 md:gap-6 lg:gap-8">
    <li v-for="(item, index) in items" :key="index">
      <span
        class="link has-transition"
        :class="{
          'link--has-border border-2 border-white rounded-full px-12 py-3  hover:bg-white hover:text-theme-primary':
            item.outline
        }"
        @click.prevent="showModal"
      >
        {{ item.title }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Login",
          path: "/login"
        },
        {
          title: "Signup",
          path: "/signup",
          outline: true
        }
      ]
    };
  },

  methods: {
    showModal() {
      window.alert("Unimplemented! \nThis is just a demo!");
    }
  }
};
</script>

<style lang="scss" scoped>
.link--has-border {
  //
}
</style>
