interface Card {
    id: number;
    imgSrc: string;
    header: string;
    description: string;
}

export const CardData:Card[] = [
    {
        id:1,
        imgSrc:'/assets/UIlogo.png',
        header: 'User Interface',
        description:'Interface, made with Telegram Web Apps API, combined with clasic Telegram bot interactions, provides you the best user experience ever existed.'
    },
    {
        id:2,
        imgSrc:'/assets/TelegramLogoBlue.png',
        header: 'Telegram sniper',
        description:'Snipe your favorite callers and buy their calls first! You can add up to five links to the telegram channels of the Influencers you want and once they post token address(ca)/birdeye link/dexscreener link, the bot will automatically buy posted token(works only for public channels).'
    },
    {
        id:3,
        imgSrc:'/assets/referrals.png',
        header: 'Referral system',
        description:'Invite people to RockBOT and get paid! As soon as you start using the bot, a referral link will be automatically created for you, which you can share with friends and earn 30% of their fees!'
    },
    {
        id:4,
        imgSrc:'/assets/fees.png',
        header: 'Fees mechanism',
        description:'70% of fees, collected from RockBOT, are automatically spent to buyback $ROCK, and burn it later.'
    }
]