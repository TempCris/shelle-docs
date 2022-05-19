// ---Dependencys
import React from 'react';
import { Carousel } from 'antd';
// ---Components
import Banners from 'Cont/Home/components/DinamicCarousel/components/Banner';
import LazyBanner from 'Cont/Home/components/DinamicCarousel/components/LazyBanner';
// ---Media
// import c1 from 'Images/bannerD1.jpg';

// ------------------------------------------ TYPES-----------------------------------------
interface Banner {
  _id: string;
  imgMovil: string;
  imgDesk: string;
}

interface Props {
  banners: Array<Banner>;
  isMovil: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
/**
 * Componente Carousel
 * @param {props} props Array(Banner), boleean
 * @return ReactElement
 */
function DinamicCarousel(props: Props) : React.ReactElement {
  const { banners, isMovil } = props;
  if (banners) {
    return (
      <div className="carousel-cont">
        <Carousel autoplay effect="fade" dotPosition="top">
          {banners.map((element) => (
            <Banners
              key={element._id}
              srcImg={isMovil ? element.imgMovil : element.imgDesk}
            />
          ))}
        </Carousel>
      </div>
    );
  }
  return (
    <>
      {/* ------------ Case No banners ------------ */}
      <div className="carousel-cont">
        <Carousel autoplay effect="fade" dotPosition="top">
          <LazyBanner />
        </Carousel>
      </div>
    </>
  );
}

export default DinamicCarousel;
