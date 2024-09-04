import React from "react";

import delivery from '../assets/img/format-delivery.jpg'
import restaraunt from '../assets/img/format-restaraunt.jpg'
import pickup from '../assets/img/format-pickup.jpg'

// instagram
import inst1 from '../assets/img/inst1.png'
import inst2 from '../assets/img/inst2.png'
import inst3 from '../assets/img/inst3.png'
import inst4 from '../assets/img/inst4.png'
import inst5 from '../assets/img/inst5.png'
import inst6 from '../assets/img/inst6.png'
import inst7 from '../assets/img/inst7.png'
import inst8 from '../assets/img/inst8.png'

export const formatList = () => {
  return {
    formats: [
      {
        name: "Restoraunt",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
        btn: "Book a table",
        img: restaraunt
      },
      {
        name: "Delivery",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
        btn: "Go to menu",
        img: delivery
      },
      {
        name: "Pickup",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
        btn: "Go to menu",
        img: pickup
      }
    ]
  }
}

export const instaImage = ()=>{
  return {
    images: [
      { image: inst1 },
      { image: inst2 },
      { image: inst3 },
      { image: inst4 },
      { image: inst5 },
      { image: inst6 },
      { image: inst7 },
      { image: inst8 },
    ]
  }
}