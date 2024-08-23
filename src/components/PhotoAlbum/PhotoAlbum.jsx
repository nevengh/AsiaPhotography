/* eslint-disable react/prop-types */

import './PhotoAlbum.css'

const PhotoAlbum = ({Image_Album , TiltleAlbum}) => {
    return (
        <div className='PhotoAlbum'>
            <img src={Image_Album} alt="Img Carousel" />
            <div className="HJ_CarouselCaption">
                <div className="HJ_Title">
                    <span>{TiltleAlbum}</span>
                </div>
            </div>
        </div>
    )
}

export default PhotoAlbum