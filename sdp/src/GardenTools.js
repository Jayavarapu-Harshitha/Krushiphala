import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import Gardenhoeimg from "./images/Tools/GardenTools/Gardenhoe.png";
import Gardenshearimg from "./images/Tools/GardenTools/Gardenshear.jpg";
import Spadeimg from "./images/Tools/GardenTools/Spade.jpg";
import Hedgeshearimg from "./images/Tools/GardenTools/Hedgeshear.jpg";
import Rakeimg from "./images/Tools/GardenTools/Rake.jpg";
import Secateurimg from "./images/Tools/GardenTools/Secateur.jpg";
import "./Tools.css";
export const GardenTools = () => {

  const [change, Setchange] = useState(Gardenhoe)

  return (
    <div className="tools">

      <div className="GardenTools">

        <Button variant="contained" color="primary" onClick={() => Setchange(Gardenhoe)}>Garden Hoe</Button>
        <Button variant="contained" color="primary" onClick={() => Setchange(Secateur)}>Secateur</Button>
        <Button variant="contained" color="primary" onClick={() => Setchange(Rake)}>Rake</Button>
        <Button variant="contained" color="primary" onClick={() => Setchange(Spade)}>Handtrowel</Button>
        <Button variant="contained" color="primary" onClick={() => Setchange(Gardenshear)}>Gardenshear</Button>
        <Button variant="contained" color="primary" onClick={() => Setchange(Hedgeshear)}>Hedgeshear</Button>
      </div>
      <Card className="tool-info" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
        <div>
          <img className="image" src={change[0].imageUrl} alt={change[0].name} /><br />
        </div>
        <div className="name">{change[0].name}</div><br />
        <div className="description">{change[0].Description}</div>
        <div className="Usage">
          <p>Usage:</p>
          <ul>
            {
              change[0].Usage.map(t => <li>{t}</li>)

            }
          </ul>
        </div>
      </Card>


    </div>
  );

}


export const Gardenhoe =
  [
    {
      name: "Garden hoe",
      imageUrl: `${Gardenhoeimg}`,
      Description:
        " A long handle with a paddle and blade at the end that is useful for cultivating the garden soil and carrying out weeding operations. ",
      Usage: [
        "Instead of sinking the blade into the ground, lifting up dirt, and throwing it somewhere, you hack at the ground and draw the loosened dirt towards you.",
        "For the removal of  weeds that you can’t simply dig out of the ground, a grub hoe is a great way to kill them without using herbicides",
        "A  perfect tool for the job. Not only is it good for digging, but you can push on it to pry roots upward.",
        "It's an especially great option for raised bed gardens, where garden plants and weeds co-exist in tight spaces."
      ],

    }
  ]

export const Secateur =
  [
    {
      name: "Secateur",
      imageUrl: `${Secateurimg}`,
      Description: "Meant for cutting branches, de‑shooting, disbudding, cutting of scion sticks, defoliation of leaves from the sticks, topping‑off small trees, etc.",
      Usage: [
        "Secateurs are type of shears used to prune the thick branches of shrubs and trees.",
        "Some designs have rotating handles to reduce strain when being used repetitively while some have longer handles to extensively reach certain parts of a plant and easily cut them.",
        "This cutting through sappy stems not only clogs up the blades but also blunts them over time",
        "Seed in gardening, arboriculture, farming, flower arranging, and nature conservation, where fine-scale habitat management is required."
      ],
    }
  ]

export const Rake =
  [
    {
      name: "Rake or garden rake",
      imageUrl: `${Rakeimg}`,
      Description: "used for breaking up the soil surface intoa fine tilth, ready for sowing and collecting weeds and stones",
      Usage: [
        "Often used to push or brush together cut grass, loose soil, gravel or debris.",
        "Used for leveling and spreading of soil surface after hoeing",
        "used for the removal of stones and weed from seed bed and  for covering vegetable seed when they are broadcast",
        "Used to break up soil lumps into finer particles"
      ],

    }
  ]
export const Spade =
  [
    {

      name: "Handtrowel",
      imageUrl: `${Spadeimg}`,
      Description: " used for digging or turning over the soil, making bunds in the field and small plots, etc.",
      Usage: [
        "Used for digging holes for plants, edging the beds or lawns, dividing shrubs, or moving small amounts of dirt",
        "This tool is used for light cultivation not earth moving, and the shape of the blade helps cut sod",
        "Reshape beds and digging out deeper planting holes",
        "Helps measure the planting hole depth, which you can quickly compare to the depth of the plant container or rootball to ensure your depth is just right."
      ]
    }
  ]
export const Hedgeshear =
  [
    {

      name: "HedgeShear",
      imageUrl: `${Hedgeshearimg}`,
      Description: "used for performing various garden operations like pruning, cutting and trimming of hedge and shrubs",
      Usage: [
        "Used for cutting Any Small Branches",
        "Used for creating and Maintaining a Formal Hedge",
        "Pruning Branches After Flowering and deadheading",
        "Used for thinning Shrubs and cutting back perennials",
        "Cutting Lawn Edges.Cutting Thin or Soft Trimmings Smaller for Composting"

      ],
    }
  ]
export const Gardenshear =
  [
    {

      name: "Gardenshear",
      imageUrl: `${Gardenshearimg}`,
      Description: "used for trimming and side‑dressing of the lawn",
      Usage: [
        "These hears make clean cuts while anvil shears tend to crush stems and branches.",
        "These shears are better for getting into tight spots and allow closer cuts than anvil shears.",
        "These shears are good for cutting flowers or softer, tender branches without harming the tender tissue",
        "These boast straight blades to cut down on dead stems and branches. They’re ideal for removing twigs and branches "
      ],
    }
  ]
export default GardenTools;