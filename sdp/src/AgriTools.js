import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import {styled} from "@material-ui/styles";
import { Card } from "@material-ui/core";
import ClodCrusherimg from "./images/Tools/SeedBedtools/ClodCrusher.jpg";
import ReactPlayer from "react-player";
import ClodSortingimg from "./images/Tools/SeedBedtools/ClodSorting.jpg";
import CompactionandConsolidationimg from "./images/Tools/SeedBedtools/ConsolidationandCompaction.jpg";
import Smootheningimg from "./images/Tools/SeedBedtools/Smoothening.jpg";
import "./Tools.css"
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 25,
  boxShadow: '0 3px 5px 2px rgba(127,255,212, .3)',
  color: 'white',
  height: 48,
  padding: '20 30px',
});

export const AgriTools = () => {

  const [change, Setchange] = useState(ClodSorting)

  return (
    <div className="tools">
      
        <div className="AgriTools">
         
          <MyButton variant="contained" color="default" onClick={() => Setchange(Clodsizereduction)}>Clod size reduction</MyButton>
          <MyButton variant="contained" color="default" onClick={() => Setchange(ClodSorting)}>Clod sorting</MyButton>
          <MyButton variant="contained" color="default" onClick={() => Setchange(Compactionandconsolidation)}>Compactionandconsolidation</MyButton>
          <MyButton variant="contained" color="default" onClick={() => Setchange(Smoothening)}>Smoothening</MyButton>
     
          </div>  
          <Card className="tool-info" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div>
            <img className="image"  src={change[0].imageUrl} alt={change[0].name}/><br />
            </div>
            <div className="name">{change[0].name}</div><br />
            <div className="description">{change[0].Description}</div>
            <div className="Usage">
             <p><b><u>Usage:</u></b></p>
              <ul>
              {
                change[0].Usage.map(t => <li>{t}</li>)

              }
              <div className="guide-video">
                <ReactPlayer id="video" style={{width:"350",height:"300",textAlign:'center',paddingInlineStart:"150px"}}
                 url={change[0].videoUrl}>
                </ReactPlayer>
              </div>
              </ul>

            </div>
          </Card>
       
      
    </div>
  );

}


export const Clodsizereduction =
  [
    {
      name: "Clod Crusher",
      imageUrl: `${ClodCrusherimg}`,
      Description:
        "A clod crusher behind the cultivator was provided to break the clods and to develop the seed bed having fine land levelled tilth and design specification",
      Usage: [
        "Cutting and levelling of big clods during ploughing",
        "Faster drying out of soil enables early preparation of soil for sowing",
        "It prepares soil for the subsequent use of active and passive equipment for the soil pre-sowing preparation", ,
        "The levelled winter furrow enables timely additional spring fertilising",
        "It provides the best grounds for the spring shallow cultivation of soil as it.",
        "Keeps the same soil structure and ensures good water soil management.",
        "This equipment can be agregated with ploughs of many different brands,shearbolt or non-stop protected ones",

      ],
      videoUrl:"https://www.youtube.com/watch?v=rygJwLHjmMg"

    }
  ]

export const ClodSorting =
  [
   {
     name:"ClodSorting",
     imageUrl:`${ClodSortingimg}`,
     Description: "Operation of tools with narrow tines such as comb harrow and spike tooth harrow, in loosened soil, produces a sorting effect, bringing larger clods and aggregates on surface",
     Usage:[
       "Narrow tines operating in loosened conditions tend to bring larger clods to the surface and cause fine material to move down the profile under gravity without overdoing it.",
       "This effect can be used to some advantage in combination tillage operations by bringing large clods to the surface immediately prior to breaking them.",  
       "Power-driven rotary cultivators produce a more even distribution of clod sizes throughout the working depth.",
       "Implements that incorporate a metal hood behind the rotor, to increase clod breakage through impact have a tendency to leave a layer of fine material at the surface."
      
     ],
     videoUrl:"https://www.youtube.com/watch?v=aUL-Fqb0sak"

    }
  ]

export const Compactionandconsolidation =
  [
    {
    name:"Consolidator",
    imageUrl:`${CompactionandConsolidationimg}`,
    Description: "Wide, backward inclined implements compact soil as well as break clods in top surface of soil",
    Usage:[
      "Integrating fragmented land",
      "Performs the necessary works for land leveling and reclamation of other soil properties",
      "Direct compaction at seed depth can best be achieved using narrow press wheels/discs.",
      "Planking is widely used to compacthe soil at the surface"
    ],
    videoUrl:"https://www.youtube.com/watch?v=qjomGaF_zNs"

    }
  ]
export const Smoothening =
  [
    {
      
        name:"Harrow",
        imageUrl:`${Smootheningimg}`,
        Description: "Smoothening of seedbed is required for proper operation of sowing machines, better distribution of irrigation water and quick disposal of excess rainwater",
        Usage:[
          "Smoothening can be best achieved by using wide backward inclined blades, such as levelling boards, floats",
          "It is used for deep tillage of the soilby breaking up and smoothening the hard surface to provide a tilth of soil structure, which is suitable for the sowing of seeds",
          "It breaks the hard pan developed below the soil surface.",
          "It improves drainage in water stagnant soils."
        ],
        videoUrl:"https://www.youtube.com/watch?v=DEC8ofL0PtY"

    }
  ]
export default AgriTools;