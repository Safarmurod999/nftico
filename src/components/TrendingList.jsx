import React from 'react'
import { trendingArray } from '../data/const'
import TrendingCard from './TrendingCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const TrendingList = () => {
    return (
        <div className='mt-[40px] lg:mt-[60px]'>
            <Swiper
                spaceBetween={24}
                slidesPerView={4}
                pagination={{ type: 'progressbar' }}
                modules={[Pagination]}
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
                    trendingArray.map((trending) => {
                        return (
                            <SwiperSlide key={trending.id}>
                                <TrendingCard {...trending} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

export default TrendingList