import { TryBotButton } from "../../navbar/TryBotButton"
import { motion } from "framer-motion"
export const CTA:React.FC = () =>{
    return(
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}} transition={{duration:0.7, delay:0.4}} className="cta py-[60px] w-full bg-[#faf5fe]">
            <div className="contentContainer px-[60px] w-full max-w-[1280px] m-auto">
                <div className="flex justify-between">
                    <h2 className="text-[2.369rem] text-black">Try the best trading tool for Solana blockchain!</h2>
                    <TryBotButton/>
                </div>
            </div>
        </motion.section>
    )
}