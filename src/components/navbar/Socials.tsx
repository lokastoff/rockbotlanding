export const SocialNav = () => {
    return (
        <div className="socialWrapper grid grid-cols-3 grid-rows-1 gap-[16px] mx-[20px]">
            <a href="https://usdrock.gitbook.io/rockbot-documentation" className="p-[4px]" target="_blank">
                <img src="/assets/Gitbook.svg" alt="gitbook" className="w-[20px]"/>
            </a>
            <a href="https://twitter.com/rocktokens" target="_blank" className="p-[4px]"> 
                <img src="/assets/Twitter.png" alt="twitter" className="w-[20px]"/>
            </a>
            <a href="https://t.me/itsjustarocknews" className="p-[4px]" target="_blank"> 
                <img src="/assets/Telegram.png" alt="twitter" className="w-[20px]"/>
            </a>
        </div>
    )
}