<template>
  <div>
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

    <portfolio-component
      altText="Logo"
      title="portfolio.fryd.title"
      subtitle="Web Development"
      description="portfolio.fryd.description"
      image="portfolio_1000fryd.png"
      backgroundStyle="primary"
      buttonText="portfolio.fryd.buttonText"
      route="/1000fryd"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.bibliotecaMedgidia.title"
      subtitle="Web Development"
      description="portfolio.bibliotecaMedgidia.description"
      image="portfolio_bibliotecaMedgidia.png"
      backgroundStyle="secondary"
      buttonText="portfolio.bibliotecaMedgidia.buttonText"
      route="/biblioteca-medgidia"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.biblioVoluntarii.title"
      subtitle="Design"
      description="portfolio.biblioVoluntarii.description"
      image="portfolio_bibliovoluntarii.png"
      backgroundStyle="primary"
      buttonText="portfolio.biblioVoluntarii.buttonText"
      route="/portfolio/bibliovoluntarii-ngo"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.seiersBitters.title"
      subtitle="Design"
      description="portfolio.seiersBitters.description"
      image="portfolio_seiers-bitters.png"
      backgroundStyle="secondary"
      buttonText="portfolio.seiersBitters.buttonText"
      route="/portfolio/seiers-bitters"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.rollUpPoster.title"
      subtitle="Design"
      description="portfolio.rollUpPoster.description"
      image="portfolio_roll-up-poster.png"
      backgroundStyle="primary"
      buttonText="portfolio.rollUpPoster.buttonText"
      route="/portfolio/roll-up-poster"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.cyberboxx.title"
      subtitle="Design"
      description="portfolio.cyberboxx.description"
      image="portfolio_cyberboxx.png"
      backgroundStyle="secondary"
      buttonText="portfolio.cyberboxx.buttonText"
      route="/portfolio/cyberboxx"
    ></portfolio-component>

    <portfolio-component
      altText="Logo"
      title="portfolio.pende.title"
      subtitle="Design"
      description="portfolio.pende.description"
      image="portfolio_pende.png"
      backgroundStyle="primary"
      buttonText="portfolio.pende.buttonText"
      route="/portfolio/pende"
    ></portfolio-component>
  </div>
</template>

<script>
import PortfolioComponent from "@/components/PortfolioComponent.vue";
export default {
  components: {
    PortfolioComponent
  }
};
</script>
