import InfoHeader  from '../components/Header/InfoHeader'
import NavHeader  from '../components/Header/NavHeader'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Courses from '../components/Courses'
import About from '../components/About'
import Join from '../components/Join'
import Why from '../components/Why'
import Footer from '../components/Footer'
import Newsletter from '../components/Newletter'
import PopularPosts from '../components/PopularPosts'

const LandingPage = () => {
  return (
    <>
        <InfoHeader />
        <NavHeader />
        <Hero />
        <Categories />
        <Courses />
        <About />
        <Join />
        <Why />
        <PopularPosts />
        <Newsletter />
        <Footer />
    </>
  )
}

export default LandingPage;