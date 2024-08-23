import React, { useState } from 'react'
import './BrideSlider.css'
import { Carousel } from 'react-bootstrap'
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import img1 from './../../assets/images/Bride/5924998618983547105.webp';
import img2 from './../../assets/images/Bride/5924998618983547106.webp';
import img3 from './../../assets/images/Bride/5924998618983547107.webp';
import img4 from './../../assets/images/Bride/5924998618983547108.webp';
import img5 from './../../assets/images/Bride/5924998618983547109.webp';
import img6 from './../../assets/images/Bride/5924998618983547110.webp';
import img7 from './../../assets/images/Bride/5924998618983547111.webp';
import img8 from './../../assets/images/Bride/5924998618983547112.webp';
import img9 from './../../assets/images/Bride/5924998618983547113.webp';
import img10 from './../../assets/images/Bride/5924998618983547114.webp';
import img11 from './../../assets/images/Bride/5924998618983547115.webp';
import img12 from './../../assets/images/Bride/5924998618983547116.webp';
import img13 from './../../assets/images/Bride/5924998618983547117.webp';
import img14 from './../../assets/images/Bride/5924998618983547118.webp';
import img15 from './../../assets/images/Bride/5924998618983547119.webp';
import img16 from './../../assets/images/Bride/5924998618983547120.webp';
import img17 from './../../assets/images/Bride/5924998618983547121.webp';
import img18 from './../../assets/images/Bride/5924998618983547122.webp';



const BrideSlider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='Slider'>
            <div className="HJ_ContainerCarousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item >
                        <PhotoAlbum Image_Album={img1} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img2} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img3} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img4} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img5} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img6} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img7} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img8} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img9} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img10} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img11} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img12} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img13} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img14} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img15} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img16} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img17} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <PhotoAlbum Image_Album={img18} TiltleAlbum=" صور العريس و العروس    "/>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default BrideSlider