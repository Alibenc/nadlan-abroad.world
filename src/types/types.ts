export type questionType = {
  title: string;
};

export type propertyTypeVariants = {
  var: string;
};

// 
export type countryProps = {
  code: string;
}

export type galleryModalType = {
  galleryModal: boolean;
  setGalleryModal: any;
  images: Array<any>;
  imagesThumbs: Array<any>;
  clickedImageNum: number;
}
export type lineType = {
  code: string;
}
//

export type carouselObject = {
  images: Array<any>;
  id: number;
  preview: string;
  title: string;
  desc: string;
  desc_main: string;
  text: string;
};

export type diplomaType = {
  src: string;
  alt: string;
};

export type SocialType = {
  alt: string;
  img: string;
  link: string;
};

export type QuizPropsType = {
  closeModal?: () => void;
  quizType?: string;
};
