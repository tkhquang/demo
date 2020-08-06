<template>
  <nav class="header__nav w-1/3 hidden md:block">
    <ul class="nav__wrapper inline-flex gap-4 md:gap-6 lg:gap-8">
      <li v-for="(item, index) in items" :key="index" class="nav__item">
        <InternalAnchor :id="item.id" :title="item.title" />
      </li>
    </ul>
  </nav>
</template>

<script>
import InternalAnchor from "@/components/Common/InternalAnchor";

export default {
  components: {
    InternalAnchor
  },

  data() {
    return {
      items: [
        {
          title: "How it works",
          id: "intro"
        },
        {
          title: "FAQ",
          id: "faq"
        },
        {
          title: "Pricing",
          id: "pricing"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav__item {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    opacity: 0;
    height: 3px;
    border-radius: 5px;
    background-color: #ccddee;
    box-shadow: 1px 2px 2px #000000;
    transition: all 0.3s linear;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
}
</style>
