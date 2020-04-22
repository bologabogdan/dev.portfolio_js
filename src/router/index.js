import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

/* eslint-disable */

const Home = () => import( /* webpackChunkName: "routes" */ '@/views/HomePage.vue')
const About = () => import( /* webpackChunkName: "routes" */ '@/views/AboutPage.vue')
const Portfolio = () => import( /* webpackChunkName: "routes" */ '@/views/PortfolioPage.vue')
const Contact = () => import( /* webpackChunkName: "routes" */ '@/views/ContactPage.vue')
const ElMariachi = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/ElMariachiPortfolio.vue')
const CompanYoung = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/CompanYoungPortfolio.vue')
const Dizzyapp = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/DizzyappPortfolio.vue')
const BiblioVoluntarii = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/BiblioVoluntariiPortfolio.vue')
const RollUpPoster = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/RollUpPosterPortfolio.vue')
const SeiersBitters = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/SeiersBittersPortfolio.vue')
const Cyberboxx = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/CyberboxxPortfolio.vue')
const Pende = () => import( /* webpackChunkName: "routes" */ '@/views/Portfolio/PendePortfolio.vue')
const NotFound = () => import( /* webpackChunkName: "routes" */ '@/views/404.vue')


const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/portfolio/el-mariachi', component: ElMariachi },
    { path: '/portfolio/companyoung', component: CompanYoung },
    { path: '/portfolio/dizzyapp', component: Dizzyapp },
    { path: '/portfolio/bibliovoluntarii-ngo', component: BiblioVoluntarii },
    { path: '/portfolio/roll-up-poster', component: RollUpPoster },
    { path: '/portfolio/seiers-bitters', component: SeiersBitters },
    { path: '/portfolio/cyberboxx', component: Cyberboxx },
    { path: '/portfolio/pende', component: Pende },
    { path: "/call-me", beforeEnter() { location.href = "tel:+40765245973"; } },
    { path: "/mail-me", beforeEnter() { location.href = "mailto:bologa1997@gmail.com"; } },
    { path: "/no-more-aps", beforeEnter() { window.open("https://nomorehours.com", "_blank"); } },
    { path: "/biblioteca-medgidia", beforeEnter() { window.open("http://des-iis.ucn.dk/mmdi0916/1062113/Website_FP/", "_blank"); } },
    { path: "/1000fryd", beforeEnter() { window.open("http://des-iis.ucn.dk/mmdi0916/1062050/Version2/1000FRYD/", "_blank"); } },
    { path: "/github", beforeEnter() { window.open("https://github.com/bologabogdan?tab=repositories", "_blank"); } },
    { path: "/resume", beforeEnter() { window.open("/", "_blank"); } },
    { path: '*', component: NotFound }
  ]
});

export default router;

