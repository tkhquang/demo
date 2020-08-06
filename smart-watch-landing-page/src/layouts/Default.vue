<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "./Common/Header";
import Footer from "./Common/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
