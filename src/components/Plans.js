import '../styles/Plans.css'

//Including the icons of the payment methods.
import visaLogo from '../images/visaLogo.png'
import mastercardLogo from '../images/mastercardLogo.png'
import vodacomLogo from '../images/vodacomLogo.png'
import mtnLogo from '../images/mtnLogo.png'
import telkomLogo from '../images/telkomLogo.png'
import amexLogo from '../images/amexLogo.png'
import voucherLogo from '../images/voucherLogo.png'

//This component displays the payment options.
function PaymentOptions({paymentOptions}) {
    return (
        <div className="payment-options">
            {paymentOptions.map(({name, image}) => <img key={name} src={image} alt="" />)}
        </div>
    );
}

//This function displays the plan options in little cards based available plans passed down as props.
function PlanOptions ({availablePlans}) {
    return (
        <div className="plans-container">
            {availablePlans.map( ({tags, name, price, billingPeriod, accounts, features, additionalFinePrint}) => {
                    return (
                        <div className="single-plan" key={name}>
                            <div className="plan-header">
                                {tags.map(({tagText, tagType}) => <div key={tagText} className={tagType}>{tagText}</div>)}
                                <h1>{name}</h1>
                                <p>R{price}/{billingPeriod}</p>
                                <p>{accounts}</p>
                                <br />
                            </div>
                            <div className="plan-features">
                                <hr />
                                <div className="feature-list">{features.map((feature) => <div key={feature}>✓{" "}{feature}</div>)}</div>
                            </div>
                            <div className="get-started-button">GET STARTED</div>
                            <div className="feature-fine-print">
                                <p className="additional-fine-print"><a href="https://www.google.com/" className="toc-link">Terms and conditions apply</a> {additionalFinePrint}</p>
                            </div>
                        </div>
                    );
                }     
            )}
        </div>
    );
}
//This function displays the entire premium-plans container including the payment options and the plan options.
function Plans() {
    //The available plans and payment options are declared here and passed as props to the payment options and plan options components.
    const availablePlans = [
        {
            tags: [{ tagText: "One-time-plan", tagType: "secondary-tag"}],
            name: "Mini",
            price: 11.99,
            billingPeriod: "week",
            accounts: "1 account on mobile only",
            features: ["Ad-free music listening on mobile", "Group Session", "Download 30 songs on 1 mobile device"],
            additionalFinePrint: ""
        },
        {
            tags: [{ tagText: "1 month free with subscription", tagType: "primary-tag"}, { tagText: "One-time plans available", tagType: "secondary-tag" }],
            name: "Individual",
            price: 59.99,
            billingPeriod: "month after offer period",
            accounts: "1 account",
            features: ["Ad-free music listening", "Play anywhere - even offline", "Play songs in any order", "Prepay or subscribe"],
            additionalFinePrint: "1 month free not available for users who have already tried Premium."
        },
        {
            tags: [{ tagText: "1 month free with subscription", tagType: "primary-tag"}, { tagText: "One-time plans available", tagType: "secondary-tag" }],
            name: "Duo",
            price: 79.99,
            billingPeriod: "month after offer period",
            accounts: "2 accounts",
            features: ["2 Premium accounts for a couple under one roof", "Ad-free music listening, play offline, play songs in any order", "Prepay or subscribe"],
            additionalFinePrint: "1 month free not available for users who have already tried Premium."
        },
        {
            tags: [{ tagText: "1 month free with subscription", tagType: "primary-tag"}, { tagText: "One-time plans available", tagType: "secondary-tag" }],
            name: "Family",
            price: 99.99,
            billingPeriod: "month after offer period",
            accounts: "Up to 6 accounts",
            features: ["6 Premium accounts for family members living under one roof", "Block explicit music", "Ad-free music listening, play offline, play songs in any order", "Prepay or subscribe"],
            additionalFinePrint: "1 month free not available for users who have already tried Premium."
        }
    ]
    const paymentOptions = [
        {
            name: "VISA",
            image: visaLogo
        },
        {
            name: "MasterCard",
            image: mastercardLogo
        },
        {
            name: "Vodacom",
            image: vodacomLogo
        },
        {
            name: "MTN",
            image: mtnLogo
        },
        {
            name: "Telkom",
            image: telkomLogo
        },
        {
            name: "AMEX",
            image: amexLogo
        },
        {
            name: "Voucher",
            image: voucherLogo
        }
    ]
    return (
        <div className="premium-plans-main-container">
            <h1>Pick your Premium</h1>
            <p>Listen without limits on your phone, speaker, and other devices.</p>
            <PaymentOptions paymentOptions={paymentOptions}/>
            <PlanOptions availablePlans={availablePlans} />
            <div className="student-promotion">
                <h2>Students get Premium free for 1 month</h2>
                <div className="learn-more-button">LEARN MORE</div>
            </div>
        </div>
    )
}

export default Plans;