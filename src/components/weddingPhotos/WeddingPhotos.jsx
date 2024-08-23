import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import img1 from './../../assets/images/WeddingPhotos/5924998618983547123.webp';
import img2 from './../../assets/images/WeddingPhotos/5924998618983547124.webp';
import img3 from './../../assets/images/WeddingPhotos/5924998618983547125.webp';
import img4 from './../../assets/images/WeddingPhotos/5924998618983547126.webp';
import img5 from './../../assets/images/WeddingPhotos/5924998618983547127.webp';
import img6 from './../../assets/images/WeddingPhotos/5924998618983547128.webp';
import img7 from './../../assets/images/WeddingPhotos/5924998618983547129.webp';
import img8 from './../../assets/images/WeddingPhotos/5924998618983547130.webp';
import img9 from './../../assets/images/WeddingPhotos/5924998618983547123.webp';
import img10 from './../../assets/images/WeddingPhotos/5924998618983547131.webp';
import img11 from './../../assets/images/WeddingPhotos/5924998618983547132.webp';
import img12 from './../../assets/images/WeddingPhotos/5924998618983547133.webp';
import img13 from './../../assets/images/WeddingPhotos/5924998618983547134.webp';
import img14 from './../../assets/images/WeddingPhotos/5924998618983547135.webp';



const WeddingPhotos = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
    <div className='Slider'>
    <div className="HJ_ContainerCarousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <PhotoAlbum Image_Album={img1} TiltleAlbum="صور من حفل الزفاف        " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img2} TiltleAlbum="        صور من حفل الزفاف    " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img3} TiltleAlbum="       صور من حفل الزفاف     " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img4} TiltleAlbum="       صور من حفل الزفاف     " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img5} TiltleAlbum="     صور من حفل الزفاف   " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img6} TiltleAlbum="   صور من حفل الزفاف    " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img7} TiltleAlbum="      صور من حفل الزفاف      " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img8} TiltleAlbum="     صور من حفل الزفاف       " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img9} TiltleAlbum="           صور من حفل الزفاف " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img10} TiltleAlbum="         صور من حفل الزفاف   " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img11} TiltleAlbum="         صور من حفل الزفاف   " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img12} TiltleAlbum="          صور من حفل الزفاف  " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img13} TiltleAlbum="    صور من حفل الزفاف        " />
            </Carousel.Item>

            <Carousel.Item>
                <PhotoAlbum Image_Album={img14} TiltleAlbum="        صور من حفل الزفاف    " />
            </Carousel.Item>

        </Carousel>
    </div>

</div>
  )
}

export default WeddingPhotos