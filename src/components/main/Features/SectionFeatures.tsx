import { CardData } from "./CardData"
import { FeatureCard } from "./FeatureCard"
import { motion } from "framer-motion"
export const Features:React.FC = () =>{
    return(
        <section  className="sectionF py-[120px] w-full ">
            <div className="contentContainer px-[60px]  m-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}} transition={{duration:0.7, delay:0.4}} className="content">
                    <h2 className="my-[20px] px-[12px] text-[2.369rem] text-center text-black">Why RockBOT?</h2>
                    <div className="featuresGrid grid grid-cols-4 grid-rows-1 gap-y-[60px] gap-x-[40px] mt-[40px] w-full">
                        {CardData.map((card) => {
                            return(
                                <FeatureCard key={card.id} imgSrc={card.imgSrc} header={card.header} description={card.description}/>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}