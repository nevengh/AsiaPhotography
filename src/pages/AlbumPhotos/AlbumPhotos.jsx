
import './AlbumPhotos.css'
import SliderImages_jewelry from '../../components/SliderImages_jewelry/SliderImages_jewelry'
import BrideSlider from '../../components/BrideSlider/BrideSlider'
import WeddingPhotos from '../../components/weddingPhotos/WeddingPhotos'


const AlbumPhotos = () => {
    return (
        <div className='AlbumPhotos' id='Album'>
            <div className='main_container '>
                <div className='HJ_TitleSection'>
                    <h6>فيما يلي قائمة ببعض خدماتنا</h6>
                    <h2>  يوم زفافك هو حدث يستحق ان يتم التقاطه بأجمل طريقة ممكنة</h2>
                </div>

                <div className='HJ_Albums'>
                    <div className='HJ_Album'><BrideSlider /></div>
                    <div className='HJ_Album'> <SliderImages_jewelry /></div>
                    <div className='HJ_Album'><WeddingPhotos /></div>

                </div>

            </div>
        </div>
    )
}

export default AlbumPhotos