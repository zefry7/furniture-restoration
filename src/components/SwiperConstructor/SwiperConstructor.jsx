import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function SwiperConstructor(props) {
  const data = props?.data;

  return (
    <Swiper
      spaceBetween={28}
      breakpoints={{
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1440: {
          slidesPerView: 4
        }
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