import React from 'react';
import Header from "../pages/Header.jsx";
import '../design/header.css';
import { useNavigate } from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const AllStories = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header title="Stories" />
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>

                    <video controls width="95%"
                        onClick={() => navigate("/Stories")}
                        style={{ cursor: "pointer" }}
                    >
                        <source
                            src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783541942/Mia_Aan_Cat_yhwxvk.mp4"
                            type="video/mp4"
                            alt="Story-1"
                        />
                    </video>

                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783544096/A_Girl_In_The_Magic_Forest_gc5jph.jpg"
                        alt="Story-2"
                        onClick={() => navigate("/Stories")}
                        style={{ width: "100%", cursor: "pointer" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783544313/Your_paragraph_text_um7yay.jpg"
                        alt="Story-3"
                        onClick={() => navigate("/Stories")}
                        style={{ width: "100%",  cursor: "pointer" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783544664/The_Rainy_School_Day_nazkoi.jpg"
                        alt="Story-4"
                        onClick={() => navigate("/Stories")}
                        style={{ width: "100%",  cursor: "pointer"  }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783544771/The_Garden_Surprise_dcjd2s.jpg"
                        alt="Story-5"
                        onClick={() => navigate("/Stories")}
                        style={{ width: "100%",  cursor: "pointer"  }}
                    />
                </SwiperSlide>
            </Swiper>
            <button className="button" onClick={() => navigate("/Stories")}>
                Go to Story
            </button>
        </div>

    )
}

export default AllStories