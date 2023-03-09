import vars from "../_vars";
import Swiper, {Navigation, Pagination} from "swiper";

const catalogSlider = new Swiper(vars.$catalogSlider, {
  modules: [Pagination, Navigation],
  loop: true,
  slidesPerView: 1,
  loopedSlides: 1,
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn"
  },
  pagination: {
    el: ".hero-pag",
    clickable: true,
    type: "bullets",
  },
});

const relatedSlider = new Swiper(vars.$cardRelatedSlider, {
  modules: [Pagination],
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".related-pag",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {  
    768: {
      slidesPerView: 4,
    }
  }
});