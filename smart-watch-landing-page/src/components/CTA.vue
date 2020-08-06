<template>
  <section id="cta" class="cta section flex bg-theme-primary">
    <div class="container max-h-full flex flex-col md:w-8/12 lg:w-1/2 xl:w-1/3">
      <h2
        class="font-medium leading-none md:leading-tight tracking-tight text-4xl md:text-5xl mt-16 mb-5 text-white text-center mx-auto"
      >
        Download the future
      </h2>

      <p class="text-white leading-tight bg-theme-primary">
        Rolled effectiveness coffee letters, that deeply from background
        business would play. Queen country. To in what much seemed as before
        scarfs, little many it much due before fully apartment, me, and during
        she her for lots to on it material were her she war, little founding
        trying.
      </p>

      <form
        action=""
        class="mt-8 mb-10 bg-white flex items-center justify-between rounded-full px-1 w-full"
      >
        <img
          src="@/assets/icons/paper-plane.png"
          alt="paper-plane"
          class="cta-form__icon ml-4 mr-1"
        />
        <label for="cta-email" class="opacity-0 absolute inset-0 z-bg">
          Your email
        </label>
        <input
          id="cta-email"
          name="cta-email"
          type="email"
          placeholder="Email"
          class="cta-form__input px-2 min-w-0 w-full"
        />
        <button
          type="submit"
          class="has-transition uppercase text-white bg-theme-primary font-bold py-2 px-6 my-1 rounded-full hover:bg-white hover:text-theme-primary border-2 border-theme-primary"
          @click.prevent
        >
          Subscribe
        </button>
      </form>

      <div class="marketplace flex-center mb-16">
        <img
          class="mx-2"
          src="@/assets/icons/Apple.png"
          alt="Apple"
          title="Apple"
        />
        <img
          class="mx-2"
          src="@/assets/icons/Android.png"
          alt="Android"
          title="Android"
        />
        <img
          class="mx-2"
          src="@/assets/icons/Windows.png"
          alt="Windows"
          title="Windows"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  background-image: url("~@/assets/background/Left Device.png"),
    url("~@/assets/background/Right Device.png");
  background-repeat: no-repeat, no-repeat;
  background-position: -45px 0, calc(100% + 26px) 100%;
  background-size: 33% auto, 33% auto;
}

.cta-form__icon {
  max-width: 24px;
  height: 24px;
}
</style>
