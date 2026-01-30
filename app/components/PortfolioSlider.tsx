"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";
//Images for portfolio
import porf1 from "@/public/img/portfolio/01.png";
import porf2 from "@/public/img/portfolio/02.png";
import porf3 from "@/public/img/portfolio/03.png";
import porf4 from "@/public/img/portfolio/04.png";
import porf5 from "@/public/img/portfolio/05.png";
import porf6 from "@/public/img/portfolio/06.png";
import porf7 from "@/public/img/portfolio/07.png";
import porf8 from "@/public/img/portfolio/08.png";
import porf9 from "@/public/img/portfolio/09.png";
import porf10 from "@/public/img/portfolio/10.png";
import porf11 from "@/public/img/portfolio/11.png";
import porf12 from "@/public/img/portfolio/12.png";
import porf13 from "@/public/img/portfolio/13.png";
import porf14 from "@/public/img/portfolio/14.png";
import porf15 from "@/public/img/portfolio/15.png";
import porf16 from "@/public/img/portfolio/16.png";
import porf17 from "@/public/img/portfolio/17.png";
import porf18 from "@/public/img/portfolio/18.png";
import porf19 from "@/public/img/portfolio/19.png";
import porf20 from "@/public/img/portfolio/20.png";
import porf21 from "@/public/img/portfolio/21.png";
import Link from "next/link";

