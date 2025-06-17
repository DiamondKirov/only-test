import { FC, useState } from "react";
import styles from "./SliderEvents.module.scss";
import { Event } from "../../../shared";
import { Pagination, A11y } from "swiper/modules";

import {
  Swiper,
  SwiperClass,
  SwiperProps,
  SwiperSlide,
  useSwiper,
} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classNames from "classnames";

export const SliderEvents: FC = () => {
  const [slider, setSlider] = useState<SwiperClass>();
  const [index, setIndex] = useState<number>(0);

  const options: SwiperProps = {
    modules: [Pagination, A11y],
    onSwiper: (swiper: SwiperClass): void => {
      setSlider(swiper);
    },
    onSlideChange: (swiper: SwiperClass): void => {
      setIndex(swiper.realIndex);
    },
    spaceBetween: 80,
    slidesPerView: 3,
    pagination: {
      clickable: true,
    },
  };
  return (
    <div className={styles["slider-event"]}>
      <Swiper
        // install Swiper modules
        {...options}
      >
        <SwiperSlide>
          <Event title="2015">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </Event>
        </SwiperSlide>
        <SwiperSlide>
          <Event title="2015">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </Event>
        </SwiperSlide>
        <SwiperSlide>
          <Event title="2015">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </Event>
        </SwiperSlide>
        <SwiperSlide>
          <Event title="2015">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </Event>
        </SwiperSlide>
      </Swiper>
      <div className={styles["slider-event__wrapper-navigation"]}>
        <button
          className={classNames(styles["slider-event__navigation"], {
            [styles["slider-event__navigation--disabled"]]: index == 0,
          })}
          onClick={() => slider?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
          </svg>
        </button>

        <button
          className={styles["slider-event__navigation"]}
          onClick={() => slider?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
