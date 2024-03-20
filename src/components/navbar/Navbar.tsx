import { SocialNav } from "./Socials"
import { TryBotButton } from "./TryBotButton"
export const Navbar:React.FC = () => {
    return(
        <nav className="navbar w-full  border-b-[1px] border-[rgba(0, 0, 0, 0.1)]">   
            <div className="container mx-auto px-[60px] w-full relative">
                <div className="wrapper flex items-center justify-between py-[12px] w-full h-full">
                    <div className="logoContainer">
                        <img src="/assets/rockBotLogo.PNG" alt="logo" className=" max-h-[100px]" />
                    </div>
                    <div className="socialsContainer flex justify-end items-center">
                        <SocialNav/>
                        <TryBotButton/>
                    </div>
                </div>
            </div>
        </nav>
    )
}