<template>
  <section id="faq" class="faq section">
    <div class="container flex-center flex-col">
      <h2 class="heading text-5xl text-center">
        Frequently <span class="emphasis">asked questions</span>
      </h2>

      <div
        class="flex flex-col justify-between md:flex-row w-full mt-0 md:mt-24"
      >
        <div class="mx-4 md:mx-auto md:w-7/12 mt-10">
          <VsaList
            class="flex flex-col"
            :auto-collapse="false"
            :tags="{
              list: 'dl',
              list__item: 'div',
              item__heading: 'dt',
              heading__content: 'span',
              heading__icon: 'span',
              item__content: 'dd'
            }"
            :roles="{
              presentation: false,
              heading: false,
              region: true
            }"
          >
            <VsaItem
              v-for="(item, index) in items"
              :key="index"
              class="mb-4 has-transition rounded-lg min-w-full bg-white shadow-lg"
            >
              <VsaHeading>
                {{ item.heading }}
              </VsaHeading>

              <VsaIcon>
                <span class="icon"></span>
              </VsaIcon>

              <VsaContent>
                {{ item.content }}
              </VsaContent>
            </VsaItem>
          </VsaList>
        </div>

        <div class="w-2/3 mt-10 md:mt-0 md:w-5/12 px-10 mx-auto">
          <img
            class="block max-w-full h-auto"
            src="@/assets/images/Smartwatch.png"
            alt="Smartwatch"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from "vue-simple-accordion";

export default {
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  },

  data() {
    return {
      items: [
        {
          heading: "Is this app available for smartwatch?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "How can I download the app?",
          content:
            "Magicians by her my distribution the room. First absolutely the doing to can important. Attempt, about been a farther than travelling very rung. Be good in and, which class, was I have I that. Is o'clock study to how to cache treat. To caching peacefully their it a and the."
        },
        {
          heading: "Can i use it for my personal use?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          heading: "Can i use it for my personal use?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.faq::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("~@/assets/background/Wave Shape 2.png");
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}

.vsa-item__trigger {
  @apply flex justify-between items-center p-8 text-left text-lg text-theme-on-background font-bold min-w-full;
}

.vsa-item__content {
  @apply text-theme-on-background px-8 pt-0 pb-8;
}

.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      transition: all 0.5s ease-in-out;

      @apply rotate-0;
      filter: none;
    }
  }
  &__trigger__icon {
    @apply transform -rotate-90 origin-center ml-2;
    filter: grayscale(50);

    .icon {
      @apply block w-4 h-4;
      background-image: url("~@/assets/icons/chevron-down.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}

.vsa-fade-enter-active,
.vsa-fade-leave-active {
  transition-property: all;
  transition-duration: 150ms;
}

.vsa-fade-enter-active {
  transition-delay: 150ms;
}

.vsa-fade-enter,
.vsa-fade-leave-active {
  opacity: 0;
  max-height: 0;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
