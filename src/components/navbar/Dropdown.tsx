import { SocialNav } from "./Socials"
import { TryBotButton } from "./TryBotButton"
import { motion,Variants } from "framer-motion"

export const NavDropdown:React.FC = () => {
    const dropdownVariants:Variants = {
        hidden: { opacity: 1, y: -200, transition: { duration: 0.4}},
        visible: { opacity: 1, y: 0, transition: { duration: 0.4}},
    }
    return(
        <motion.div variants={dropdownVariants} initial='hidden' animate='visible' exit="hidden" className=" w-full bg-white absolute flex-col z-[10] shadow-[0_10px_10px_0_rgba(0,0,0,0.2)] mt-[1px]">
            <div className="flex justify-center items-center my-[40px]">
                <SocialNav/>
            </div>
            <div className="flex justify-center items-center mt-[40px] mb-[30px]">
                <TryBotButton/>
            </div>
        </motion.div>
    )
}