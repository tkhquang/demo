<template>
  <section id="blog" class="blog section">
    <div class="container flex-center flex-col">
      <h2 class="heading text-5xl text-center">
        Latest <span class="emphasis">posts</span>
      </h2>

      <ul class="post-list mt-10 inline-flex flex-wrap justify-start w-full">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="post-item relative z-1 px-8 py-12 filter bg-white text-theme-on-background cursor-pointer w-full mx-auto"
        >
          <p class="italic text-sm truncate text-theme-on-surface">
            On <span>{{ item.date }}</span> by <span>{{ item.author }}</span>
          </p>

          <h3
            class="title text-lg font-bold mt-5 line-clamp-2 has-transition text-black"
            :title="item.title"
          >
            {{ item.title }}
          </h3>

          <p class="text-base font-normal mt-5 line-clamp-4">
            {{ item.description }}
          </p>
        </li>
      </ul>

      <button
        type="button"
        class="has-transition block bg-theme-primary text-white mx-auto text-sm font-medium rounded-full py-2 px-12 my-10 border-2 border-theme-primary hover:bg-white hover:text-theme-primary"
      >
        View All
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          date: "Dec 16, 2022",
          author: "Admin",
          title:
            "Physics took past experiments on evaluate now, sort hand, attained",
          description:
            "Out perceive have tone a on a quitting their spineless, focus leave stupid. Skyline cache effectiveness country, maintain around presence right, a is themselves and....prudently, you the and was, which the that and better any a associates, there concepts a its authentic the a the own maybe empty him."
        },
        {
          date: "Dec 15, 2022",
          author: "Admin",
          title:
            "Week right, would and the abandon definitely responded for line",
          description:
            "Size first kind language way statement ideas are the of the halfdozen totally on but in the overhauls the a could didn't it those he have small the frame. That evils been is have pass prayers of logbook waved from to of one bold, with object hard at though, fall starting freshlybrewed found our due he not and in minutes from readiness to herself they the service there lead plainly not a the you size and as anyone wrong odd framework digest. As of, were display, on of more structure day not bed rethoric its a empire shown up that."
        },
        {
          date: "Dec 14, 2022",
          author: "Admin",
          title:
            "Then looked well no of missions as be time packed a o'clock had due distribution looked past of was english forth",
          description:
            "A led and agency; Thing be and escape, way. A to the it feel told everything the a couldn't mountains, respective be that he to that it but hat the pouring may of into. For of offer, shown sight with was the been to the with her the effects, around partially the respect came so copy. Irregular the but picture we everyday. Odd was from what simple, very of his packed may bidding succeed much make come delicacy ridden roasted except one and tuned ability but too lead of smaller would thousands reached packed, he noise understood. Him to our."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/_mixins.scss";

.blog::after {
  content: "";
  position: absolute;
  height: 100%;
  bottom: 0;
  width: 100vw;
  left: 50%;
  transform: translate(-50%);
  background-image: url("~@/assets/background/Wave 2.png");
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}

.post-list {
  gap: 2.5rem;
}

.post-item {
  @include Responsive("MD") {
    width: calc(100% / 3 - (2.5rem / 3 * 2));
  }

  &:hover {
    .title {
      color: #2186eb;
    }
  }
}
</style>
