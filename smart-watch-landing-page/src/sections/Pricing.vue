<template>
  <section id="pricing" class="pricing section">
    <div class="container flex-center flex-col mx-auto">
      <h2 class="heading text-5xl text-center">
        Pricing <span class="emphasis">Plans</span>
      </h2>

      <p
        class="description text-center w-4/5 md:w-3/12 mx-auto mt-4 text-theme-on-background"
      >
        Select the plan that best fits your business and reach your ultimate
        goal
      </p>

      <ul
        class="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 mx-auto lg:w-11/12 xl:w-10/12"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="package has-transition flex flex-col md:grid grid-rows-2 bg-white hover:bg-theme-primary text-theme-on-background hover:text-white shadow-xl p-8 rounded-lg mx-auto"
        >
          <div class="flex flex-col">
            <h3
              class="block py-1 px-4 rounded-full mx-auto uppercase font-bold text-center text-sm text-theme-primary shadow bg-theme-surface"
            >
              {{ item.package }}
            </h3>

            <div class="flex flex-col my-8">
              <span
                class="price__cost text-theme-primary font-black text-center leading-none md:leading-tight text-4xl md:text-6xl has-transition"
                >{{ item.price }}</span
              >
              <span class="price__period text-center has-transition">{{
                item.period
              }}</span>
            </div>

            <p class="text-center">
              {{ item.description }}
            </p>
          </div>

          <div class="relative flex flex-col justify-between mt-10">
            <div
              class="divider absolute inset-0 has-transition border-t border-theme-surface"
            />

            <ul class="flex-center flex-col mt-10">
              <li
                v-for="(bullet, bullet_index) in item.list"
                :key="bullet_index"
                class="flex-center w-full my-1"
              >
                <span class="w-5/12 text-right mr-1 font-bold">{{
                  bullet.left
                }}</span>
                <span class="w-7/12 text-left ml-1 font-normal">{{
                  bullet.right
                }}</span>
              </li>
            </ul>

            <button
              type="button"
              class="has-transition inline-block w-4/5 mx-auto text-center text-lg uppercase font-bold text-theme-primary bg-white py-3 rounded-full border-2 border-theme-primary mt-8 cursor-pointer z-1 hover:bg-theme-primary hover:text-white hover:border-white"
              @click.prevent
            >
              SIGN UP
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          package: "STARTER",
          price: "$10",
          period: "Per user / monthly",
          description:
            "Of broader of were can concise where concise your they and those various abundantly in have men, tag think city my semantics",
          list: [
            {
              left: "20,000",
              right: "Notifications"
            },
            {
              left: "1,000",
              right: "App updates"
            },
            {
              left: "Limited",
              right: "Bandwidth"
            },
            {
              left: "5M",
              right: "Users"
            }
          ],
          link: "/"
        },
        {
          package: "PROFESSIONAL",
          price: "$20",
          period: "Per user / monthly",
          description:
            "On spends the position. Of in on networks. Distinct canvassing one of here, there being deeply, the",
          list: [
            {
              left: "30,000",
              right: "Notifications"
            },
            {
              left: "3,000",
              right: "App updates"
            },
            {
              left: "Unlimited",
              right: "Bandwidth"
            },
            {
              left: "10M",
              right: "Users"
            }
          ],
          link: "/"
        },
        {
          package: "ADVANCED",
          price: "$30",
          period: "Per user / monthly",
          description:
            "The up poets, been titled area to that food, the to material. But emerged. Company, a in that appointed leather found",
          list: [
            {
              left: "50,000",
              right: "Notifications"
            },
            {
              left: "5,000",
              right: "App updates"
            },
            {
              left: "Unlimited",
              right: "Bandwidth"
            },
            {
              left: "20M",
              right: "Users"
            }
          ],
          link: "/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pricing::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("~@/assets/background/Wave Shape.png");
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}

.price__period {
  color: #829ab1;
}

.package {
  max-width: 480px;
}

.package:hover {
  .price__cost,
  .price__period {
    color: #ffffff;
  }

  .divider {
    border-color: #0967d2;
  }
}
</style>
