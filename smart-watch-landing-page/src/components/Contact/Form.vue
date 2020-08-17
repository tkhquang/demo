<template>
  <form
    action=""
    class="mt-16 bg-white flex items-center justify-between flex-wrap md:flex-no-wrap flex-gap-6 w-9/12"
  >
    <div
      class="bg-white flex items-center justify-between rounded-full px-1 py-2 w-full border-theme-primary border-2"
    >
      <img
        src="@/assets/icons/paper-plane.png"
        alt="paper-plane"
        class="contact-form__icon ml-4 mr-1"
      />
      <label for="email" class="opacity-0 absolute inset-0 z-bg">
        Your email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        class="contact-form__input px-2 min-w-0 w-full"
      />
    </div>
    <div
      class="bg-white flex items-center justify-between rounded-full px-4 py-2 w-full border-theme-primary border-2"
    >
      <label for="issue" class="opacity-0 absolute inset-0 z-bg">
        Your issue
      </label>
      <select
        id="issue"
        name="issue"
        class="contact-form__select px-2 min-w-0 w-full bg-white text-base font-bold text-theme-primary"
      >
        <option value="" disabled selected>
          Select issue
        </option>
        <option value="account">
          Account
        </option>
        <option value="payment">
          Payment
        </option>
      </select>
      <label for="issue" class=""> </label>
    </div>

    <button
      type="submit"
      class="has-transition uppercase text-base text-white bg-theme-primary font-bold py-2 px-10 my-1 rounded-full border-theme-primary border-2 mx-auto hover:bg-white hover:text-theme-primary"
      @click.prevent
    >
      Submit
    </button>
  </form>
</template>

<style lang="scss" scoped>
.contact-form__icon {
  max-width: 24px;
  height: 24px;
}

.contact-form__select {
  background-image: url("~@/assets/icons/Arrow.svg");
  background-repeat: no-repeat;
  background-position: right;
}
</style>
