import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import ReactPlayer from "react-player";
import CombineHarvestorimg from "./images/Tools/Machinery/CombineHarvester.jpg";
import RotaryTillerimg from "./images/Tools/Machinery/RotaryTillerimg.jpg";
import Tractorimg from "./images/Tools/Machinery/Tractor.jpg";
import PowerHarrowimg from "./images/Tools/Machinery/PowerHarrow.jpg";
import DroneAgricultureimg from "./images/Tools/Machinery/DroneAgriculture.png";
import Cropdusterimg from "./images/Tools/Machinery/Cropduster.jpg";
import Sprayerimg from "./images/Tools/Machinery/Sprayer.jpg";
import Baleloaderimg from "./images/Tools/Machinery/Baleloader.jpg";
import "./Tools.css";
export const Machinery = () => {

  const [change, Setchange] = useState(Tractor)

  return (
    <div className="tools">

      <div className="Machinery">

        <Button variant="contained" color="secondary" onClick={() => Setchange(CombineHarvestor)}>Combine Harvester</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(RotaryTiller)}>Rotary Tiller</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(Tractor)}>Tractor</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(Sprayer)}>Sprayer</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(PowerHarrow)}>Power Harrow</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(DroneAgriculture)}>Drone Agriculture</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(Cropduster)}>Crop duster</Button>
        <Button variant="contained" color="secondary" onClick={() => Setchange(Baleloader)}>Bale loader</Button>
      </div> <br />
      <Card className="tool-info" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
        <div>
          <img className="image" src={change[0].imageUrl} alt={change[0].name} /><br />
        </div>
        <div className="name">{change[0].name}</div><br />
        <div className="description">{change[0].Description}</div>
        <div className="Usage">
          <p><b><u>Uses:</u></b></p>
          <ul>
            {
              change[0].Usage.map(t => <li>{t}</li>)

            }
          </ul>
        </div>
        <div className="Functionality">
          <p><b><u>Functionality:</u></b></p>
          <ul>
            {
              change[0].Functionality.map(t => <li>{t}</li>)

            }
          </ul>
        </div>
        <div className="guide-video">
          <ReactPlayer id="video" style={{ width: "350", height: "300", textAlign: 'center', paddingInlineStart: "70px" }}
            url={change[0].videoUrl}>
          </ReactPlayer>

        </div>
      </Card>


    </div>
  );

}


export const CombineHarvestor =
  [
    {
      name: "Combine Harvestor",
      imageUrl: `${CombineHarvestorimg}`,
      Description:
        "Machine commonly known as combine simply combines the three major harvesting operations – reaping, threshing, and winnowing into a single process ",
      Usage: [
        "Includes multiple activies such as cutting, hauling or moving the cut crop to threshing location",
        "Cleaning or removing unripe, empty and non-grain materials.",
        "Used for the grain crops to collect seeds or edible part placed at the top of the crops and discarding or leaving below the inedible or chaff part in the field",
        "Can be used at different terrains, increases convinency on water-submerged fields"
      ],
      Functionality: [
        "The header is hydraulically powered to be moved to different heights and angles.",
        "After passing through the header, the crops are pushed into the cutter by a slowly rotating wheel called the reel (or pickup reel). The reel has horizontal bats and vertical tines to get a good grip of the crop stalks.",
        "The cutter bar which runs the entire length of the header is located underneath the reel. Its mowing fingers open and close repeatedly to cut off the crops at their base.",
        "Then the cut crops are moved towards the center of the combine by spinning screws. The crops go up a conveyor to the processing mechanism inside the main part of the combine.",
        "At the center of the combine, a threshing drum beats the cut crops to break and shake the grains away from the stalks.",
        "Then the grains fall through sieves into a collecting tank.",
        "The chaff and stalks pass along conveyors called straw walkers towards the back of the machine."
      ],
      videoUrl: "https://www.youtube.com/watch?v=ZCbeTaqK6Yc"

    }
  ]

