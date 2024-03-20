import { TryBotButton } from "../../navbar/TryBotButton"

export const Hero:React.FC = () =>{
    return(
        <section className="hero w-full pt-[120px] bg-[url('/assets/heroBg.png')] bg-cover bg-center h-[80vh]">
            <div className="container px-[200px] w-full  relative">
                <div className="heroWrap w-full h-full ">
                    <div className="heroContent w-full max-w-[50%] px-[60px] ">
                        <h1 className="mb-[20px] text-[3.157rem] font-medium">It's NOT just a $ROCK</h1>
                        <p className="mb-[30px] max-w-[50ch] text-[1rem]">In the world of token trading, every second counts and that's why our bot will be the best solution for you to snipe telegram channels of your favorite kols with the most user-friendly UI among all bots on the market.</p>
                        <TryBotButton/>
                    </div>
                </div>
            </div>
        </section>
    )
}