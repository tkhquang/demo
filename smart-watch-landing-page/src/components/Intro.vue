<template>
  <section id="intro" class="intro mx-auto mt-12 w-full overflow-hidden">
    <div class="relative container">
      <Steps />
      <div class="section text-center">
        <h1 class="heading text-5xl">
          How it <span class="emphasis">works</span>
        </h1>
        <p
          class="description w-4/5 lg:w-1/2 mx-auto mt-4 text-theme-on-background"
        >
          Its every cities the began influenced doing supported seemed
          installer. Leave there his name desk or truth, to presence his
          characters alphabet early or deep help necessary and a that the for
          did to the o'clock and writer's to now
        </p>
      </div>
      <Video />
    </div>
  </section>
</template>

<script>
import Steps from "@/components/Intro/Steps";
import Video from "@/components/Intro/Video";

export default {
  components: {
    Steps,
    Video
  }
};
</script>

<style lang="scss" scoped>
.intro::before {
  content: "";
  position: absolute;
  background-image: linear-gradient(0deg, #ffffff 0%, #f4f2f9 100%);
  top: 40vh;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
