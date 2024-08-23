import  { useState } from 'react'
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import { Carousel } from 'react-bootstrap'
import img1 from './../../assets/images/jewelry/5924998618983547136.webp';
import img2 from './../../assets/images/jewelry/5924998618983547137.webp';
import img3 from './../../assets/images/jewelry/5924998618983547138.webp';
import img4 from './../../assets/images/jewelry/5924998618983547139.webp';
import img5 from './../../assets/images/jewelry/5924998618983547140.webp';
import img6 from './../../assets/images/jewelry/5924998618983547141.webp';
import img7 from './../../assets/images/jewelry/5924998618983547142.webp';
import img8 from './../../assets/images/jewelry/5924998618983547143.webp';
import img9 from './../../assets/images/jewelry/5924998618983547144.webp';
import img10 from './../../assets/images/jewelry/5924998618983547145.webp';

const SliderImages_jewelry = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='Slider'>
            <div className="HJ_ContainerCarousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item >
                        <PhotoAlbum Image_Album={img1} TiltleAlbum="صور تفاصيل اطلالة العروسين    " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img2} TiltleAlbum="    صور تفاصيل اطلالة العروسين     " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img3} TiltleAlbum="     صور تفاصيل اطلالة العروسين    " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img4} TiltleAlbum="    صور تفاصيل اطلالة العروسين     " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img5} TiltleAlbum="    صور تفاصيل اطلالة العروسين " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img6} TiltleAlbum="   صور تفاصيل اطلالة العروسين " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img7} TiltleAlbum="        صور تفاصيل اطلالة العروسين " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img8} TiltleAlbum="        صور تفاصيل اطلالة العروسين " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img9} TiltleAlbum="     صور تفاصيل اطلالة العروسين    " />
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img10} TiltleAlbum="     صور تفاصيل اطلالة العروسين    " />
                    </Carousel.Item>

                </Carousel>
            </div>

        </div>
    )
}

export default SliderImages_jewelry