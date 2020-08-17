<template>
  <footer class="footer">
    <div class="container my-5">
      <div class="flex flex-col md:flex-row justify-between items-center mx-4">
        <div class="flex flex-gap-4">
          <div>
            <img
              src="@/assets/icons/AppStore Button.png"
              alt="AppStore"
              class="cursor-pointer"
            />
          </div>
          <div>
            <img
              src="@/assets/icons/PlayStore Button.png"
              alt="PlayStore"
              class="cursor-pointer"
            />
          </div>
        </div>
        <ul class="nav__wrapper inline-flex flex-wrap mt-5 md:mt-0">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="nav__item mx-2"
          >
            <InternalAnchor
              v-if="item.id"
              :id="item.id"
              class="nav__link link font-normal text-sm text-theme-surface"
              :title="item.title"
            />

            <a
              v-else
              class="nav__link link font-normal text-sm text-theme-surface"
              :href="item.path"
              @click.prevent
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex justify-between items-center flex-wrap mt-10 mx-4">
        <div class="font-normal text-sm text-theme-surface">
          All right reserved
        </div>
        <div class="flex flex-wrap flex-gap-4">
          <img
            src="@/assets/icons/instagram.png"
            alt="Instagram"
            class="cursor-pointer"
          />
          <img
            src="@/assets/icons/twitter.png"
            alt="Twitter"
            class="cursor-pointer"
          />
          <img
            src="@/assets/icons/facebook-f.png"
            alt="Facebook"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </footer>
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
          title: "Home",
          id: "hero"
        },
        {
          title: "Testimonials",
          id: "testimonial"
        },
        {
          title: "Plans",
          path: "/plans"
        },
        {
          title: "Blog",
          path: "/blog"
        },
        {
          title: "About",
          path: "/about"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #0967d2;
}
</style>
