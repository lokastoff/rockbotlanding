import { CardData } from "./CardData"
import { FeatureCard } from "./FeatureCard"
import { motion } from "framer-motion"
export const Features:React.FC = () =>{
    return(
        <section  className="sectionF py-[120px] max-sm:py-[60px] w-full ">
            <div className="contentContainer px-[60px] max-sm:px-[16px]  m-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}} transition={{duration:0.7, delay:0.4}} className="content">
                    <h2 className="my-[20px] px-[12px] text-[2.369rem] text-center text-black">Why RockBOT?</h2>
                    <div className="featuresGrid grid grid-cols-4 max-sm:grid-cols-1 grid-rows-1  gap-y-[60px] max-sm:gap-y-[20px] gap-x-[40px] max-sm:gap-x-0 max-sm:mt-[40px] w-full">
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