import { motion } from "framer-motion"
export const SocialNav:React.FC = () => {
    return (
        <div className="socialWrapper grid grid-cols-3 grid-rows-1 gap-[16px] mx-[20px] max-sm:hidden">
            <motion.a href="https://usdrock.gitbook.io/rockbot-documentation" className="p-[4px]" target="_blank" whileHover={{ scale: 1.1 }}>
                <img src="/assets/Gitbook.svg" alt="gitbook" className="w-[20px]"/>
            </motion.a>
            <motion.a href="https://twitter.com/rocktokens" target="_blank" className="p-[4px]" whileHover={{ scale: 1.1 }}> 
                <img src="/assets/Twitter.png" alt="twitter" className="w-[20px]"/>
            </motion.a>
            <motion.a href="https://t.me/itsjustarocknews" className="p-[4px]" target="_blank" whileHover={{ scale: 1.1 }}> 
                <img src="/assets/Telegram.png" alt="twitter" className="w-[20px]"/>
            </motion.a>
        </div>
    )
}