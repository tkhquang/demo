<template>
  <section id="testimonial" class="testimonial section text-center">
    <div class="container">
      <h1 class="heading mt-16 text-5xl">
        Why people <span class="emphasis">loves us</span>
      </h1>
      <div
        class="relative flex-center flex-col w-full mx-auto lg:w-9/12 lg:flex-row justify-between my-4 mt-16 gap-10"
      >
        <div class="image relative flex-center w-9/12 lg:w-11/12">
          <img
            class="object-cover object-top"
            :src="getFeedbackImage(items[selectedIndex].image)"
            :alt="items[selectedIndex].name"
          />
        </div>

        <div
          class="controls flex w-full mr-4 justify-end lg:absolute right-0 bottom-0 text-5xl text-theme-primary z-10 lg:mb-4"
        >
          <button
            type="button"
            class="previous mr-2 disabled:cursor-not-allowed outline-none focus:outline-none"
            :class="{ 'text-gray-600': selectedIndex === 0 }"
            :disabled="selectedIndex === 0"
            @click="selectPreviousItem"
          >
            &#x2190;
          </button>
          <button
            type="button"
            class="next disabled:cursor-not-allowed outline-none focus:outline-none"
            :class="{ 'text-gray-600': selectedIndex === items.length - 1 }"
            :disabled="selectedIndex === items.length - 1"
            @click="selectNextItem"
          >
            &#x2192;
          </button>
        </div>

        <div class="feedback flex-center flex-col">
          <blockquote class="flex">
            <span
              class="left-quote relative mr-4 mt-2 text-6xl text-theme-primary select-none"
              >&#8220;</span
            >
            <p class="text-left text-lg text-theme-on-background italic">
              {{ items[selectedIndex].feedback }}
            </p>
          </blockquote>
          <div class="mt-10 w-full flex text-left">
            <div class="ml-12 w-full flex flex-col justify-start">
              <span class="text-2xl text-theme-primary font-bold">{{
                items[selectedIndex].name
              }}</span>
              <span class="title mt-1 leading-none text-theme-on-background"
                >{{ items[selectedIndex].title }}r</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      items: [
        {
          image: "Person.png",
          feedback:
            "Needless to say we are extremely satisfied with the results. Man, this thing is getting better and better as I learn more about it. AppNep has really helped our business. I am really satisfied with AppNep.",
          name: "Mike Smith",
          title: "Chief Executive Officer"
        },
        {
          image: "Person 2.png",
          feedback:
            "Out perceive have tone a on a quitting their spineless, focus leave stupid. Skyline cache effectiveness country, maintain around presence right, a is themselves and....prudently, you the and was, which the that and better any a associates, there concepts a its authentic the a the own maybe empty him.",
          name: "Mike Tyson",
          title: "Chief Executive Officer"
        },
        {
          image: "Person 3.png",
          feedback:
            "Size first kind language way statement ideas are the of the halfdozen totally on but in the overhauls the a could didn't it those he have small the frame. That evils been is have pass prayers of logbook waved from to of one bold.",
          name: "Mike Fury",
          title: "Chief Executive Officer"
        }
      ]
    };
  },

  methods: {
    getFeedbackImage(name) {
      return require(`@/assets/images/feedback/${name}`);
    },

    selectNextItem() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },

    selectPreviousItem() {
      this.selectedIndex =
        this.selectedIndex - 1 >= 0
          ? this.selectedIndex - 1
          : this.items.length - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.testimonial::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("~@/assets/background/Wave Shape.png");
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}

.image {
  max-height: 400px;
  flex: 1;
}

.feedback {
  flex: 2;
}

.image img {
  height: 400px;
  width: 400px;
  mask: url("~@/assets/images/blob-shape-inner.png");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: #ffb4bc;
}

.image::after {
  content: "";
  position: absolute;
  display: block;
  margin: auto;
  top: -5px;
  left: 5px;
  width: 100%;
  height: 100%;
  transform: scale(110%);
  transform-origin: center;
  background-image: url("~@/assets/images/blob-shape-outer.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 2;
}
</style>
