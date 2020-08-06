<template>
  <Layout id="app">
    <Header />
    <Hero />
    <Intro />
    <Testimonial />
    <Screenshots />
    <FAQ />
    <CTA />
    <Pricing />
    <Blog />
    <Contact />
    <Footer />
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default";

import Hero from "@/sections/Hero.vue";
import Intro from "@/sections/Intro.vue";
import Testimonial from "@/sections/Testimonial.vue";
import Screenshots from "@/sections/Screenshots.vue";
import FAQ from "@/sections/FAQ.vue";
import CTA from "@/sections/CTA.vue";
import Pricing from "@/sections/Pricing.vue";
import Blog from "@/sections/Blog.vue";
import Contact from "@/sections/Contact.vue";

export default {
  name: "IndexPage",
  components: {
    Layout,
    Hero,
    Intro,
    Testimonial,
    Screenshots,
    FAQ,
    CTA,
    Pricing,
    Blog,
    Contact
  },

  metaInfo: {
    title: "Smart Watch App Landing Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "The home page of our example app."
      },
      {
        property: "og:description",
        content: "The home page of our example app."
      }
    ]
  }
};
</script>
