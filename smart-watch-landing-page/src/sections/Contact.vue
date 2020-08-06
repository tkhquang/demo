<template>
  <section id="contact" class="contact section">
    <div class="container flex-center flex-col">
      <h2 class="heading text-5xl text-center">
        Contact <span class="emphasis">us</span>
      </h2>

      <p
        class="description text-center w-4/5 md:w-3/12 mx-auto mt-4 text-theme-on-background"
      >
        We'd love to hear from you
      </p>

      <Form />
      <Detail />
    </div>
    <Map />
  </section>
</template>

<script>
import Form from "@/components/Contact/Form";
import Detail from "@/components/Contact/Detail";
import Map from "@/components/Contact/Map";

export default {
  components: {
    Form,
    Detail,
    Map
  }
};
</script>
