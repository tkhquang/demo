<template>
  <section
    id="hero"
    class="hero bg-bottom bg-cover bg-no-repeat h-screen pt-header"
    :style="{
      backgroundImage: `url(${require('@/assets/background/Background.svg')}`
    }"
  >
    <div
      class="container leading-none lg:leading-tight text-5xl lg:text-6xl flex flex-col justify-between h-full"
    >
      <h1
        class="hero__heading my-5 text-white text-center w-4/5 lg:w-2/3 xl:1/2 mx-auto"
      >
        Smart Watch App Landing Page
      </h1>
      <div class="hero__image-wrapper flex-center">
        <img
          class="hero__image"
          src="@/assets/images/Smartwatch.png"
          alt="Smartwatch"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 420px;
  background-size: auto 200%;
}

.hero__image-wrapper {
  max-height: 55vh;
}
</style>
