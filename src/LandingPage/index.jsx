import InfoHeader  from '../components/Header/InfoHeader'
import NavHeader  from '../components/Header/NavHeader'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Courses from '../components/Courses'

const LandingPage = () => {
  return (
    <>
        <InfoHeader />
        <NavHeader />
        <Hero />
        <Categories />
        <Courses />
    </>
  )
}

export default LandingPage;