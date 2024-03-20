interface CardProps {
    id:number,
    imgSrc: string,
    header: string,
    description :string   
}

export const FeatureCard:React.FC<CardProps> = ({imgSrc, header, description}) => {
    return(
        <div className="card flex flex-col justify-top items-center p-[20px] m-[20px] w-full bg-[#faf5fe] rounded-[20px]">
            <img src={imgSrc} alt="icon" className="max-w-[120px] max-h-[120px] rounded-[50%]"/>
            <h3 className="my-[16px] font-light text-[1.777rem] text-black text-center">{header}</h3>
            <p className="mb-[20px] max-w-[35ch] text-[0.75rem] text-center">{description}</p>
        </div>
    )
}