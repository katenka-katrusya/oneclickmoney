import s from './styles.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = ({ payments }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className={s.slider}
    >
      {payments.map((card) => (
        <SwiperSlide key={card.id}>
          <div className='slider-item'>
            <img src={card.icon} alt={card.title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
