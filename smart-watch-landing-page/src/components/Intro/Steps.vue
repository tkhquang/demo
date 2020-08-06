<template>
  <ol class="step__list flex-center flex-col lg:grid lg:grid-cols-3">
    <li
      v-for="step in steps"
      :key="step.title"
      class="relative step__item pb-12 px-12 mx-auto pt-24 lg:m-4 bg-white rounded-md"
    >
      <span class="step__icon z-2 select-none">
        <img :src="getIcon(step.icon)" :alt="step.title" />
      </span>
      <h2
        class="step__title v-html heading relative z-1 mt-4"
        v-html="step.title"
      />
      <p class="step__description relative z-1 mt-4">
        {{ step.description }}
      </p>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          title: `<span class="emphasis">Download</span> Our App`,
          description:
            "Help in theory, our a the and fixed housed commas, having of a the that deceleration they or have of there",
          icon: "download.png"
        },
        {
          title: `<span class="emphasis">Install</span> Our App`,
          description:
            "As coast concise publication such my big from writing right attend; On the possible mail the fresh as herself",
          icon: "settings-5.png"
        },
        {
          title: `<span class="emphasis">Start</span> Creating`,
          description:
            "Need emerged. Train her software their phase. Horn that nor frequency starting the of to belly, five narrow",
          icon: "diamond.png"
        }
      ]
    };
  },

  methods: {
    getIcon(name) {
      return require(`@/assets/icons/${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.step__list {
  counter-reset: step-counter;
}

.step__item {
  counter-increment: step-counter;
  transition: all 0.3s ease-in-out;
}

.step__item:hover {
  filter: drop-shadow(0px 15px 17.5px rgba(51, 78, 104, 0.1));
}

.step__item::before {
  content: counter(step-counter);
  position: absolute;
  left: 3.25rem;
  color: #d9e2ec;
  font-weight: 500;
  text-align: center;
  font-size: 13rem;
  z-index: 0;
}

.step__icon {
  display: flex;
  width: 50px;
  height: 50px;
}

.step__icon img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.step__title span {
  color: #2186eb;
}

.step__description {
  color: #627d98;
  font-weight: 400;
}
</style>
