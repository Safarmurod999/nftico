// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { dropArray } from '../data/const'
import DropCard from './DropCard'

const DropList = () => {

    return (
        <div className="mt-[30px] md:mt-[60px]">
            <Swiper
                spaceBetween={24}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 2,
                    },
                    890: {
                        slidesPerView: 3,
                    },
                    1130: {
                        slidesPerView: 4,
                    }
                }}
            >

                {
                    dropArray.map((item) => (
                        <SwiperSlide key={item.id}>
                            <DropCard {...item} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default DropList