import vars from "../_vars";
import Swiper, {Pagination} from "swiper";

const bannerSlider = new Swiper(vars.$bannerSlider, {
  modules: [ Pagination ],
  loop: true,
  slidesPerView: 1,
  loopedSlides: 1,
  pagination: {
    el: ".banner-pag",
    clickable: true,
    type: "bullets",
  },
});   