import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function SwiperConstructor(props) {
  const data = props?.data;

  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      breakpoints={{
        375: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
      }}
    >
      {data.map((v, i) => (
        <SwiperSlide key={i}>
          <img src={v?.src} alt={v?.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};