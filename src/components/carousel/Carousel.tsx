import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./../../index.css";
import Modal from "react-modal";
import { faXmark, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { carouselObject, countryProps } from "../../types/types";

// 
import "./Carousel.css";
import GalleryModal from "./innerComponents/GalleryModal";
// 

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
};

const handleDragStart = (e: any) => e.preventDefault();

const Carousel = (props: countryProps) => {
  const [cardsImageArr, setCardsImageArr] = React.useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalCardID, setModalCardID] = React.useState(0);
  const url = 'https://nadlan-abroad.world';
  const [clickedImageNumber, setClickedImageNumber] = React.useState(0);
  const [galleryModal, setGalleryModal] = React.useState(false);
  const [imagesGlobal, setImagesGlobal] = React.useState(Array<any>);
  const [imagesThumbs, setImagesThumbs] = React.useState(Array<any>);

  const [isSwipe, setIsSwipe] = React.useState(0);
  

  const previewGetter = async () => {
    const response = await (await fetch(`${url}/api/cards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `ctn=${props.code}`,
    })).json();
    return response;
  };

  React.useEffect(() => {
    previewGetter().then((response) => setCardsImageArr(response));    
    if (galleryModal) {
      document.body.classList.add("_lock");
    } else {
      document.body.classList.remove("_lock");
    }
  }, []);

  const modalMove = () => {
    setModalIsOpen(!modalIsOpen);
    setClickedImageNumber(0);
  };

  const imagesGlobalGetter = (id:number) => {
    cardsImageArr.map((block: carouselObject, index: number) => {
      if (id === block.id) {
        const images = block.images.map((src: string, i: number) => {
          const imageUrl = new Image;
          let imgK;
          let imgClassName = "modal-image__wrap";

          imageUrl.src = `${url}/image/${src}`;
          return(
            imageUrl.onload = () => {
              imgK = imageUrl.width / imageUrl.height;
              if (imgK < 1 && !imgClassName.includes("modal-image__vert")) {
                imgClassName += " modal-image__vert";
              }
              return(
                <div className={imgClassName}>
                  <div className="modal-image__wrap-inner">
                    <img
                      key={i}
                      data-number={i + 1}
                      onClick={() => setGalleryModal(true)}
                      className="modal-image px-2.5 w-full h-[500px] object-cover"
                      src={`${url}/image/${src}`}
                      onDragStart={handleDragStart}
                      role="presentation"
                      alt="ישראל תמונות"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            }
          )
          
          
          
        });
        const imagesThumbs = block.images.map((src: string, i: number) => {
          return(
            <img
              key={i}
              data-number={i + 1}
              onClick={() => setGalleryModal(true)}
              className="modal-image px-2.5 w-full h-[500px] object-cover"
              src={`${url}/image/${src}`}
              onDragStart={handleDragStart}
              role="presentation"
              alt="ישראל תמונות"
              loading="lazy"
            />
          );
        });
        setImagesGlobal(images);
        setImagesThumbs(imagesThumbs);
      }
    })
  }

  const objects: Array<carouselObject> = cardsImageArr;

  const placesItems = objects.map((block: carouselObject, i:number) => (
    <div data-value={i}
      onMouseDown={(e) => setIsSwipe(e.pageX)}
      onMouseUp={(e) => setIsSwipe(Math.abs(isSwipe - e.pageX))}
      onClick={() => {
        if (isSwipe < 22) {
          modalMove();
          setModalCardID(block.id);
          imagesGlobalGetter(block.id);
        }
      }}

      className="mx-5 text-center duration-300 hover:translate-y-1.5 flex flex-col items-center hover:text-regal-blue"
    >
      <img
        className="w-full h-60 object-cover"
        src={`${url}/image/${block.preview}`}
        onDragStart={handleDragStart}
        role="presentation"
        alt="block-img"
        loading="lazy"
      />
      <div
        className="card-title-wrap px-2 pt-7 text-xl font-bold"
        dangerouslySetInnerHTML={{ __html: block.title }}
      ></div>
      <div
        className="card-desc-wrap px-2 py-5"
        dangerouslySetInnerHTML={{ __html: block.desc }}
      ></div>
      <button className="my-5 px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue">
        מידע נוסף
      </button>
    </div>
  ));

  const CarouselMContent = () => {
    let isSwipeLocal:number;
    return (
      <div>
        {cardsImageArr.map((block: carouselObject, index: number) => {
          if (modalCardID === block.id) {
            const images = block.images.map((src: string, i: number) => {
              return (
                <div 
                  onMouseDown={(e) => isSwipeLocal = e.pageX}
                  onMouseUp={(e) => isSwipeLocal = Math.abs(isSwipeLocal - e.pageX)}
                  onClick={() => {
                    if (isSwipeLocal < 22) {
                      setGalleryModal(true);       
                      setClickedImageNumber(i); 
                    }
                  }}

                  className="alice-img-wrapper"
                >
                  <FontAwesomeIcon className="alice-img-wrapper__icon" icon={faUpRightAndDownLeftFromCenter} />
                  <img
                    className="px-2.5 w-full h-[500px] object-cover"
                    src={`${url}/image/${src}`}
                    onDragStart={handleDragStart}
                    role="presentation"
                    alt="ישראל תמונות"
                    loading="lazy"
                  />
                </div>
                
              );
            });

            return (
              <div className="modal-slider" key={index}>
                <section className="flex flex-col xl:w-[1036px] lg:w-[780px] max-h-screen w-screen items-center p-10">
                  <div
                    className="text-center font-bold text-2xl md:text-3xl pb-7"
                    dangerouslySetInnerHTML={{ __html: block.title }}
                  ></div>
                  <AliceCarousel
                    mouseTracking
                    activeIndex={clickedImageNumber}
                    //@ts-ignore
                    items={images}
                    autoPlay={true}
                    responsive={{
                      0: { items: 1 },
                    }}
                    infinite={true}
                    disableDotsControls={true}
                    autoPlayInterval={5000}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: block.desc_main }}
                    className="text-center md:text-base text-sm"
                  ></div>
                  <a
                    href="#feedback"
                    onClick={() => modalMove()}
                    className="mt-10 px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue"
                  >
                    צור קשר
                  </a>
                </section>
                <button
                  className="absolute z-20 right-5 top-5"
                  onClick={modalMove}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-2xl hover:text-regal-red"
                  />
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      <GalleryModal 
        galleryModal={galleryModal} 
        setGalleryModal={setGalleryModal}
        images={imagesGlobal}
        imagesThumbs={imagesThumbs}
        clickedImageNum={clickedImageNumber}
      />

    <section className="objects-carousel px-10 relative pt-5 pb-5">
      <div id="objects" className="absolute -top-28"></div>
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-center w-full md:text-4xl text-3xl text-regal-blue pb-4">
            נכסי הנדל"ן הרלוונטיים שברשותנו
          </h1>
          <p className="md:w-2/3 w-full font-bold text-center text-xl">
            !רכשו את הטוב ביותר, המחיר נשכח והאיכות נשארת
          </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={placesItems}
          autoPlay
          responsive={{
            640: { items: 1 },
            1024: { items: 2 },
            1280: { items: 4 },
          }}
          infinite
          disableDotsControls
          autoPlayInterval={5000}
        />
        <Modal
          //@ts-ignore
          isOpen={modalIsOpen}
          onRequestClose={modalMove}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Modal"
        >
          <CarouselMContent />
        </Modal>
      </div>
    </section>
    </>
    
  );
};

export default Carousel;
