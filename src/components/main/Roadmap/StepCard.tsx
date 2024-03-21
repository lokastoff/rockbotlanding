interface StepProps{
    imgSrc:string,
    description: string,
    header: string,
    status:string
}

export const StepCard:React.FC<StepProps> = ({imgSrc, description,header,status}) =>{
    return(
        <div className="flex justify-start items-center mb-[120px] w-full max-sm:flex-col-reverse max-sm:justify-end ">
            <div className="content w-full">
                <div className="header flex justify-end items-center max-sm:flex-col max-sm:justify-center max-sm:items-start">
                    <h3 className="my-[16px] font-light text-[1.777rem] text-black text-right max-sm:text-center">{header}</h3>
                    {status === 'completed' ? (
                    <span className="px-[12px] py-[4px] ml-[12px] font-light text-[0.75rem] text-white text-center bg-black rounded-[40px] max-sm:w-full max-sm:mb-[10px] max-sm:ml-0">{status.toUpperCase()}</span>
                    ) : status === 'ongoing'?(
                    <span className="px-[12px] py-[4px] ml-[12px] font-light text-[0.75rem] text-black text-center bg-lime-200 rounded-[40px] max-sm:w-full max-sm:mb-[10px] max-sm:ml-0">{status.toUpperCase()}</span>
                    ) : (
                    <span className="px-[12px] py-[4px] ml-[12px] font-light text-[0.75rem] text-black text-center bg-white rounded-[40px] border-black border-[1px] max-sm:w-full max-sm:mb-[10px] max-sm:ml-0">{status.toUpperCase()}</span>
                    )}
                </div>
                <p className="mb-[20px] font-light text-[0.75rem] text-right max-sm:text-center">{description}</p>
            </div>
            <img src={imgSrc} alt="step" className="ml-[30px] max-sm:ml-0 w-[158px] max-sm:w-[79px] rounded-[100%]"/>
        </div>
    )
}