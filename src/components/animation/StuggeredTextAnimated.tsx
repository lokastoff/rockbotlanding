import { motion, Variants } from "framer-motion"
interface StuggeredProps {
    text: string
}

const stuggeredVariants:Variants = {
    hidden: {
        opacity:0,
        y:20
    },
    visible: {
        opacity:1,
        y:0,
    }
}

export const StuggeredText:React.FC<StuggeredProps> = ({text}) => {
    return(
        <motion.span variants={stuggeredVariants} initial="hidden" animate="visible" transition={{staggerChildren: 0.07, delayChildren:0.6}}>
            {text.split(" ").map((word,index)=>(
            <span key={index} className="inline-block">
                {word.split("").map((char, index)=>(
                    <motion.span key={index} className="inline-block" variants={stuggeredVariants}>{char}</motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
            </span>
            ))}
        </motion.span>
    )
}