export const RotaryTiller =
  [
    {
      name: "Rotary Tiller",
      imageUrl: `${RotaryTillerimg}`,
      Description: "A farm machine which is mainly used to cultivate the land and it works effectively. In terms of maintenance, it is cheaper, economical to use & also requires less space.",
      Usage: [
        "Used to plough the farm by a series of blades that breaks the clods, moisturize the soil and pulverize the soil that helps for soil preparation to grow plants and to get high yield.",
        "Uses a set of blades that spin and break the soil clods and helps to do weeding between the crops. It is used to cause some desired effects such as cutting, breaking, inversion and movement",
        "Loosens the soil by breaking up the soil clods",
        "Preparation of seedbed for sowing",
        "By turning the soil as maximum amount of nutrient available to the plant",
        "Increases the crop yield by maintaining the field",
      ],
      Functionality: [
        "Rotary tiller uses a set of curved tines attached to a rotating shaft that is powered by your tractor’s PTO to dig into your garden soil, churning it into a fine, essentially clod-free seedbed.",
        " You can adjust the working depth of your tiller by adjusting the skid shoes.",
        "The tailgate on your tiller is also adjustable. A more open tailgate will allow larger dirt clods to come out, giving you a slightly coarser soil, and provide a less level surface.",
        "The type of soil you have and what you intend to plant will impact how coarse you want the seedbed to be.",
        "designed to break up hard, compact soil into loose, broken-up dirt that can then be used for planting."

      ],
      videoUrl: "https://www.youtube.com/watch?v=SAVSVazfmcE"

    }
  ]

export const Tractor =
  [
    {
      name: "Tractor",
      imageUrl: `${Tractorimg}`,
      Description: "An engineering vehicle specifically designed to deliver a high tractive effort (or torque) at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture",
      Usage: [
        "Including weed control, leveling, plowing, harrowing, and pulling seed drills.",
        "tractors mainly used for cutting the grass and making the flower beds in your fields",
        "The tractor can also be used for ploughing for initial cultivation of soil in preparation for sowing seed or planting.",
        "It can be used for pushing or pulling agricultural machinery or trailers. This makes the job easier for farmers because manually pushing and pulling machinery can take a lot of time and effort to do and finish."
      ],
      Functionality: [
        "High ground speed gives the ability to clear more property spaces within a single plow route",
        "Tractors have great visibility, meaning safer operations and fewer chances of accidents due to blind spots.",
        "Wide variety of tractor attachments means having the right tool to get the job done without having to “make do” with a less specific attachment.",
        "The cost of renting is lower than other machines because there is such a wide range and availability of tractors making this machine more affordable than others.",
        "Clear brush with rotary or flail mower attachment",
        "Use a backhoe attachment to dig foundations, ditches and ponds. Power a variety of attachments like wood splitters, saws and stump grinders"
      ],
      videoUrl: "https://www.youtube.com/watch?v=lddDWmI5Wjc"


    }
  ]
export const PowerHarrow =
  [
    {

      name: "Power Harrow",
      imageUrl: `${PowerHarrowimg}`,
      Description: "Refines, break and builds even distribution of soil over the entire working width to create a perfect seed bed",
      Usage: [
        "They can be fitted with different types of rear rollers, which help the harrow follow the contours of the ground and enable the working depth to be adjusted.",
        "Power harrows finely break up the soil, refining and evenly distributing it over the entire working width to create a perfect seed bed",
        "Used for secondary tillage after ploughing or subsoiling and can break up even the most compacted ground",
        "They do not invert soil layers, but rather help to maintain the soil’s natural composition, structure and biodiversity.",
        "Used for digging or turning over the soil, making bunds in the field and small plots, etc."
      ],
      Functionality: [
        "Its boron steel long blades help achieve deep tillage in any type of soil.",
        " It reduces the number of tillage operations reducing number of passes, thus help in reducing compaction of soil.",
        " Depth controller is provided for depth control and to level the soil bed.",
        " Self-adjustable side stone deflector is provided for safety by not allowing the stones to scatter.",
        "Its sturdy structure is welded with high thickness plates which make sure that it operates under toughest conditions.",
        " Its Gear Box designed with quality components promises longer life cycle of the implement.",
        " It ensures faster operation and completes function in less time reducing fuel consumption and soil compaction."
      ],
      videoUrl: "https://www.youtube.com/watch?v=Ks_3lwiEDUY"

    }
  ]
export const Sprayer =
  [
    {

      name: "Sprayer",
      imageUrl: `${Sprayerimg}`,
      Description: "A battery sprayers are an agricultural and landscaping device used for spraying liquids such as pesticides, insecticides, herbicides, fungicides, etc., in fields to protect the crop from pest attack and provide crop nutrients.",
      Usage: [
        "Battery sprayers are easy-to-use sprayers that only have a few parts, such as motors, etc.",
        "Battery sprayers tend to spray faster and are cost-effective.",
        "The battery sprayer comes with a speed controller that allows the farmer to control the nozzle’s liquid discharge.",
        "Battery sprayers weigh less than other sprayers, enabling the farmers to carry them while spraying.",
        "Used for spraying chemicals at gardens, farms, and agricultural land."

      ],
      Functionality: [
        "Centrifugal pumps are the most popular type for low-pressure high-volume sprayers. They are durable, simply constructed, and can readily handle wettable powders and abrasive materials",
        "To adjust for spraying with a centrifugal pump (Figure 3), open the boom shut-off valve, start the sprayer and open the throttling control valve until pressure comes up to 10 PSI over the desired spraying pressure.",
        "Then adjust the agitation control valve until good agitation is observed in the tank.",
        "If the boom pressure has dropped slightly as a result of the agitation, readjust the main control valve to bring the pressure up to 10 PSI above spraying pressure. ",

      ],
      videoUrl: "https://www.youtube.com/watch?v=5G2N6lCTbaM"

    }
  ]
