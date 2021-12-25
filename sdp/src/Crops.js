import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Bottleguard from "./images/Crops/Summer/Bottleguard.jpg";
import Brinjal from "./images/Crops/Summer/Brinjal.jpg";
import Chilli from "./images/Crops/Summer/Chilli.jpg";
import Corn from "./images/Crops/Summer/Corn.jpg";
import Paddy from "./images/Crops/Summer/Paddy.jpg";
import Cucumber from "./images/Crops/Summer/Cucumber.jpg";
import Greengram from "./images/Crops/Summer/Greengram.jpg";
import MalabarSpinach from "./images/Crops/Summer/MalabarSpinach.jpg";
import Pumpkin from "./images/Crops/Summer/Pumpkin.jpg";
import WaterMelon from "./images/Crops/Summer/WaterMelon.jpg";
import Barley from "./images/Crops/Winter/Barley.jpg";
import Beans from "./images/Crops/Winter/Beans.jpg";
import Cabbage from "./images/Crops/Winter/Cabbage.jpg";
import Capsicum from "./images/Crops/Winter/Capsicum.jpg";
import Grams from "./images/Crops/Winter/Grams.jpg";
import Greenpeas from "./images/Crops/Winter/Greenpeas.jpg";
import Lettuce from "./images/Crops/Winter/Lettuce.jpg";
import Mustard from "./images/Crops/Winter/Mustard.jpg";
import Radish from "./images/Crops/Winter/Radish.jpg";
import Spinach from "./images/Crops/Winter/Spinach.jpg";
import SwissChard from "./images/Crops/Winter/SwissChard.jpg";
import Wheat from "./images/Crops/Winter/Wheat.jpg";
import Cotton from "./images/Crops/Rainy/Cotton.jpg";
import Gram from "./images/Crops/Rainy/Gram.jpg";
import Millets from "./images/Crops/Rainy/Millets.jpg";
import Oats from "./images/Crops/Rainy/Oats.jpg";
import Oilseed from "./images/Crops/Rainy/Oilseed.jpg";
import Onion from "./images/Crops/Rainy/Onion.jpg";
import Potato from "./images/Crops/Rainy/Potato.jpg";
import Pulses from "./images/Crops/Rainy/Pulses.jpg";
import Rice from "./images/Crops/Rainy/Rice.jpg";
import Sugarcane from "./images/Crops/Rainy/Sugarcane.jpg";
import Tea from "./images/Crops/Rainy/Tea.png";
import Tomato from "./images/Crops/Rainy/Tomato.jpg";
import Arugula from "./images/Crops/Spring/Arugula.jpg";
import Barleys from "./images/Crops/Spring/Barleys.jpg";
import Beetroot from "./images/Crops/Spring/Beetroot.jpg";
import Brocolli from "./images/Crops/Spring/Brocolli.jpg";
import Cauliflower from "./images/Crops/Spring/Cauliflower.jpg";
import Greenpea from "./images/Crops/Spring/Greenpea.jpg";
import Kale from "./images/Crops/Spring/Kale.jpg";
import Lettucefamily from "./images/Crops/Spring/Lettucefamily.jpg";
import Peppers from "./images/Crops/Spring/Peppers.jpg";
import Pumpkins from "./images/Crops/Spring/Pumpkins.jpg";
import Sesame from "./images/Crops/Spring/Sesame.jpg";
import Soybean from "./images/Crops/Spring/Soybean.jpg";
import "./Crops.css";
const Crops = () => {
  // const [id,setId]=useState({})
  const [seasons, setSeason] = useState(Summer)
  // const [isFlipped,setIsFlipped]=useState(false)
  const handleSeason = (season) => {
    setSeason(season);
  }
  //  const handleFlip=(crop)=>{
  //    setIsFlipped(!isFlipped)
  //   //  setId(crop)

  return (
    <div className="Crops">

      <ButtonGroup className="season">
        <Button onClick={() => { handleSeason(Spring) }} style={{
          borderRadius: 10,
          width: 120,
          height: 60,
          padding: "18px 30px",
          fontSize: "16px",
          marginRight: "10px",
          background: "linear-gradient(#f3c006,#fad44d)",
          fontFamily: "CourierNew"
        }} variant="contained" >Spring</Button>
        <Button onClick={() => { handleSeason(Summer) }} style={{
          borderRadius: 10,
          width: 120,
          height: 60,
          padding: "18px 36px",
          fontSize: "16px",
          marginRight: "10px",
          background: "linear-gradient(#f3c006,#fad44d)",
        }} variant="contained">Summer</Button>
        <Button onClick={() => { handleSeason(Rainy) }} style={{
          borderRadius: 10,
          width: 120,
          height: 60,
          padding: "18px 36px",
          fontSize: "16px",
          marginRight: "10px",
          background: "linear-gradient(#f3c006,#fad44d)",
        }} variant="contained" >Rainy</Button>
        <Button onClick={() => { handleSeason(Winter) }} style={{
          borderRadius: 10,
          width: 120,
          height: 60,
          padding: "18px 36px",
          marginRight: "10px",
          fontSize: "16px",
          background: "linear-gradient(#f3c006,#fad44d)",
        }} variant="contained">Winter</Button>
      </ButtonGroup>

      <div className="crop-content">
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}

        {seasons.map(sea =>
        (<div className="card">
          <p id="title">{sea.name}</p>
          <img src={sea.imageUrl} alt={sea.name} />

        </div>
        ))
        }
      </div></div>
    // <div className="card">

    //   <button id="flip" onClick={handleFlip()}>Click to flip</button>
    //   </div>
    //   </ReactCardFlip>
    // </div>


  )

}
const Summer = [
  {
    "name": "Bottleguard",
    imageUrl: `${Bottleguard}`,
    description: ""
  },
  {
    "name": "Brinjal",
    imageUrl: `${Brinjal}`,
    description: "",
  },
  {
    "name": "Chilli",
    imageUrl: `${Chilli}`,
    description: " "
  },
  {
    "name": "corn",
    imageUrl: `${Corn}`,
    description: " ",
  },
  {
    "name": "Cucumber",
    imageUrl: `${Cucumber}`,
    description: " ",
  },
  {
    "name": "Greengram",
    imageUrl: `${Greengram}`,
    description: " ",

  },
  {
    "name": "MalabarSpinach",
    imageUrl: `${MalabarSpinach}`,
    description: " "
  },
  {
    "name": "Paddy",
    imageUrl: `${Paddy}`,
    description: " "
  },
  {
    "name": "Pumpkin",
    imageUrl: `${Pumpkin}`,
    description: " "
  },
  {
    "name": "Watermelon",
    imageUrl: `${WaterMelon}`,
    description: "",
  }


]
const Spring = [
  {
    "name": "Arugula",
    imageUrl: `${Arugula}`,
    description: " Arugula is a leafy annual vegetable in the family Brassicaceae which is grown as a salad green. The arugula plant possesses a rosette of basal leaves which grow low to the ground. The leaves of the plant are deeply lobed and dull green in color. It is typically ready for harvest between 35 and 45 days after sowing. To harvest, simply pull the outer leaves off near the base of the plant, leaving the inner leaves to continue to grow. This Plants look a little like dandelions, but are bigger and more open. Leaves grow best in cool weather. Leafy plants grow 6 to 12 inches tall while in the harvest stage."
  },
  {
    "name": "Barley",
    imageUrl: `${Barleys}`,
    description: "Barley, Hordeum vulgare, is an edible annual grass in the family Poaceae grown as a cereal grain crop. It is a tall grass with a hairy stem which stands erect and produces spikelets at the head.Barley plants are freely tillering and typically possesses 1–6 stems. Most barley cultivars will grow to be 2 to 3 feet tall. The cultivated barley is an annual grass and grown as a rabi crop in Indian plains with a crop duration of 130-150 days."
  },
  {
    "name": "Beetroot",
    imageUrl: `${Beetroot}`,
    description: "Beetroot is one of several cultivated varieties of Beta vulgaris grown for their edible taproots and leaves (called beet greens); they have been classified as B. vulgaris subsp. It depends on the weather conditions and the size of beetroot that a person  prefer. But the rule of thumb is around seven weeks for baby beets and 12 weeks for a full-size root. They will grow 12-18 inches tall and 18-24 inches wide"
  },
  {
    "name": "Brocolli",
    imageUrl: `${Brocolli}`,
    description: "Broccoli is a cool-season plant that loves soaking the sun. Broccoli is rich in nutrients and worth growing in your gardens. It is a great source of Vitamin-A, folic acid, potassium, fiber, and iron. It is so nutritious that it is also referred to as “Crown Jewel Of Nutrition”. broccoli will be ready for harvest 55-85 days after seeding. When the broccoli heads are firm and tight, cut them off with a sharp knife.Broccoli plants grow upright, often reaching a height of 2 1/2 feet."
  },
  {
    "name": "Cauliflower",
    imageUrl: `${Cauliflower}`,
    description: "Cauliflowers are annual plants that reach about 0.5 metre (1.5 feet) tall and bear large rounded leaves that resemble collards.As desired for food, the terminal cluster forms a firm, succulent “curd,” or head, that is an immature inflorescence (cluster of flowers). Cauliflower takes nearly 80 days before it is ready to harvest. When the head is about 3 inches in diameter.The plant should be ready to harvest about a week or two after blanching."
  },
  {
    "name": "Greenpea",
    imageUrl: `${Greenpea}`,
    description: "Green Peas, also popularly known as garden peas is one of the vegetable crops in India and basically this crop is cultivated for its green pods. Green peas belong to Leguminaceae family. Most pea plants will produce to a maximum height of about 3 feet. Check seed variety for the plant height. You can need to cut the bottom of it if your container depth is shallow. Harvesting time depends on the variety of peas sowed. For early variety may be harvested in 40 to 60 days, mid season crop can be harvested in 75 days and Late season crop can be harvested in 100 days."
  },
  {
    "name": "Kale",
    imageUrl: `${Kale}`,
    description: "Kale is one of the most popular and nutritious vegetables around the world, and its popularity is steadily increasing in India. The Scientific name of Kale is Brassica oleracea; it belongs to the same species of Cabbage, Broccoli, and Cauliflower, but it does not form any heads. It grows from 1-2 feet tall and wide.Most kale varieties are ready to be harvested within 70-95 days if sown directly with seed and 55-75 days from transplanting method."
  },
  {
    "name": "Lettucefamily",
    imageUrl: `${Lettucefamily}`,
    description: "Lettuce (Lactuca sativa) is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled. It grows from 6-12 inches  and lettuce grows fairly quickly. Leaf varieties reach maturity in 30 days but can be harvested as soon as they reach the desired size. Other types of lettuce require 6 to 8 weeks to reach full harvest size."
  },
  {
    "name": "Peppers",
    imageUrl: `${Peppers}`,
    description: "black pepper, (Piper nigrum), also called pepper, perennial climbing vine of the family Piperaceae and the hotly pungent spice made from its fruits. The black pepper plant is a woody climber and may reach heights of 10 metres (33 feet) by means of its aerial roots. Its broad shiny green leaves are alternately arranged. Most sweet peppers mature in 60-90 days; hot peppers can take up to 150 days. Keep in mind, however, that the number of days to maturity stated on the seed packet refers to the days after transplanting until the plant produces a full-sized fruit."
  },
  {
    "name": "Pumpkin",
    imageUrl: `${Pumpkins}`,
    description: "Pumpkin belongs to the family Cucurbitaceae and is grown primarily as a vegetable or ornamental plant. Pumpkin plants are short lived annual or perennial vines with branching tendrils and broad lobed leaves. The plant produces large yellow or orange flowers and a pepo fruit (berry with a thick rind) known as a pumpkin. Generally, pumpkins take 90-120 days to mature after seeds are planted, depending on the variety. Pumpkins are ripe when they are fully colored and have a hard rind and woody stem. Although some pumpkins grow on long vines that extend more than 20 feet, there are compact varieties that fit nicely in smaller gardens."
  },
  {
    "name": "Sesame",
    imageUrl: `${Sesame}`,
    description: "Sesame, (Sesamum indicum), also called benne, erect annual plant of the family Pedaliaceae, grown since antiquity for its seeds, which are used as food and flavouring and from which a prized oil is extracted. The aroma and taste of sesame seed are mild and nutlike. It grows upto 5-6 feet.Sesame is usually ready for harvesting between 90 to 130 days after planting. Sesame is usually ready for harvesting between 90 to 130 days after planting."
  },
  {
    "name": "Soybean",
    imageUrl: `${Soybean}`,
    description: "The soybean is an erect branching plant and can reach more than 2 metres (6.5 feet) in height. The self-fertilizing flowers are white or a shade of purple. Seeds can be yellow, green, brown, black, or bicoloured, though most commercial varieties have brown or tan seeds, with one to four seeds per pod. Soya beans must have warm soil to germinate and grow. Poke holes into a cultivated bed or row to plant soybean seeds about 5 cm (2in) apart and 1 cm (1/2in) deep. Thin to 15 cm (6in) apart in all directions. Soybeans for shelling and fresh use are ready for harvest 45 to 65 days after sowing. Dry soybeans require 100 or more days to reach harvest.",
  }

]
const Winter = [
  {
    "name": "Barley",
    imageUrl: `${Barley}`,
    description: " ",
  },
  {
    "name": "Beans",
    imageUrl: `${Beans}`,
    description: " "
  },
  {
    "name": "Cabbage",
    imageUrl: `${Cabbage}`,
    description: ""
  },
  {
    "name": "Capsicum",
    imageUrl: `${Capsicum}`,
    description: ""
  },
  {
    "name": "Grams",
    imageUrl: `${Grams}`,
    description: " "
  },
  {
    "name": "Greenpeas",
    imageUrl: `${Greenpeas}`,
    description: " "
  },
  {
    "name": "Lettuce",
    imageUrl: `${Lettuce}`,
    description: ""
  },
  {
    "name": "Mustard",
    imageUrl: `${Mustard}`,
    description: ""
  },
  {
    "name": "Radish",
    imageUrl: `${Radish}`,
    description: " "
  },
  {
    "name": "Spinach",
    imageUrl: `${Spinach}`,
    description: ""
  },
  {
    "name": "Swiss Chard",
    imageUrl: `${SwissChard}`,
    description: ""
  },
  {
    "name": "Wheat",
    imageUrl: `${Wheat}`,
    description: " "
  }

]
const Rainy = [
  {
    "name": "Cotton",
    imageUrl: `${Cotton}`,
    description: ""
  },
  {
    "name": "Grams",
    imageUrl: `${Gram}`,
    description: ""
  },
  {
    "name": "Millets",
    imageUrl: `${Millets}`,
    description: ""
  },
  {
    "name": "Oats",
    imageUrl: `${Oats}`,
    description: ""
  },
  {
    "name": "Oilseed",
    imageUrl: `${Oilseed}`,
    description: ""

  },
  {
    "name": "Onion",
    imageUrl: `${Onion}`,
    description: "",
  },
  {
    "name": "Paddy",
    imageUrl: `${Rice}`,
    description: ""
  },
  {
    "name": "Potato",
    imageUrl: `${Potato}`,
    description: "",
  },
  {
    "name": "Pulses",
    imageUrl: `${Pulses}`,
    description: ""
  },
  {
    "name": "Sugarcane",
    imageUrl: `${Sugarcane}`,
    description: ""
  },
  {
    "name": "Tea",
    imageUrl: `${Tea}`,
    description: ""
  },
  {
    "name": "Tomato",
    imageUrl: `${Tomato}`,
    description: ""
  }
]
export default Crops;