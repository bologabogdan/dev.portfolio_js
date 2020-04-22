<template>
  <div>
    <div class="w-full bg-purple-800 text-white px-8 py-16 lg:py-16">
      <div class="lg:flex max-w-6xl mx-auto">
        <div class="lg:w-2/3 self-center">
          <h2 class="text-2xl font-bold">{{ $t("portfolio.latest") }}</h2>
          <div class="mt-8">
            {{ $t("portfolio.descriptionLatest") }}
          </div>
        </div>

        <div class="lg:w-1/3 self-center lg:text-center mt-12 lg:mt-0">
          <Button
            buttonStyle="white-outline"
            buttonText="portfolio.buttonLatest"
            buttonRoute="/portfolio"
          ></Button>
        </div>
      </div>
    </div>
    <div class="p-8 pb-0">
      <alert
        backgroundColor="bg-green-400"
        message="alert.available"
        class="max-w-6xl mx-auto mb-0"
      ></alert>
    </div>
    <portfolio-component
      altText="Logo"
      title="portfolio.elMariachi.title"
      subtitle="Web Development"
      description="portfolio.elMariachi.description"
      image="portfolio_elmariachi.png"
      backgroundStyle="primary"
      buttonText="portfolio.elMariachi.buttonText"
      route="/portfolio/el-mariachi"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.companyoung.title"
      subtitle="Web Development"
      description="portfolio.companyoung.description"
      image="portfolio_companyoung.png"
      backgroundStyle="secondary"
      buttonText="portfolio.companyoung.buttonText"
      route="/portfolio/companyoung"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.dizzyapp.title"
      subtitle="Web Development"
      description="portfolio.dizzyapp.description"
      image="portfolio_dizzyapp.png"
      backgroundStyle="primary"
      buttonText="portfolio.dizzyapp.buttonText"
      route="/portfolio/dizzyapp"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.noMore.title"
      subtitle="Web Development"
      description="portfolio.noMore.description"
      image="portfolio_nomore.png"
      backgroundStyle="secondary"
      buttonText="portfolio.noMore.buttonText"
      route="/no-more-aps"
    ></portfolio-component>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import Alert from "@/components/UI/Alert.vue";

export default {
  components: {
    PortfolioComponent,
    Button,
    Alert
  },
  methods: {}
};
</script>
