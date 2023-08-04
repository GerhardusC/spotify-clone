import "../styles/PromotionBlock.css"

//This component shows the premium promotion and has buttons that currently do nothing.
function PromotionBlock() {
    return(
        <div className="promotion-division">
            <div className="promotion-block-container">
                <h1>Get Premium free for 1 month</h1>
                <p>Just R59.99/month after. Cancel anytime.</p>
                <div className="buttons-box">
                    <div className="get-started-button">GET STARTED</div>
                    <div className="view-plans-button">VIEW PLANS</div>
                </div>
                <p className="fine-print"><span style={{textDecoration: "underline"}}>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.</p>
            </div>
        </div>
    )
}

export default PromotionBlock;