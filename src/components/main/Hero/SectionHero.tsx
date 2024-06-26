import { TryBotButton } from "../../navbar/TryBotButton"
import { StuggeredText } from "../../animation/StuggeredTextAnimated";
import { motion, Variants } from "framer-motion"

export const Hero:React.FC = () =>{
    const heroVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
      };


    return(
        <motion.section className="hero w-full pt-[120px] max-sm:pt-[60px] bg-[url('/assets/heroBg.png')] bg-cover bg-center h-[80vh]" variants={heroVariants} initial='hidden' animate="visible">
            <div className="container px-[200px] max-sm:px-[16px] w-full relative">
                <div className="heroWrap w-full h-full ">
                    <div className="heroContent w-full max-w-[50%] max-sm:max-w-full pr-[60px] max-sm:pr-0 max-sm:mb-[60px]" >
                        <h1 className="mb-[20px] text-[3.157rem] font-medium"><StuggeredText text="It's NOT just a $ROCK"/></h1>
                        <motion.p className="mb-[50px] max-w-[50ch] text-[1rem] max-sm:bg-[#e2e8f0d9] max-sm:rounded-[40px] max-sm:py-[15px] max-sm:px-[30px]" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}>In the world of token trading, every second counts and that's why our bot will be the best solution for you to snipe telegram channels of your favorite kols with the most user-friendly UI among all bots on the market.</motion.p>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}>
                            <motion.div whileHover={{ scale: 1.05 }} className="absolute max-[320px]:hidden">
                                <TryBotButton/>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}