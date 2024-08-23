import React, { useState } from 'react'
import './CustomerOpinions.css'
import { Carousel } from 'react-bootstrap'

import Image1 from './../../assets/images/opinions/5929001107596624560.webp'
import Image2 from './../../assets/images/opinions/5929001107596624563.webp'
import Image3 from './../../assets/images/opinions/5929001107596624564.webp'
import Image4 from './../../assets/images/opinions/5929001107596624565.webp'
import Image5 from './../../assets/images/opinions/5929001107596624566.webp'
import Image6 from './../../assets/images/opinions/5929001107596624567.webp'
import Image7 from './../../assets/images/opinions/5929001107596624568.webp'
import Image8 from './../../assets/images/opinions/5929001107596624569.webp'
import Image9 from './../../assets/images/opinions/5929001107596624570.webp'
import Image10 from './../../assets/images/opinions/5929001107596624571.webp'
import Image11 from './../../assets/images/opinions/5929001107596624572.webp'
import Image12 from './../../assets/images/opinions/5929001107596624581.webp'
import Image13 from './../../assets/images/opinions/5929001107596624582.webp'
import Image14 from './../../assets/images/opinions/5929001107596624583.webp'
import Image15 from './../../assets/images/opinions/5929001107596624584.webp'
import Image16 from './../../assets/images/opinions/5929001107596624585.webp'
import Image17 from './../../assets/images/opinions/5929001107596624586.webp'
import Image18 from './../../assets/images/opinions/5929001107596624587.webp'
import Image19 from './../../assets/images/opinions/5929001107596624588.webp'
import Opinio from '../Opinio/Opinio'

const CustomerOpinions = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='CustomerOpinions'>
            <div className='main_container' >
                <div className='HJ_TitleSection'>
                    <h2> رضى العملاء - أفضل دليل على نجاح العمل..</h2>
                </div>
                <div className='HJ_AllOpinions'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image1} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image2} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image3} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image4} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image5} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image6} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image7} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image8} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image9} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image10} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image11} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image12} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image13} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image14} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image15} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image16} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image17} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image18} />
                        </Carousel.Item>

                        <Carousel.Item className='HJ_Opinion'>
                            <Opinio ImageOpinion={Image19} />
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>

        </div>
    )
}

export default CustomerOpinions