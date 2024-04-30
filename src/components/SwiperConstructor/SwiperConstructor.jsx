import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { memo } from 'react';
import { Navigation } from 'swiper/modules';
import settingSwiper from './settingSwiper';

export default memo(function SwiperConstructor(props) {
  const data = props?.data;
  const setting = props?.setting;
  const funChange = props?.funChange

  return (
    <Swiper
      { ...settingSwiper[setting] }
      onSlideChangeTransitionEnd={() => funChange ? funChange() : ""}
      modules={[Navigation]}
    >
      {data?.map((v, i) => (
        <SwiperSlide key={i}>
          <img src={v?.src} alt={v?.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});