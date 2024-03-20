import { CardData } from "./CardData"
import { FeatureCard } from "./FeatureCard"
export const Features:React.FC = () =>{
    return(
        <section className="sectionF py-[120px] w-full ">
            <div className="contentContainer px-[60px]  m-auto">
                <div className="content">
                    <h2 className="my-[20px] px-[12px] text-[2.369rem] text-center text-black">Why RockBOT?</h2>
                    <div className="featuresGrid grid grid-cols-4 grid-rows-1 gap-y-[60px] gap-x-[40px] mt-[40px] w-full">
                        {CardData.map((card) => {
                            return(
                                <FeatureCard id={card.id} imgSrc={card.imgSrc} header={card.header} description={card.description}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}