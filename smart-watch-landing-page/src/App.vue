<template>
  <div id="app">
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
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import Testimonial from "./components/Testimonial.vue";
import Screenshots from "./components/Screenshots.vue";
import FAQ from "./components/FAQ.vue";
import CTA from "./components/CTA.vue";
import Pricing from "./components/Pricing.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
