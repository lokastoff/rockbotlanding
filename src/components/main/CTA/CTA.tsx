import { TryBotButton } from "../../navbar/TryBotButton"
import { motion } from "framer-motion"
export const CTA:React.FC = () =>{
    return(
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}} transition={{duration:0.7, delay:0.4}} className="cta py-[60px] w-full bg-[#faf5fe]">
            <div className="contentContainer px-[60px] max-sm:px-[16px] w-full max-w-[1280px] m-auto">
                <div className="flex justify-between items-center max-sm:flex-col">
                <h2 className="text-[2.369rem] text-black max-sm:text-center">Try the best trading tool for Solana blockchain!</h2>
                    <motion.div whileHover={{scale:1.1}} className="max-sm:max-w-full max-sm:mt-[30px]">
                        <TryBotButton/>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}