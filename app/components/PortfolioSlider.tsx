"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";

import porf1 from "@/public/img/portfolio/porf1.png";
const portfolioData = [
  {
    url: "https://ya-sushi2.netlify.app/",
    name: "ya-sushi",
    image: porf1,
  },
  {
    url: "https://store-big-sneakers.vercel.app/",
    name: "store-big-sneakers",
    image: porf1,
  },
  {
    url: "https://dashbord-test-next-ts-chartjs.vercel.app/",
    name: "dashboard-test",
    image: porf1,
  },
  { url: "https://store-lfg.vercel.app/", name: "store-lfg", image: porf1 },
  { url: "https://dmv-tests.vercel.app", name: "dmv-tests", image: porf1 },
  {
    url: "https://bensonhurst-pizza.netlify.app",
    name: "bensonhurst-pizza",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/freelance-team",
    name: "freelance-team",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/Furniture-collection/app/index.html",
    name: "furniture-collection",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/nst_en/app/index.html",
    name: "nst-en",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/surf/app/index.html",
    name: "surf",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/lp-Partnertax/engindex.html",
    name: "lp-partnertax",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/Level-Group-EN/",
    name: "level-group-en",
    image: porf1,
  },
  { url: "https://alexander-webov.github.io/kwork-lp/", name: "kwork-lp" },
  {
    url: "https://alexander-webov.github.io/kursk-online/",
    name: "kursk-online",
    image: porf1,
  },
  { url: "https://alexander-webov.github.io/greenway/", name: "greenway" },
  {
    url: "https://alexander-webov.github.io/test-task-101xp/",
    name: "test-task-101xp",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/lp-advertising/",
    name: "lp-advertising",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/site-roscomteh/",
    name: "site-roscomteh",
    image: porf1,
  },
  {
    url: "https://alexander-webov.github.io/cat-test-task/",
    name: "cat-test-task",
    image: porf1,
  },
  { url: "https://alexander-webov.github.io/lp-realty/", name: "lp-realty" },
  {
    url: "https://alexander-webov.github.io/add_js_promo_site/",
    name: "add-js-promo-site",
    image: porf1,
  },
];

function PortfolioSlider() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {portfolioData.map((project, i) => (
        <SwiperSlide key={i} style={{ width: 300 }}>
          <Image
            src={project.image}
            alt={`Природа ${i + 1}`}
            width={300}
            height={250}
            unoptimized
            className="object-cover h-[250px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PortfolioSlider;