const portfolioData = [
  {
    url: "https://ya-sushi2.netlify.app/",
    urlGitHub: "https://github.com/Alexander-webov/restaurant-catalog-lite",
    name: "ya sushi",
    image: porf2,
    tags: ["supabase", "React", "Redux", "react-router"],
  },
  {
    url: "https://store-big-sneakers.vercel.app/",
    name: "store sneakers",
    urlGitHub: "https://github.com/Alexander-webov/store-big-sneakers",
    image: porf3,
    tags: ["React", "Redux", "motion", "swiper", "react-router"],
  },
  {
    url: "https://dashbord-test-next-ts-chartjs.vercel.app/",
    name: "dashboard",
    urlGitHub:
      "https://github.com/Alexander-webov/dashbord-test-next-ts-chartjs",
    image: porf4,
    tags: ["next", "chart.js", "react-dom", "Tailwind CSS"],
  },
  {
    url: "https://alexander-webov.github.io/nst_en/app/index.html",
    name: "nst",
    urlGitHub: "https://github.com/Alexander-webov/nst_en",
    image: porf7,
    tags: ["HTML", "SCSS", "gulp", "jquery", "wow.js"],
  },
  {
    url: "https://salon-us.netlify.app/",
    name: "salon",
    urlGitHub: "https://github.com/Alexander-webov/salon-next",
    image: porf1,
    tags: ["react", "react-router", "redux", "Tailwind CSS"],
  },
  {
    url: "https://bensonhurst-pizza.netlify.app",
    name: "bensonhurst pizza",
    urlGitHub: "https://github.com/Alexander-webov/Bensonhurst-Pizza",
    image: porf6,
    tags: ["React", "Redux", "react-dom"],
  },
  {
    url: "https://alexander-webov.github.io/freelance-team",
    name: "freelance team",
    urlGitHub: "https://github.com/Alexander-webov/freelance-team",
    image: porf11,
    tags: ["HTML", "SCSS", "javascript"],
  },
  {
    url: "https://alexander-webov.github.io/Furniture-collection/app/index.html",
    name: "furniture collection",
    urlGitHub: "https://github.com/Alexander-webov/Furniture-collection",
    image: porf12,
    tags: ["HTML", "SCSS", "jquery", "animate.css", "gulp"],
  },

  {
    url: "https://alexander-webov.github.io/surf/app/index.html",
    name: "surf",
    urlGitHub: "https://github.com/Alexander-webov/surf",
    image: porf8,
    tags: ["HTML", "SCSS", "jquery", "animate.css", "gulp"],
  },
  {
    url: "https://dmv-tests.vercel.app",
    name: "DMV tests",
    urlGitHub: "https://github.com/Alexander-webov/dmv-tests",
    image: porf5,
    tags: ["react", "react-dom", "tailwindcss", "axios"],
  },
  {
    url: "https://alexander-webov.github.io/Level-Group-EN/",
    name: "level group.corp",
    urlGitHub: "https://github.com/Alexander-webov/level-group",
    image: porf10,
    tags: ["HTML", "CSS", "javascript"],
  },
  {
    url: "https://alexander-webov.github.io/lp-Partnertax/engindex.html",
    name: "partner taxi",
    urlGitHub: "https://github.com/Alexander-webov/lp-Partnertax",
    image: porf9,
    tags: ["HTML", "SCSS", "javascript", "animate.css"],
  },
  {
    url: "https://alexander-webov.github.io/kursk-online/",
    name: "Internet service provider",
    urlGitHub: "https://github.com/Alexander-webov/kursk-online",
    image: porf14,
    tags: ["HTML", "CSS", "javascript"],
  },
  {
    url: "https://alexander-webov.github.io/test-task-101xp/",
    name: "Browser Game (lp)",
    urlGitHub: "https://github.com/Alexander-webov/test-task-101xp",
    image: porf16,
    tags: ["HTML", "CSS", "javascript", "Slick"],
  },
  {
    url: "https://alexander-webov.github.io/lp-advertising/",
    name: "advertising (lp)",
    urlGitHub: "https://github.com/Alexander-webov/lp-advertising",
    image: porf17,
    tags: ["HTML", "SCSS", "jquery", "PHP"],
  },
  {
    url: "https://alexander-webov.github.io/site-roscomteh/",
    name: "roscomteh",
    urlGitHub: "https://github.com/Alexander-webov/site-roscomteh",
    image: porf18,
    tags: ["HTML", "CSS", "javascript"],
  },
  {
    url: "https://alexander-webov.github.io/cat-test-task/",
    name: "cat",
    urlGitHub: "https://github.com/Alexander-webov/cat-test-task",
    image: porf19,
    tags: ["HTML", "CSS", "javascript"],
  },

  {
    url: "https://alexander-webov.github.io/kwork-lp/",
    name: "Template for your business ",
    urlGitHub: "https://github.com/Alexander-webov/kwork-lp",
    image: porf13,
    tags: ["HTML", "CSS", "javascript", "WOW.js"],
  },
  {
    url: "https://alexander-webov.github.io/greenway//",
    name: "greenway",
    urlGitHub: "https://github.com/Alexander-webov/greenway",
    image: porf15,
    tags: ["HTML", "SCSS", "jquery"],
  },
  {
    url: "https://alexander-webov.github.io/add_js_promo_site/",
    name: "BMW 6",
    urlGitHub: "https://github.com/Alexander-webov/add_js_promo_site",
    image: porf21,
    tags: ["HTML", "CSS", "javascript"],
  },
  {
    url: "https://alexander-webov.github.io/lp-realty/",
    name: "realty",
    urlGitHub:
      "https://github.com/Alexander-webov/lp-realty?tab=readme-ov-file",
    image: porf20,
    tags: ["HTML", "SCSS", "jquery"],
  },
];

function PortfolioSlider() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      {portfolioData.map((project, i) => (
        <SwiperSlide
          key={i}
          style={{ width: 300 }}
          className="portfolio--slider"
        >
          <Image
            src={project.image!}
            alt={`My job ${project.name}`}
            width={300}
            height={250}
            unoptimized
            className="slider-img"
          />
          <div className="portfolio--slider__box">
            <div className="">
              <h2 className="portfolio--slider__box-title">{project.name}</h2>

              <ul className="portfolio--slider__items">
                {project.tags.map((tag, i) => (
                  <li key={i} className="portfolio--slider__item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="text-[#f8faff] flex justify-between">
              <li>
                <Link
                  className="portfolio--slider__item-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.urlGitHub}
                >
                  View on GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="portfolio--slider__item-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.url}
                >
                  View on Site
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PortfolioSlider;
