import React, { useState } from 'react';
import { Shield, AlertTriangle, FileText, HelpCircle, Check, Info, Book, Lightbulb, ChevronRight, ChevronDown, Car, Clock, PenTool as Tool, Star } from 'lucide-react';

export default function Insurance101() {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessonOneText = `
In 1947 James A. Grundy, Sr. began selling Agreed Value policies to his friends and acquaintances to safely protect the restoration costs and appreciating value of their collector cars. In recent years, many collector car insurance companies have followed his example by using Agreed Value as their "calling card." Even high-end insurers of modern exotic and specialty vehicles have begun offering the Agreed Value or Agreed Amount coverage forms. The reasons for this are really very simple and benefit both the policyholder and the insurance company.

AGREED VALUE policies set at the time the policy is issued the amount that a policyholder will receive and an insurance company will pay in the event of total loss or theft of a vehicle. Obtaining an Agreed Value policy on your collector car is a fairly simple process. The applicant submits an application, indicating the value that they would like to have insured. Both the vehicle and value are then reviewed by Grundy underwriters, who are knowledgeable both in insurance and collector cars. (In most cases they are car guys who have restored cars of their own and they understand the costs involved.) When working with a new application, underwriters examine photos and any other supporting documentation the applicants submits; and, the vehicle's value is compared to the agency's guidelines on similar vehicles in similar condition.

Ninety-five percent of applicants requested values are approved and bound on the date their applications are received. Occasionally, a Grundy underwriter will request additional information, such as restoration receipts or additional photos to substantiate a requested value. Underwriters will also tell applicants if their requested value is too low or too high. Insurance companies do not like to underinsure or over-insure, and the goal of all parties is to insure your car for its market value and the owner's investment. Once this simple process is complete, the Agreed Value policy is issued.

Although the collector car hobby has grown dramatically over the last decade, it is still too small for big insurance companies to invest the money it would cost them to train their personnel (agents, underwriters and adjusters) to understand collector cars and their values so they do not offer Agreed Value. Instead, they may offer Actual Cash Value or Stated Value policies.

ACTUAL CASH VALUE policies do NOT establish the amount in advance a policyholder will receive. It is the most common form of coverage used by the majority of the big automobile insurance companies. This is because big companies primarily insure newer vehicles that are produced in the hundreds of thousands and the value at the time of loss is a depreciated amount determined by make, model, options, age and condition. This involves starting with the Cost New and deducting a certain percentage for each year of vehicle age, plus deductions for observed or expected "wear and tear." In rare cases additions or increases in value are granted to owners of vehicles who can "prove" that their car was maintained better than the expected average.

STATED VALUE does NOT establish the amount a policyholder will receive in advance. The term Stated Value is very misleading because a Stated Value policy is nothing more than an Actual Cash Value policy with an upward limit on how much an insurance company will pay.

As previously mentioned, there are certain instances where an Actual Cash Value policy will pay additions or increases to policyholders who can "prove" their investment. Stated Value was developed 50 years ago (when collectors started investing large sums in great vehicles) by insurance companies to protect them from paying "more than they bargained for." Stated Value is the worst option for any vehicle, because it will depreciate and deduct on the downside, but your settlement is limited to the Stated Value.

Do you have the right coverage? Grundy offers car collectors peace of mind, ease and speed of settlement and the ability to know what you will get before a disastrous accident occurs. Grundy only offers customer Agreed Value policies. When we agree on value in advance, we avoid arguments with adjusters and meet our policyholders' expectations!
`;
  const lessonTwoText = `
  WHO IS INSURED?
  1. Named Insured: You or any blood relative living in your household
  2. Your Passengers, if their own UM/UIM coverage has been exhausted

  UNINSURED MOTORIST LIABILITY (UM):
  Uninsured motorist liability covers bodily injuries or death to you or your passengers that is caused by an AT-FAULT driver who is NOT insured. It also covers you, the insured, if you are involved in an accident with a hit-and-run driver. If you are involved in an accident where the other driver is AT-FAULT and does NOT have insurance, your policy will cover your injuries, medical expenses, lost wages and other expenses that the uninsured driver is found legally liable to pay. The limit on the policy refers to the maximum amount that will be paid per person, per incident.

  UNDERINSURED MOTORIST LIABILITY (UIM):
  Similarly, UIM covers bodily injuries or death to you or your passengers that is caused by the negligence of a person without enough insurance to cover your injuries. If you are in an accident with an underinsured driver, their insurance policy will pay up to its liability limit, and your insurance will pay the difference, up to the limit of UIM liability on your policy. This limit refers to the maximum amount that will be paid per person, per incident.

  UNINSURED MOTORIST PROPERTY DAMAGE (UMPD):
  UMPD should not be considered a substitution for collision coverage. UMPD covers damage to any vehicles the insured operates and are involved in an accident that is caused by an uninsured AT-FAULT driver. This coverage pays under the same circumstances as UM; however, it DOES NOT cover the insured if they are in an accident with a hit-and-run driver.

  IMPORTANT FOR COLLECTOR CAR OWNERS:
  Virtually all collector car policyholders also carry an auto policy on their every-day drivers. Remember that the definition of who is insured refers to PEOPLE, not the vehicles listed on a particular policy (i.e. your every-day or collector policy). Therefore, the UM/UIM limits you select for your policy for your every-day cars will transfer over to you when driving your collector car and vice-versa!

  WHAT TO DO IF YOU ARE HIT BY AN UN- OR UNDERINSURED DRIVER:
  - Call the police, even if the accident looks minor; obtaining a police report will be helpful in settling your claim because it helps distinguish who was at-fault.
  - Get the other driver’s contact information, including name, address and phone number, as you will be required to give this information to your insurance company.
  - Make sure you write down the car’s year, make and model and the license plate number.
  - Report your claim to the insurance company ASAP.
`;

const lessonThreeText = `
  A vehicle may be declared a total loss if the damage is determined to be irreparable or when the cost to repair exceeds a certain percentage (typically 80%) of the vehicle’s insured value.

  A variety of factors may lend to the declaration of a total loss, such as damage that affects the safety of your car or lack of replacement parts. The cost to fabricate these parts may bring the cost to repair the vehicle beyond its insured value.

  Typically, collector car owners do not want their car to be totaled because of sentimental attachment to these special vehicles. At Grundy, we work with car collectors to prevent an unnecessary total loss situation by providing our Agreed Value insurance and offering the flexibility of adjusting the insured value of your car annually, prior to a loss.

  Non-specialty auto insurance companies use predetermined values based on year, make, model, condition, and crash books when making that decision. Grundy’s underwriting companies do not use a price guide to determine the value of your car or amount of loss payment.

  Grundy takes away the guessing game by establishing the insured value of your vehicle before an accident occurs. We agree on that value when you sign up for our coverage, and at any time, we can agree to increase the value. You can rest assured, knowing that you have the ability to adjust the value of your vehicle throughout its restoration and as the value appreciates over time.

  In addition, Grundy Insurance dispatches expert damage appraisers; they are often hobbyists who know collector cars better than anyone else in the field, and they are well-equipped to fairly and accurately determine the extent of your car’s damage and if your vehicle is a total loss. In circumstances when our adjusters declare a total loss, we work with you to determine your options and courses of action.

  For instance, you may want to buy your totaled car back from our insurance company. If you buy your vehicle back, your state may require that you acquire a salvage title, which indicates that your car has been declared a total loss by the insurance company.

  Having a salvage title on your car is unfavorable, especially when selling your vehicle. Grundy can usually arrange for your vehicle to be settled as a partial loss by deducting the buyback price from the cost to repair the vehicle, which in turn lowers the percentage of damage done to the car. So long as state regulations do not prevent you from buying back your car, you may keep your car and the original title.

  Grundy works hard to keep your car out of the crusher. We understand your car’s worth and take the necessary steps to prevent determining your vehicle as a total loss.
`;

  const lessonFourText = `
  A major collector was invited to bring two of his Grand Classics from New England to a Concours in Florida; and, in preparation for the trip, the car owner contacted his insurance company to confirm that he was fully covered while transporting his vehicles down the East Coast in a trailer. The insurance agency assured him that he was covered.

  Along his journey, about halfway down the coast, the straps that held down the vehicle closest to the door broke. The driver did not hear the car collide into the trailer wall, nor did he hear the car proceed to crash into the other car. The unfastened car rolled back and forth between the wall and the other vehicle until the straps on the other car broke, as well. The two vehicles proceeded to crash into each other and the walls of the trailer for some time.

  When the owner discovered the mangled mess in the trailer, knowing that he was covered was his only comfort. But, this story has a horrific twist – this car collector learned that he was NOT covered by his insurance company. Even though he had been assured by the insurance agency that he was covered while using a trailer to transport the cars, the agent that took his call never looked at the policy that showed he was covered for Comprehensive only.

  The loss was devastating and demoralizing. Years later, this collector’s old insurance company was found negligent for not defining Collision. For reasons like this, Grundy always urges applicants to carry full coverage including both Comprehensive and Collision.

  What is Collision?
  Physical damage coverage on auto insurance policies is your Comp and Collision coverage. The purpose of this protection is to make sure that if your car is damaged, it is restored to its pre-loss condition no better and no worse. Collision is defined by our underwriters as an upset of your covered auto or the impact with any other object, including another auto. In other words, your policy covers damage to your car when your car hits or is hit by another vehicle or object. You do not have to be driving, nor does the engine even need to be turned on, for an incident to fall under the definition of your Collision insurance.

  Some scenarios in which damage would be deemed Collision:
  - You back up into a closed garage door or your car just rolls into it.
  - A vehicle slides on ice and into your car, denting the side of the vehicle.
  - A person (not a vehicle) slides on ice and into your car, denting the side of the vehicle.
  - Another car rolls into your car, while it is unattended at a car show.
  - Your car is parked and is hit by another car.
  - An object, like a shopping cart, is blown by the wind into the side of your car, causing damage.
  - You hit your collector car with your everyday driver.
  - You run over a bike or other debris that falls off the back of a car or truck in front of you on the highway.

  What is Comprehensive?
  Comprehensive insurance covers your car for losses resulting from incidents other than collision. Grundy Insurance policies outline some causes of loss that are considered other than collision. Causes of loss covered by your comprehensive coverage include, but are not limited to: missiles or falling objects; fire; theft or larceny; explosion or earthquake; windstorm; hail, water or flood; malicious mischief or vandalism; riot or civil commotion; contact with an animal and breakage of glass.

  Some scenarios in which damage would be deemed Comprehensive:
  - A deer hits your car.
  - Some neighborhood kids spray paint the side of your car.
  - Your windshield is hit by a rock while driving home from a show.
  - Something falls out of an airplane and into your car.
  - Acorns fall off of a tree and dent your hood.
  - Your vehicle is damaged by hail.
  - Your garage catches fire and your car catches on fire. This is especially important to remember, because many people mistakenly believe that their homeowners insurance will cover their cars in a fire. That is NOT true; you do need Comprehensive coverage on your vehicle for it to be covered in a house/garage fire.
  - You are playing ball with your kids and break a window on your collector car.
  - Your car is damaged in an earthquake.*
  - Your car is damaged during a hurricane due to flooding.*

  *Note that when a car is covered by Comprehensive, both earthquake and flood damage are included on a standard Auto Form; however, in areas of the country, identified as probable locations for Catastrophic Losses, like California earthquake and Florida flood areas, insurance companies may limit coverage or impose high deductibles for these perils.

  What is NOT covered if you are carrying both Comprehensive and Collision?
  There are some exclusions listed in our policy that identify what the insurance company will not pay for, including:
  - Loss which occurs while using your covered auto for public or livery, like a limo or taxi.
  - Damage due to wear and tear, freezing, mechanical failures, electrical breakdowns and road damage to tires.
  - Radioactive contamination, war, insurrection, rebellion or revolution.
  - Loss to any electronics designed for the reproduction of sound, including radios, stereos, tape decks and CD players.*
  - Loss to any electronics used to transmit audio, visual or data signals, like citizens band radios, telephones, two-way mobile radios, scanning monitor receivers, television monitor receivers, video cassette recorders, audio cassette recorders or personal computers.
  - Total loss by destruction or confiscation by a government unit.
  - Loss to a camper or motor home not listed in the Declarations.
  - Loss of radar or laser detectors.
  - Custom furnishing in a pick-up or van.*
  - Damage that occurs while competing in or preparing for a racing or speed contest; rallying, gymkhana.
  - Loss to a non-owned rental vehicle.

  *In the event of a Total Loss, there is no deduction to your Agreed Value settlement if these items were included in the value for which your car is insured.

  Legally, you are able to purchase Comprehensive coverage separate from Collision coverage; however, you are not able to buy just Collision coverage. Grundy urges all car collectors to have both Comprehensive and Collision coverage for their autos, in addition to Liability. Collector cars are high in value and cannot easily be replaced. It is our objective to fully cover collector vehicles for their true values. Establishing an Agreed Value was the foundation on which Grundy built the first-ever collector car insurance policy. Today, we continue to offer full coverage Agreed Value policies at affordable low rates.
`;

  const lessonFiveText = `
  Grundy has always recognized the need to account for the diminution of value of significant collector vehicles that result from insured events, such as collision or theft. In fact, we were the first to recognize the need to cover such events.

  Grundy understands that there are some instances in which the value of a vehicle will diminish, and it will be impossible for the damage to be fixed through restoration or repairs. In these cases, we might call this the “fine arts value” of the vehicle — where the originality of the vehicle cannot be replicated.

  For example, some cars have been inspired by great restorers who are no longer living; therefore, if their work was destroyed in an accident, the car could never be restored by the original restorer; and, the vehicle would lose significant historical and dollar value. The historical and original value cannot be replaced in such a scenario, as the originality cannot be recreated. Similarly, if original paint or sheet metal was destroyed in an accident, it would be impossible to replace these original items; as a result, the value of the vehicle could be altered. Another instance that might result in diminution of value is if matching-number ID parts are damaged and need to be replaced. The value of “numbers matching” vehicles and originality is ever-increasing.

  A car is considered to be “numbers matching” when the engine and transmission are marked with the same sequence number as the chassis VIN number and the rear axle/differential’s date code and casting number correspond.

  You will find that these rare cars are priced much higher than similar vehicles that do not have matching numbers. If one of these number ID items is destroyed in an accident, the value of the vehicle could be significantly reduced. (Also, depending on the make and model, you may find numbers stamped on parts other than the engine, transmission and rear axle; sometimes the alternator/generator, carburetor, distributor, water pump and heads are stamped. If one of these stamped items, on a “numbers matching” car is destroyed, the value could be diminished.)

  Diminution of value could also be covered if a perfectly restored, low-mileage vehicle was stolen and, when the car was recovered, it was proven by documentation from an expert appraiser that the added mileage significantly altered the value of the vehicle. For example, if a rare collector car that showed just over 200 miles on the odometer was stolen and recovered in great condition, except for the 1000 miles that were added during the thief’s joyride, an appraiser may suggest that the value of the vehicle was lessened (as the car is no longer a super-low mileage vehicle).

  Determining the actual loss in value ultimately requires the report of an expert appraiser, who is hired by the car owner. In order to file a diminution of value claim, it is the responsibility of the owner of the damaged vehicle to supply the insurance company with proof of diminished value.

  If there is in fact a loss in value, resulting from a covered event such as collision or theft, Grundy insurance company indemnifies policyholders for the financial loss. The insured would receive an extra payment in the amount of the dollar value that was determined to have been lost as a result of the covered event in addition to the repair settlement!

  While it is not the insurance company’s job to determine the loss in value, it is their job to cover it. Anything that affects the value of a vehicle could be considered eligible for coverage.

  A few things to look at when discussing the topic of diminution of value:
  1. Read your insurance policy to make certain that you have the coverage. It may be listed under exclusions.
  2. Not all states recognize diminution of value, and the coverage cannot be offered in those states.
  3. If it is determined that you have the coverage, you will want to know if your insurance company has the reputation of taking a responsible approach to such unusual circumstances. One way to gauge a company’s reputation is by referring to AM Best ratings. Grundy only uses A, A+ and A++ rated carriers. These ratings refer to an insurance company’s financial stability and their claims-paying ability.

  When purchasing insurance on a numbers matching or original vehicle, make sure your policy includes this rarely-mentioned but very important coverage!
`;

const lessonSixText = `
  It is well-known that Grundy’s Agreed Value insurance does not make deductions for age of a vehicle or expected “wear and tear” when evaluating a loss. (If anything, we understand that there is a greater likelihood that your collector vehicle’s value will increase over time, as the car and its parts become rarer.) In case of a total loss, a Grundy policyholder is guaranteed the Agreed Value that is established at the inception of their policy.

  As the values of collector vehicles rise, we invite our customers to contact our office to increase the Agreed Value coverage limits on their policies; however, we understand that sometimes customers may not think to increase their vehicle’s coverage, and sometimes the value of a vehicle may appreciate more rapidly than expected.

  With an ever-changing market, the cost to repair or replace your collector car can change at any time. To protect customers and to offer coverage for the current market value of their vehicles, Grundy’s insurance policies include extra “peace of mind” protection that account for market appreciation and inflation.

  The Collections Policy Alternative
  When a new policy is written, owners need to understand the values of their cars and always insure them for their “current market value.” If unsure of the value of a vehicle, research can be done on recent sales of similar vehicles, and Grundy’s underwriters can be consulted on valuation. Once the value is determined and the Agreed Value is established, the policy is issued accordingly. Thereafter, in cases of very rare cars, a single auction sale can dramatically reestablish the value of a vehicle. This is particularly common in vehicles with extremely limited production and performance or cars with race history.

  Owners are not expected to continually “watch” the market to reevaluate their cars after every similar sale; to protect our customers, the Grundy Collections Policy offers up to 150% of the Agreed Value in the event of a total loss.

  For example, at inception of a policy, an owner and Grundy agreed that their rare Ferrari should be insured for $1 million. Tragically, the car was destroyed in a fire just two months after the policy was issued. At this point, if research revealed that a similar Ferrari in similar condition had sold for $1.2 million, the owner could receive a settlement for the newly established value. (Note that we do not recommend underinsuring your vehicles, and the Collections Policy’s 150% Valuation Clause does not apply if a vehicle is knowingly underinsured at the policy’s inception.)

  The 150% Valuation Clause can apply at any time during a current or future policy renewal, meaning it can be two months (as in our example) or two years later. And, there is no additional premium for this benefit!
`;
  
  const lessonSevenText = `
  If you own a collectible car, you are probably fully vested in the hobby and have put a great deal of time, money, energy, and care into your car. You have probably searched out special parts, mechanics, and even parking spaces for your special ride. With everything that is at stake, are you sure you have the best insurance to protect it? Are you sure that your policy will cover the whole loss on your vehicle if it is stolen or totaled? Most states have mandatory insurance laws so that any vehicle you hit during an accident is covered, but what if it’s you that gets hit? Unless you have adequate comprehensive coverage, the costs to repair your classic may not be fully covered by the other guy’s policy. And just what else should you consider when shopping for collector car insurance?

  You should buy your policy from a reputable insurance company that specializes in collector cars. If you Google “Collector Car Insurance” many of these companies will be listed. You must then do some homework to find out which is best for you. Here are some important things to consider.

  Agreed Value or Actual Cash Value?
  Most standard insurance companies’ vehicle policies are actual value, meaning the car is valued at the base market value minus depreciation. That is standard practice for modern automobiles that most people drive every day. This type of coverage is not appropriate for collector cars, because standard insurance companies do not recognize or understand the value of a collectible car. You need to make sure that the policy you are considering is on an Agreed Value basis, which sets the value of your car up front and does not depreciate the car’s value over time. (See Lesson #1)

  Restricted Mileage or Unlimited Mileage?
  Some insurance companies restrict the amount of driving you can enjoy during a year’s time – some to as little as 2,500 miles per year. Grundy policies feature unlimited mileage for pleasure driving.

  Restricted Usage or Flexible Usage?
  Most insurers restrict the use of classic cars. This means you can’t take it to work or run errands and be covered if you have an accident. Some policies allow hobby-uses only such as touring, parades, and car shows. Grundy wants you to enjoy your car, and allows you to drive your car to work occasionally, as well as going out to dinner and weekend cruising. Contact us if you have questions about how you will be using your car.

  Garage Requirements
  Collector vehicle insurance requires that during the time your vehicle is not in use, it must be kept in a secured enclosed garage. With Grundy Insurance, if you are using the vehicle and are in a remote location overnight, such as on a tour or multi-day car event, your car is covered if you must park it unprotected as in a hotel parking lot.

  Modified or Original
  Some providers restrict coverage to vehicles that are unmodified originals. Grundy Insurance understands modified vehicles and their values very well. In fact, Grundy is the largest insurer of hotrods in the United States!

  Age of the Vehicle
  Grundy insures collector cars of all years. We insure every year of Corvette, and we can cover modern muscle cars as collector cars depending on how they are used. We also insure exotics from historic race cars to the very latest supercars.

  Grundy invented collector car insurance in 1947, and has grown with the hobby. We offer a number of coverages that are time tested to be important to our customers, spare parts coverage, trip interruption, towing & labor costs, and even offer auto show medical reimbursement in the event you become ill or injured at a car show.

  Grundy’s expertise doesn’t end with collector cars. We are experts at protecting collections of all types, both for individuals and also for commercial museums. We insure collections of all types of automobilia, and other types of collections such as wine, watches, toys, firearms and much more. Most homeowner’s insurance policies do not adequately cover high-value collectibles, and if a loss occurs, the collection would most likely not be covered for its full value. Grundy covers collections at their agreed value, just like an automobile collection.

  Make sure any insurance company you are considering has many years of experience insuring collector cars, understands their value, and also understands the value of the other components of your collection hobby. Not to be forgotten, make sure that the underwriting companies behind the policy are top-notch with the financial resources and claims payment history to support the value of your collection. At the end of the day, you want an insurer who understands your needs and will fully support you should the unthinkable happen.
`;

  const lessonEightText = `
  Important factors are often neglected when establishing auto insurance policy limits, causing “coverage gaps” – or holes in your insurance coverage – that leave you lacking the protection you need. Reasons for these gaps include: working with multiple insurance agents, setting unequal liability limits and dealing with a constantly fluctuating market. Grundy Insurance’s Motor Vehicle Program (MVP) addresses each of these areas and offers a solution that “fills the gaps.”

  Work with One Agent
  As a car collector, you may believe that in order to get proper coverage for all of your cars, you need to work with several insurance companies especially if your vehicles fall into a variety of usage categories, such as “daily driver” auto, antique and classic, service vehicle, motorcycle or motor home. You may also believe that you need agents in multiple locations if your vehicles are stored in different states. Both of these presumptions are wrong, and insurance can be much simpler if you work with one agent.

  With Grundy, you make one phone call to one agent when covering all of your motor vehicles through our Motor Vehicle Program.

  Set Equal Liability Limits Across all your Policies
  Working with one agent isn’t only simple, but it also prevents possible confusion that can occur when juggling policies between multiple brokers. That confusion may stem from purchasing policies with inconsistent Bodily Injury liability limits.

  For example: You buy your insurance coverage for your daily auto from Company A and choose $500,000 for bodily injury. Company B insures your motorcycle and without referencing your daily driver policy, they suggest you set your liability limit at $100,000. You insure your two classic cars with Company C that quoted you at a car show with Bodily Injury limits at $300,000. (You bought the policy on the spot, because the price was great.) Now you have three different policies with three different limits.

  If you get into an accident with one of your classics and cause injury to another party that sues you for $500,000, you are surely covered for $300,000 (your limit with Company C). But now you’re left with a $200,000 gap. Lawyers will work with you and your insurance companies and you will most likely max out one policy and maybe go to another and then to another. But why go through this?

  MVP offers consistency, and consistency avoids confusion and adds convenience. With Grundy, you have the same limits across all your auto policies. This includes equal UM/UIM limits, as well.

  While mismatched Bodily Injury liability limits can cause confusion, it is even more important to review your Uninsured/Underinsured Motorist limits to avoid coverage gaps. If you carry a limit of $500,000 for bodily injury on your primary insurance policy and you injure someone, you are covered for $500,000. However, if another driver hits you and injures you in the amount of $500,000—and they are only covered up to $50,000—suddenly you are left with a gap of $450,000. At this point, your Uninsured/Underinsured motorist liability kicks in. Having set an Uninsured/ Underinsured Motorist limit equal to your Bodily Injury limit ($500,000) through MVP, you eliminate the coverage gap and you are fully covered.

  Buy Agreed Value Coverage
  The true values of all your motor vehicles are also fully covered with Grundy’s new program. Standard insurance companies that insure your daily drivers, motor homes, motorcycles and other “non-collector” vehicles do not offer Agreed Value coverage—and without AV, another coverage gap emerges.

  If you are in an accident and protected by an Actual Cash Value policy that standard insurers issue, the insurance company will account for depreciation. (This involves starting with the Cost New and deducting a certain percentage for each year of vehicle age, plus deductions for observed or expected “wear and tear.”) When comparing market value to replacement value, you may find another gap in your coverage – and, sometimes an insurance company will end up paying less than an outstanding loan amount!

  This gap is eliminated when you are covered with Agreed Value. AV policies set the amount that a policyholder will receive and an insurance company will pay in the event of total loss or theft of a vehicle. Since 1947, Grundy has insured antique autos with Agreed Value policies; and with MVP, Grundy extends this coverage to protect all your vehicles, including daily drivers.

  While Agreed Value protects your vehicles from depreciation, the MVP goes beyond what other insurers offer by protecting appreciating vehicles. Have you ever wondered what happens if the value of your car appreciates before you have an opportunity to increase coverage?

  Due to rapid appreciation, the cost to replace or repair your car may be greater than the amount for which you insured the vehicle; but, Grundy fills that gap, too. Never before offered through another insurance program, MVP provides a unique “150% replacement value clause” that states if a loss occurs and the vehicle’s current market value exceeds the coverage limits (the Agreed Value), Grundy’s customer can be reimbursed up to 150% of the insured value.

  Grundy’s MVP fills all coverage gaps by consolidating your exposures and offering broader coverage with equal policy limits, Agreed Value and the added 150% valuation clause. In addition to these unique policy features, MVP also allows for more simplicity and less confusion by providing you with one point of contact for all your auto insurance. Please visit the MVP page to learn about additional coverages.
`;

  const toggleLesson = (lesson: string) => {
    setActiveLesson(activeLesson === lesson ? null : lesson);
  };

  const lessons = [
    {
      id: "lesson1",
      title: "Agreed Value, Actual Cash Value and Stated Amount Insurance",
      content: {
        intro: lessonOneText
      }
    },
    {
       id: "lesson2",
      title: "What is Unsinured And Underinsured Motorist Liability & Uninsured Property Damage Coverage",
      content: {
        intro: lessonTwoText
      }
    },
    {
      id: "lesson3",
      title: "Total Loss Prevention",
      content: {
        intro: lessonThreeText
      }
    },
    {
      id: "lesson4",
      title: "Comprehensive vs. Collision Coverage",
      content: {
        intro: lessonFourText
      }
    },
    {
      id: "lesson5",
      title: "Diminution of Value",
      content: {
        intro: lessonFiveText
      }
    },
    {
      id: "lesson6",
      title: "Market Appreciation and Inflation Protection",
      content: {
        intro: lessonSixText
      }
    },
    {
      id: "lesson7",
      title: "The Right Insurance For YOU",
      content: {
        intro: lessonSevenText
      }
    },
    {
      id: "lesson8",
      title: "Filling the Gap - Motor Vehicle Program",
      content: {
        intro: lessonEightText
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Insurance 101</h1>
            <p className="text-xl text-gray-200">
              Welcome to your insurance information hub! Learn everything you need to know about protecting your valuable assets.
            </p>
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleLesson(lesson.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-[#91202B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{lesson.title}</h3>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          activeLesson === lesson.id ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {activeLesson === lesson.id && (
                    <div className="p-6 border-t border-gray-100">
                      {lesson.content.intro && (
                        <p className="text-gray-600 mb-6 whitespace-pre-line">{lesson.content.intro}</p>
                      )}

                      {lesson.content.sections && (
                        <div className="space-y-6">
                          {lesson.content.sections.map((section, sIndex) => (
                            <div key={sIndex}>
                              <h4 className="font-bold mb-3">{section.title}</h4>
                              {section.description && (
                                <p className="text-gray-600 mb-4">{section.description}</p>
                              )}
                              {section.items && (
                                <ul className="space-y-2">
                                  {section.items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start">
                                      <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {lesson.content.keyPoints && (
                        <ul className="space-y-2">
                          {lesson.content.keyPoints.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {lesson.content.examples && (
                        <div className="bg-gray-50 p-6 rounded-lg mt-6">
                          <h4 className="font-bold mb-4">Examples</h4>
                          <ul className="space-y-2">
                            {lesson.content.examples.map((example, eIndex) => (
                              <li key={eIndex} className="flex items-start">
                                <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                                <span className="text-gray-700">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {lesson.content.features && (
                        <div className="grid md:grid-cols-2 gap-6">
                          {lesson.content.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {lesson.content.keyConsiderations && (
                        <div className="grid md:grid-cols-2 gap-6">
                          {lesson.content.keyConsiderations.map((consideration, cIndex) => (
                            <div key={cIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                              <span className="text-gray-700">{consideration}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {lesson.content.benefits && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold mb-4">Key Benefits</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            {lesson.content.benefits.map((benefit, bIndex) => (
                              <div key={bIndex} className="flex items-start">
                                <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}