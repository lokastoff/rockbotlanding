import { SocialNav } from "./Socials"
import { TryBotButton } from "./TryBotButton"
import { motion, Variants } from "framer-motion"
import { NavDropdown } from "./Dropdown"
import { MenuOutlined } from "@ant-design/icons"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
export const Navbar:React.FC = () => {
    const logoVariants: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
      };
      
      const socialAndButtonVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
      };
      
      const menuButtonVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { scale: 1, rotate: 0, transition: { duration: 0.8, delay: 0.3 } },
      };

      const [isDropdownVisible, setDropdownVisible] = useState(false);
      
      const handleMenu = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    return(
        <nav className="navbar w-full  border-b-[1px] border-[rgba(0, 0, 0, 0.1)]">
            <div className="container mx-auto px-[60px] w-full relative max-sm:px-[16px] z-[100] bg-white">
                <div className="wrapper flex items-center justify-between py-[12px] w-full h-full">
                    <motion.div className="logoContainer" 
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible">
                        <img src="/assets/rockBotLogo.PNG" alt="logo" className=" max-h-[100px]" />
                    </motion.div>
                    <div className="socialsContainer flex justify-end items-center">
                        <motion.div variants={socialAndButtonVariants} initial="hidden" animate="visible" className="max-sm:hidden">
                            <SocialNav/>
                        </motion.div>
                        <motion.div variants={socialAndButtonVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.1 }} className=" max-sm:hidden">
                            <TryBotButton/>
                        </motion.div>
                        <motion.div className="menuButton sm:hidden m-[16px] p-[16px] w-[60px] h-[60px] flex items-center justify-center" variants={menuButtonVariants} initial="hidden" animate="visible" >
                            <motion.div whileTap={{scale: 1.1}}>
                                <button onClick={handleMenu}><MenuOutlined style={{ fontSize: '40px'}}/></button>
                                
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
            {isDropdownVisible &&(
                <motion.div exit={{ opacity: 1, y: -200, transition: { duration: 0.4}}}>
                    <NavDropdown/>
                </motion.div>
            )
            }
            </AnimatePresence>
        </nav>
    )
}