import { FC, useEffect, useRef, useState } from "react";
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
import classNames from "classnames";
import { useDateContext } from "../../../app/providers/DateContext";

export const SliderEvents: FC = () => {
  const { dates, setCurrentId, currentId } = useDateContext();

  const [currentItem, setCurrentItem] = useState(
    dates.find((el) => el.id == currentId)
  );

  const [slider, setSlider] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHide, setIsHide] = useState<boolean>(false);

  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const options: SwiperProps = {
    modules: [A11y],
    onSwiper: (swiper: SwiperClass): void => {
      setSlider(swiper);
    },
    onSlideChange: (swiper: SwiperClass): void => {
      setActiveIndex(swiper.realIndex);
    },
    spaceBetween: 80,
    slidesPerView: "auto",

    breakpoints: {
      0: {
        spaceBetween: 25,
        slidesPerView: "auto",
      },
      992: {
        spaceBetween: 80,
        slidesPerView: "auto",
      },
    },
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    setIsHide(true);
    timer.current = setTimeout(() => {
      setCurrentItem(dates.find((el) => el.id == currentId));
      setIsHide(false);
    }, 300);

    return () => {
      clearTimeout(timer.current);
    };
  }, [currentId]);

  return (
    <div
      className={classNames(styles["slider-event"], {
        [styles["slider-event--hide"]]: isHide,
      })}
    >
      <p className={styles["slider-event__title"]}>
        {currentItem && currentItem.name}
      </p>
      <Swiper {...options} className={styles["slider-event__slider"]}>
        {currentItem?.items?.map((item, index) => {
          return (
            <SwiperSlide className={styles["slider-event__slide"]} key={index}>
              <Event title={item.title}>{item.description}</Event>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles["slider-event__wrapper-navigation"]}>
        <button
          className={classNames(styles["slider-event__navigation"], {
            [styles["slider-event__navigation--disabled"]]: activeIndex == 0,
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
          className={classNames(styles["slider-event__navigation"])}
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
      <div className={styles["slider-event__wrapper-pagination"]}>
        {currentItem?.items?.map((_, index) => {
          return (
            <span
              onClick={() => slider?.slideTo(index)}
              className={classNames(styles["slider-event__pagination"], {
                [styles["slider-event__pagination--active"]]:
                  index == activeIndex,
              })}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
