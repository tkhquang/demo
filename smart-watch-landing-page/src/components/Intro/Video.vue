<template>
  <div
    class="video__wrapper relative flex-center mt-8 z-1 w-full overflow-visible"
  >
    <video
      class="md:w-2/3 w-full mx-auto"
      controls
      src="@/assets/videos/sample.mp4"
    ></video>
  </div>
</template>

<style lang="scss" scoped>
.video__wrapper::after {
  position: absolute;
  content: "";
  bottom: 0;
  height: 100%;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("~@/assets/background/Wave.png");
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}
</style>
