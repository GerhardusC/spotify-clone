import '../styles/WhyGoPremium.css'

//A reason card component contains a single reason to go premium.
function ReasonCard({iconSource, reason, explanation}) {
    return (
        <div className="reason-container">
            <img src={iconSource} alt="" />
            <p className="reason-text">{reason}</p>
            <p className="explanation-text">{explanation}</p>
        </div>
    )
}

//This function maps each reason to use premium into a container. Reasons are passed down as props to the WhyGoPremium block.
function WhyGoPremium() {
    //This constant contains all the reasons to go premium and links to the icons on the website. I decided not to download these images, but rather use Spotify's existing links.
    const reasonsForPremium = [
        {
            iconSource: "https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f",
            reason: "Download music.",
            explanation: "Listen anywhere"
        },
        {
            iconSource: "https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137",
            reason: "Ad-free music listening.",
            explanation: "Enjoy nonstop music."
        },
        {
            iconSource: "https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67",
            reason: "Play songs in any order.",
            explanation: "Any song, any order."
        },
        {
            iconSource: "https://content-tooling.spotifycdn.com/images/4a4fc24a-69b3-476b-b6d9-e7597cda526e_enhance_icon_(1).svg",
            reason: "Higher sound quality.",
            explanation: "Feel the sound."
        }
    ]
    return (
        <div className="why-go-premium-block">
            <h1>Why go Premium?</h1>
            <div className="reasons-container">
            {reasonsForPremium.map(({ iconSource, reason, explanation}) => <ReasonCard key={reason} iconSource={iconSource} reason={reason} explanation={explanation} />)}
            </div>
        </div>
    )
}

export default WhyGoPremium;