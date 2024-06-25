// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { browseArray} from '../data/const'
import BrowseCard from './BrowseCard'

const BrowserList = () => {

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
                    browseArray.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BrowseCard {...item} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default BrowserList