import React from 'react';
import about from "./images/about2.jpg";
import "./AboutUs.css";
import { Card } from '@material-ui/core';
import { FormatAlignCenter } from '@material-ui/icons';
export default function AboutUs() {
  return (
    <div className="about">

      <div
        class="background"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",

        }}
      >

        <div id="quote">
          <p>When tillage begins, other arts follow. The farmers, therefore, are the founders of human civilization.</p>
        </div>

      </div>
      <div className="card">
        <p style={{ color: "white" }}> From our research we have procured that Agriculture in India is still being practised with
          traditional techniques which includes huge amount of time and human labour creating
          dependencies in their work.  Rapid growth in agriculture is essential not only for self-reliance
          but also to earn valuable foreign exchange. It is envisaged to make available relevant
          information and services to the farming community and private sector through the
          use of information and communication technologies and to supplement the existing delivery
          channels provided to hand in various modernized techniques and tools which are already been
          put through in many countries(like USA,France,UK, Australia etc.). This Farmers’ Portal is an
          endeavour to create one stop shop for meeting all informational needs and methods
          relating to Agriculture.

        </p>
        <h3 style={{ color: "white" }}>This website waves you with the following features:</h3>
        <ol style={{ color: "white" }}>
          <li>A user will be able to get advices regarding implementations of modern practices  </li>
          <li>You can easily contact with the experts through the details and handle the unexpected
            changes across your fields.</li>
          <li>You can visualize the procedures of utilizing current agricultural innovations(Tools)</li>
          <li>Guided information supporting seasonal crops and soil conditions.(fertility,nutrients,climate)</li>
        </ol>
      </div>
    </div>
  )
}
