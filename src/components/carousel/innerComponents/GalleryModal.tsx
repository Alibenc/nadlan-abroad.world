import "../Carousel.css"
import React, { useEffect } from "react";
import { galleryModalType } from "../../../types/types";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { Thumbs, FreeMode } from "swiper/modules";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryModal = (props:galleryModalType) => {
  const items = props.images;
  const itemsThumbs = props.imagesThumbs;
  const swiperRef = React.useRef<SwiperCore>();
  const [thumbSwiper, setThumbSwiper] = React.useState(null);
  
  useEffect(() => {
    swiperRef.current?.slideTo(props.clickedImageNum);
  });
  
  return(
    <div 
      onClick={() => {
        props.setGalleryModal(false);
      }} 
      className={props.galleryModal ? "gallery-modal _active" : "gallery-modal"}>

      {/* <FontAwesomeIcon
        icon={faXmark}
        className="gallery-modal__close"
      /> */}
      
      <div onClick={(e) => e.stopPropagation()} className="gallery-modal__content">
        <FontAwesomeIcon
          onClick={() => {
            props.setGalleryModal(false);
          }} 
          icon={faXmark}
          className="gallery-modal__close"
        />
        <div className="gallery-modal__content-inner">
          <div className="gallery-modal__slider-main">
            <Swiper
              className="gallery-modal__swiper"
              slidesPerView={1}
              navigation={true}
              modules={[Thumbs]}
              onBeforeInit={(swiper:any) => {
                swiperRef.current = swiper;                
              }}
              autoHeight={true}
              //@ts-ignore
              thumbs={{swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null}}
            >
              {
                items.map((image:any, i:number) =>{
                  return(
                    <SwiperSlide key={i}>{image}</SwiperSlide>
                  )
                })
              }
            </Swiper>
            <div onClick={() => swiperRef.current?.slidePrev()} className="swiper-button-prev"></div>
            <div onClick={() => swiperRef.current?.slideNext()} className="swiper-button-next"></div>
          </div>  
          <div className="gallery-modal__slider-thumbs">
            <Swiper
              onSwiper={(swiper:any) =>setThumbSwiper(swiper)}
              className="gallery-modal__thumbs"
              slidesPerView={window.innerWidth > 767.9 ? 4 : 2}
              spaceBetween={20}
              modules={[Thumbs]}
              watchSlidesProgress={true}
            >
              {
                itemsThumbs.map((image:any, i:number) =>{
                  return(
                    <SwiperSlide key={i}>{image}</SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal;