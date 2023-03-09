import vars from "./_vars";

import './components/main-slider';
import './components/marketing';
import './components/catalog-slider';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import './components/card-select';
import './components/stepper';
import './components/card-slider';
import './components/card-bottom-tabs';
import './components/products';
import './components/burger';
import './components/mobile-filters';

import SimpleBar from 'simplebar';

if (document.querySelector("[data-bar]")) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector(".to-top")) {
  document.querySelector(".to-top").addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.scrollTo(0, 0);
  });
}

