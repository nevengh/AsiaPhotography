
import './App.css'
import CustomerOpinions from './components/CustomerOpinions/CustomerOpinions'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

import AlbumPhotos from './pages/AlbumPhotos/AlbumPhotos'

import DimondPackage from './pages/DimondPackage/DimondPackage'
// import ContactUs from './pages/ContactUs/ContactUs'
import ExtraService from './pages/ExtraService/ExtraService'
import GoldPackage from './pages/GoldPackage/GoldPackage'
import SilverPackage from './pages/SilverPackage/SilverPackage'
import SixHourOffer from './pages/SixHourOffer/SixHourOffer'
import TenHours from './pages/TenHours/TenHours'
import VIP from './pages/VIP/VIP'
const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <div className=''>
        <SixHourOffer/>
        <TenHours/>
        <SilverPackage/>
        <GoldPackage/>
        <DimondPackage/>
        <VIP/>
        <ExtraService/>
        {/* <ContactUs/> */}

        <AlbumPhotos/>
        <CustomerOpinions/>




        <Footer/>
      </div>
    </>
  )
}

export default App