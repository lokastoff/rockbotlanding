import { leftColData } from "./StepData"
import { rightColData } from "./StepData"
import { StepCard } from "./StepCard"
export const Roadmap:React.FC = () => {
    return(
        <section className="roadmap py-[120px] w-full ">
            <div className="contentConataner px-[60px] w-full max-w-[1280px] m-auto">
                <h2 className="px-[12px] mb-[20px] text-[2.369rem] text-center">Roadmap</h2>
                <div className="stepsWrap flex mt-[60px]">
                    <div className="leftCol flex flex-col justify-start items-end w-full">
                        {leftColData.map((card) => {
                            return(<StepCard imgSrc={card.imgSrc} description={card.description} header={card.step} status={card.status}/>)
                        })}
                    </div>
                    <div className="progressBar flex flex-col justify-between items-center mx-[60px] w-[2px] h-auto relative bg-[#c4c4c4]">
                        <div className="circle w-[12px] h-[12px] bg-black rounded-[50%]"/>
                        <div className="bar w-full h-full absolute bg-black"/>
                        <div className="circle w-[12px] h-[12px] bg-black rounded-[50%]"/>
                    </div>
                    <div className="rightCol flex flex-col justify-start items-end w-full pt-[120px]">
                    {rightColData.map((card) => {
                            return(<StepCard imgSrc={card.imgSrc} description={card.description} header={card.step} status={card.status}/>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}