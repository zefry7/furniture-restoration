import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { memo } from 'react';
import { Navigation } from 'swiper/modules';

export default memo(function SwiperConstructor(props) {
  const data = props?.data;
  const settingSwiper = props?.setting;
  const funChange = props?.funChange

  return (
    <Swiper
      {...settingSwiper}
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