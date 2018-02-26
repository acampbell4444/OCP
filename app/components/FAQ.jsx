import React, { Component } from 'react'
import Accordion from 'react-responsive-accordion'

export default class FAQ extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='white'
  }
  componentWillUnmount(){
    document.body.style.backgroundColor='#2F3C99'
  }
  render() {
    return (
      <div>
            <div id='skyWrap'>
        <div id="clouds">
          <div className="star f"></div>
          <div className="star g"></div>
          <div className="star h"></div>
          <div className="star i"></div>
          <div className="star j"></div>
          <div className="star k"></div>
          <div className="star l"></div>
          <div className="star m"></div>
          <div className="star o"></div>
          <div className="star p"></div>
          <div className="star q"></div>
          <div className="cloud A"></div>
          <div className="cloud B"></div>
          <div className="cloud C"></div>
          <div className="cloud D"></div>
          <div className="cloud E"></div>
      </div>
    </div>
      <h1 className='flex exMarg'>Frequently Asked Questions</h1>)
        
      <Accordion startPosition={null}
                 transitionTime={200}
      >

          <div data-trigger="Q: How long are the flight times?">
            <p className="answer">Flights range from 8 minutes up to 10 minutes.</p>
          </div>    

          <div data-trigger="Q: How much does it cost to go parasailing?">
            <p className="answer fourline">800 ft. Flight : $75 per person<br/>
            600 ft. Flight : $65 per person<br/>
            Non-Flying passenger : $25 per person <br/>
            Check our rates page for the latest deals.</p> 
          </div>      

          <div data-trigger="Q: How long does the entire trip take?">
            <p className="answer threeline">The trips can vary depending on how many other customers are on the boat, we do try to limit each trip to one hour on the water.</p>
          </div>          

          <div data-trigger="Q: Do I need prior experience?">
            <p className="answer fourline">Prior experience is not necessary. The captain and mate do ALL the work for you. You just have to come prepared to have a good time. If you can sit, you can fly!</p>
          </div>          

          <div data-trigger="Q: Do I need to know how to swim?">
            <p className="answer fourline">No, since all takeoffs and landings are done from the back of the boat you don't even have to get wet. In the extremely unlikely event of a boat malfunction, the parasailors slowly drift back to the water and the mandatory lifejackets will hold you afloat.</p>
          </div>          

          <div data-trigger="Q: Do I have to get wet?">
            <p className="answer fiveline">No, you don't have to get wet if you don't want to. Near the end of the flight, the captain slows the boat down and has you gently freefall, dipping your feet in the water for a refreshing splash. He then lands you back safely on the boat deck. Please let us know if you would like to stay completely dry.</p>
          </div> 

          <div data-trigger="Q: Can I go if I'm pregnant?">
            <p className="answer threeline">For your safety, pregnant women are not able to go parasailing or on the boat. But please come back and see us next year.</p>
          </div>          

          <div data-trigger="Q: Can I go if I have suffered spinal, back, or neck injuries in the past?">
            <p className="answer fourline">Because the boat ride can be a bit bumpy at times, we ask that if you have suffered from these types of injuries you refrain from going parasailing or even on the boat.</p>
          </div>          

          <div data-trigger="Q: How old do I need to be to fly?">
            <p className="answer fourline">Parasailors must be at least 5-years-old to parasail. Guests younger than 18-years-old must have an adult sign them in. On the other end of the spectrum, the oldest person we flew was 102 years old. Parasailing is safe and exciting for all ages!</p>
          </div>          

          <div data-trigger="Q: Can I go up with someone else?">
            <p className="answer fiveline"> Yes, we offer tandem and triple flights(2 or 3 people in the same chute). All multi-passenger flights are side by side offering great views and comfortable flights. If the combined weight is over 500 lbs. then it's up to the captain to make the call. His decision is based on weather conditions.</p>
          </div>          

          <div data-trigger="Q: Is there a weight restriction?">
            <p className="answer fourline"> The minimum combined weight requirement is 180lbs, and the maximum combined weight is 450lbs. It will be up to the captain to determine. This all can vary according to winds conditions.</p>
          </div>
           
          <div data-trigger="Q: Can a minor go up by themselves?">
            <p className="answer fiveline"> Yes, if the minor weighs at least 125 lbs. then it should be okay, but an adult needs to be present to check in anyone under 18 years of age. If the minor weighs under 125 lbs. then they will have to fly with someone else to make up for the weight. Again, this can vary according to weather conditions.</p>
          </div>

          <div data-trigger="Q: What if I change my mind when I'm already on the boat?">
            <p className="answer fiveline"> You can change your mind but you will not be refunded. That being said, this rarely happens. On the contrary, we've had folks who were coming along just for the boat ride, ask if they too could go parasailing after seeing how fun and gentle it was.</p>
          </div>          

          <div data-trigger="Q: Can I go on the boat to watch but not necessarily go up?">
            <p className="answer fiveline">We do not take observer reservations. Right before the boat departs, IF there is room on the boat we will welcome you on the boat as an observer. The cost for that is $25. If you change your mind while on the boat and decide to fly, the $25 charge is then applied to the cost of parasailing.</p>
          </div>

          <div data-trigger="Q: How does parasailing work?">
            <p className="answer sixline">After getting outfitted with a life vest and harness, you're seated on the flight deck of the boat. Once seated the mate clips your harness to the parachute. The captain then presses a button and up you go real nice and smooth, just like sitting on a swing set that slowly elevates you for the experience of a lifetime. And yes, all take offs and landings are done straight from the boat.</p>
          </div>          

          <div data-trigger="Q: What happens if the boat or towline breaks?">
            <p className="answer fiveline">If this happens, the participants will slowly and safely descend into the water. The mandatory lifejackets will hold the participants up until which time they are pulled back onto the boat. The parasail will not sink or go over your head. Prior to your flight the captain will give all participants a full safety briefing.</p>
          </div>          

          <div data-trigger="Q: What should I wear and leave behind?">
            <p className="answer sixline">Dress for the weather, if it is cool before your flight or you are sensitive to the sun, we recommend that you wear a long sleeved shirt/ sweatshirt. Bathing suits and beach attire is always recommended, as are towels, bottled water and sun block. We recommend you leave behind anything that can be damaged by contact with water as well as anything that is expensive or hard to replace. We are not responsible for any damaged or lost items.</p>
          </div>

          <div data-trigger="Q: Can I take my camera up with me?">
            <p className="answer fourline">You are allowed to take a camera up at your own discretion, and should take into consideration the height and water risks. Disposable cameras are best. We also offer a digital photo package as another option to capture your good times.</p>
          </div>           

          <div data-trigger="Q: What photo package do we offer?">
            <p className="answer fourline">The digital photo package includes 30 photos of your adventure. The crew uses a high quality digital camera to document your entire flight and at the end of the trip you get the memory card to help with bragging rights.</p>
          </div>            

          <div data-trigger="Q: Do we need to make reservations?">
            <p className="answer fiveline">Yes, because of parasailing's popularity and the limited space we encourage reservations. There have been times when guests have shown up without a reservation only to have to wait for a couple of hours until there was a space open for them. HOWEVER, if there is room on the boat walk-up guests are welcome.</p>
          </div>  

          <div data-trigger="Q: What are our options as far as making reservations?">
            <p className="answer sixline">You have three options when making reservations: <br/> 1) Online reservations are available by going to the reservation tab on our website.  <br/> 2) Phone reservations are available 24/7. Call anytime.  <br/> 3) Walk up reservations at any of our ticket offices.</p>
          </div>           

          <div data-trigger="Q: Do you offer gift certificates?">
            <p className="answer fiveline"> Parasailing Gift Certificates are a great unique idea for special occasions. If you would like to give someone special the gift of parasailing, just let us know. We can get the gift certificates ready for pick-up or mail them out for you at no additional charge. Gift certificates don't expire and are valid at all of our California locations.</p>
          </div>  
          
          <div data-trigger="Q: Are there group discounts?">
            <p className="answer twoline">Groups of 6 or more get a discount. Call us for more information.</p>
          </div>            
          
          <div data-trigger="Q: What are your cancellation and refund policies?">
            <p className="answer fourline">Please cancel one day prior to your reservation for a full refund. Gift Certificates & Retail: We do not refund gift certificates or retail purchases. However, gift certificates are good until they are used.</p>
          </div>            

          <div data-trigger="Q: What if it rains or is extremely windy?">
            <p className="answer sixline"> A little sprinkle and we stay out. High gusty winds also make parasailing difficult. The captain then decides if we are going on stand-by or if we close down for the day. If you weren't able to fly then you can either be refunded or rescheduled for a day when we think the sun will come out to play again. If you are unsure about the weather conditions, please give us a call the day of your flight.</p>
          </div>

          <div data-trigger="Q: What part of our vacation should we plan parasailing for?">
            <p className="answer fourline">We encourage you to plan for parasailing during the first part of your vacation. That way, if the weather does not cooperate you will have other opportunities to fly.</p>
          </div>           

          <div data-trigger="Q: Why book online versus by phone?">
            <p className="answer fourline">As an online customer you have the freedom to book ahead of everyone else. Your credit card will NOT be charged prior to your flight for online reservations.</p>
          </div>     
           
          <div data-trigger="Q: What form of payment do you accept?">
            <p className="answer twoline">We accept Cash, Debit Cards, MasterCard, Visa, Discover, or American Express.</p>
          </div>           

          <div data-trigger="Q: What are the days and times the boats depart?">
            <p className="answer fiveline">Boats depart every 1 hour beginning at 9 am. Our online reservation system shows availability for each day. IMPORTANT: Keep in mind that parasailing and any other outdoor activity is best planned for the first part of the day since the chances of winds increase throughout the afternoon.</p>
          </div>

          <div data-trigger="Q: Is it customary to tip the crew?">
            <p className="answer threeline">Just like others in the service industry, the crew works very hard to make sure all your needs aboard the boat are taken care of.</p>
          </div>     
 

        </Accordion>
           <h1 className='clear' id='sunriseHeader'></h1>
           <h1 className='clear' id='sunriseHeader'></h1>
           <h1 className='clear' id='sunriseHeader'></h1>


    </div>
    )
  }
}