export const DroneAgriculture =
  [
    {

      name: "Drone Agriculture",
      imageUrl: `${DroneAgricultureimg}`,
      Description: "An unmanned aerial vehicle used to help optimize agriculture operations, increase crop production, and monitor crop growth.",
      Usage: [
        "Farmers are able to optimize both farm productivity and profitability based on real-time field information thus protecting the environment",
        "Drones collect raw data and translate it with algorithms into useful information that helps in monitoring",
        "Plant counting: plant size, plot statistics, stand number, compromised plots, planter skips)",
        "Plant height: crop height and density",
        "Vegetation indices: leaf area, anomaly detection, treatment efficacy, infestations, phenology",
        "Water needs: damage/drown out ",
        "farmers to optimize the use of inputs (seed, fertilizers, water), to react more quickly to threats (weeds, pests, fungi).",
        "To save time crop scouting (validate treatment/actions taken), to improve variable-rate prescriptions in real time and estimate yield from a field"
      ],
      Functionality: [
        "These are water resistant, operational under any weather conditions",
        "Drones fly over the field and take high resolution pictures.",
        " The data gathered is directly sent to the cloud/software and made available to the customer.",
        "the user can select the information wanted from the images and make different prescription maps depending on the operation the farmer wants to perform on the field"
      ],
      videoUrl: "https://www.youtube.com/watch?v=DpycafXj4hs",

    }
  ]
export const Cropduster =
  [
    {

      name: "Crop duster",
      imageUrl: `${Cropdusterimg}`,
      Description: "A kind of sprayer machine that is used for spraying chemicals at larger areas of farmland spraying pesticides in the form of dust and chemicals to protect the plants and crops.",
      Usage: [
        "Sprays and dusts are used to control insects, mites, and fungous and bacterial diseases of plants; insects, such as lice and flies, on animals; and weeds, by means of chemical weed killers or herbicides",
        "It is designed with container carrying powder that is easy to handle and operated",
        " Due to the function of the fan, the air of the dust regulates and flows in a vertically or horizontally form.",
        "Examples of types of duster are mitra Storm Duster,Cima duster, Plunger type duster,Knapsack type duster"
      ],
      Functionality: [
        "A quality drone and multispectral camera system can detect disease and stress early and to focus on treatment plans",
        "Multispectral data is a key tool that, when combined with other established agronomic methods, enables prescription maps for treatments (fertilizer, herbicide), reducing costs and improving efficiency.",
        "VTOL capability combined with forward flight means larger coverage area than a multicopter in areas that are not well suited for flying a regular fixed-wing drone.",
        "WingtraOne is able to carry high-resolution RGB cameras (42MP) or professional 5-band multispectral cameras and protect these sensors"

      ],
      videoUrl: "https://www.youtube.com/watch?v=P2YPG8PO9JU"

    }
  ]
export const Baleloader =
  [
    {

      name: "Bale loader",
      imageUrl: `${Baleloaderimg}`,
      Description: "A machine designed to automate the process of collecting Bales from the field, transporting them to another location, and storing them in neat stacks.",
      Usage: [
        "These hears make clean cuts while anvil shears tend to crush stems and branches.",
        "These shears are better for getting into tight spots and allow closer cuts than anvil shears.",
        "These shears are good for cutting flowers or softer, tender branches without harming the tender tissue",
        "These boast straight blades to cut down on dead stems and branches. They’re ideal for removing twigs and branches "
      ],
      Functionality: [
        "Arm automatically triggers when a bale of the correct shape is found within a meter or two from the arm itself. You only need to get the arm close enough",
        "It will essentially move the pair of bales further back into the holding box, in order to make room for another pair of bales to be picked up.",
        "The holding box of a Bale Loader is entirely secure - the bales simply cannot fall off during transport, even when driving very roughly",
        "the bales are free-standing, you'll need to carefully drive your Bale Loader forward, to disengage from the bale stacks"

      ],
      videoUrl: "https://www.youtube.com/watch?v=ehVwzKzpuEQ"

    }
  ]
export default Machinery;