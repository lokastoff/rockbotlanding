import { Navbar } from "../components/navbar/Navbar"
import { Hero } from "../components/main/Hero/SectionHero"
import { Features } from "../components/main/Features/SectionFeatures"
import { CTA } from "../components/main/CTA/CTA"
import { Footer } from "../components/footer/Footer"
export const Home:React.FC = () => {
    return(
        <div className="pageWrapper">
            <Navbar/>
            <Hero/>
            <Features/>
            <CTA/>
            <Footer/>
        </div>
    )
}