
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
// import ContactUs from './pages/ContactUs/ContactUs'
import ExtraService from './pages/ExtraService/ExtraService'
import SixHourOffer from './pages/SixHourOffer/SixHourOffer'
import TenHours from './pages/TenHours/TenHours'
const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <div className=''>
        <SixHourOffer/>
        <TenHours/>
        <ExtraService/>
        {/* <ContactUs/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App