import React from 'react'
import anniversary from '../Images/anniversary2.jpeg'
import birthday from '../Images/birthday.jpeg'
import PreWedding from '../Images/pre_wedding.jpeg'
import Interview from '../Images/inerview.jpeg'
import office from '../Images/office_party.jpeg'
import Community from '../Images/c_events.jpeg'
import wedding from '../Images/wedding_480.jpeg'
import cocktail from '../Images/date_n_cock.jpeg'
import ServicesCard from './Card/ServicesCard'
import ServicesCard1 from './Card/ServicesCard1'

const Services = () => {
    return (
        <>
            <div className="md:my-5 justify-center">
                <div className="block-heading text-center my-3">
                    <h2 className="text-4xl tracking-wider font-[trxthomepage]">Personal Styling Services</h2>
                    <p className="text-gray-600 text-lg py-2 font-[trxthomepage]">Find your perfect look for every occasion</p>
                </div>
                <div className="grid md:grid-cols-3 md:gap-5">
                    <ServicesCard className='' title="Anniversary" imgs={anniversary} desc="Red Wine or Champagne, don't forget to raise a toast to each other in
                    your journey by being your best self in happening clothes" />
                    <ServicesCard className='' title="Birthday" imgs={birthday} desc="Burn the candles while making sure you are dressed to the nines" />
                    <ServicesCard className='' title="Pre-Wedding" imgs={PreWedding} desc="Let's fit into Gharara,Sharara and take on the stage by grooving to the beats." />
                </div>
                <div className="grid md:grid-cols-2 md:mx-14 md:gap-9">
                    <ServicesCard1 title="Wedding" imgs={wedding} desc="The brave hearted will take the Bride only when the D-Day look will make the groom's heart skip a beat. What say?" />
                    <ServicesCard1 title="Date Night/Cocktail" imgs={cocktail} desc="Let's make the Date night A Night to Remember by slipping into that perfect piece of an outfit and wait for the sparks to fly." />
                </div>
                <div className="grid md:grid-cols-3 md:gap-5">
                    <ServicesCard className='' title="Interviews" imgs={Interview} desc="Making a statement has never been so difficult. Let's Conquer!!" />
                    <ServicesCard className='' title="Office Function" imgs={office} desc="Unleash Your Professional Power with Confidence and Style: Unveiling the Perfect Office Function Outfit." />
                    <ServicesCard className='' title="Community Events" imgs={Community} desc="Solo or Group let's channel the inner Diva in that perfect ensemble and not miss a chance to Dance our hearts" />
                </div>
            </div>
        </>
    )
}

export default Services
