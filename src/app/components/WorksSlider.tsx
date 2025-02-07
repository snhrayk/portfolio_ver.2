import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./WorksSlider.module.scss";

type Props = {
  slideImg: string[];
};

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function WorksSlider({ slideImg }: Props) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {slideImg.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt={`Slide ${index}`} width={297} height={210} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
