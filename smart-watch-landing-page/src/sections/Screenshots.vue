<template>
  <section id="screenshots" class="screenshots section text-center">
    <div class="container">
      <h2 class="heading text-5xl">
        How <span class="emphasis">it looks</span>
      </h2>
      <div class="relative z-1 mt-10">
        <VueperSlides
          class="no-shadow"
          :autoplay="true"
          :visible-slides="5"
          :arrows="false"
          :slide-ratio="5 / 12"
          :gap="0"
          :touchable="true"
          :dragging-distance="50"
          :breakpoints="{
            1024: {
              visibleSlides: 3,
              slideRatio: 2 / 3
            }
          }"
        >
          <VueperSlide
            v-for="(item, index) in items"
            :key="index"
            :content="`<div class='mx-4'><img src='${getScreenshotImage(
              item.image
            )}' alt='${item.image}' /></div>`"
          />
        </VueperSlides>
      </div>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  components: {
    VueperSlides,
    VueperSlide
  },

  data() {
    return {
      items: [
        {
          image: "Very Left Screenshot.png"
        },
        {
          image: "Left Screenshot.png"
        },
        {
          image: "iPhoneX.png"
        },
        {
          image: "Right Screenshot.png"
        },
        {
          image: "Very Right Screenshot.png"
        },
        {
          image: "Very Left Screenshot.png"
        }
      ]
    };
  },

  methods: {
    getScreenshotImage(name) {
      return require(`@/assets/images/screenshots/${name}`);
    }
  }
};
</script>
