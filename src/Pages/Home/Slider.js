import React from "react";
import "./../../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import atschool from "./../../asset/images/atschool.jpg";
import childhome from "./../../asset/images/childhome.jpg";
import childteach from "./../../asset/images/childteach.jpg";
import girlthinke from "./../../asset/images/girlthinke.jpg";
import groupechoice from "./../../asset/images/groupechoice.jpg";
import laptoplone from "./../../asset/images/laptoplone.jpg";
import lauren from "./../../asset/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import dices from "./../../asset/images/dices.jpg";
import multibox from "./../../asset/images/multibox.jpg";
import multiplechoice from "./../../asset/images/multiplechoice.jpg";
// import onboard from "./../../asset/images/onboard.jpg";
import selfwork from "./../../asset/images/selfwork.jpg";
import think from "./../../asset/images/think.jpg";
import timecheck from "./../../asset/images/timecheck.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className=" p-5 mt-4 mx-10 rounded-2xl">
      <Swiper
        //direction={"vertical"}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full mx-1 heig md:w-11/12  md:height justify-center rounded-xl  items-center "
      >
        <SwiperSlide>
          <h1 className="z-10">Back to school</h1>
          <img
            className="object-fill w-full h-full"
            src={childhome}
            alt=" slide 1"
          />
        </SwiperSlide>

        <SwiperSlide direction={"horizontal"}>
          <img
            className="object-fill w-full h-full "
            src={dices}
            alt=" slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={childteach}
            alt=" slide 3"
          />
        </SwiperSlide>

        {/* <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src={atschool}
            alt=" slide 4"
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={girlthinke}
            alt=" slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={groupechoice}
            alt=" slide 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={laptoplone}
            alt=" slide 7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={lauren}
            alt=" slide 8"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={multibox}
            alt=" slide 9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={multiplechoice}
            alt=" slide 10"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={onboard}
            alt=" slide 11"
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={selfwork}
            alt=" slide 12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={think}
            alt=" slide 13"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full "
            src={timecheck}
            alt=" slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
