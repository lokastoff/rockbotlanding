interface Data{
    id:number,
    step:string,
    status: string,
    imgSrc: string,
    description:string
}



export const leftColData: Data[] = [
    {
        id:1,
        step:'MVP version release',
        status: 'completed',
        imgSrc: '/assets/step1.png',
        description:'First version of bot is out NOW!'

    },
    {
        id:3,
        step:'Improving bot',
        status: 'ongoing',
        imgSrc: '/assets/stepOngoing.png',
        description:'We are continuously working on adding new features for our bot. Stay tuned!'
    },
]

export const rightColData:Data[] = [
    {
        id:2,
        step:'NFT collection',
        status: 'coming soon',
        imgSrc: '/assets/nftGif.gif',
        description:'NFT collection release coming with free mint for top-250 holders of $ROCK. Exclusive benefits for NFT holders are included'

    }
]