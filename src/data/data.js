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

// menu
import dish1 from '../../assets/img/dishes/d1.jpg';
import dish2 from '../../assets/img/dishes/d2.jpg';
import dish3 from '../../assets/img/dishes/d3.jpg';
import dish4 from '../../assets/img/dishes/d4.jpg';
import dish5 from '../../assets/img/dishes/d5.jpg';
import dish6 from '../../assets/img/dishes/d6.jpg';
import dish7 from '../../assets/img/dishes/d7.jpg';
import dish8 from '../../assets/img/dishes/d8.jpg';

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

export const instaImage = () => {
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

export const menuItems = [
  { img: dish1, name: "Карбон ла Віста", description: "вершки, копчений бекон, сир Пармезан", price: "99" },
  { img: dish2, name: "Паста 4 сира", description: "сир камамбер, сир дор-блю, сир брі, сир пармезан", price: "99" },
  { img: dish3, name: "Паста Болоньєзе", description: "рагу болоньєзе зі свино-яловичим фаршем, сир Пармезан", price: "99" },
  { img: dish4, name: "Паста з лісовим гірком та горгонзолою", description: "вершки, горгонзола, фетучіне паста", price: "99" },
  { img: dish5, name: "Паста з грибами, куркою та вершковим соусом", description: "гриби гливи, курка, печінка", price: "99" },
  { img: dish6, name: "Паста з морепродуктами", description: "соус А-ля карбонара вершковий, вино, часник, перець чилі, мікс морепродуктів", price: "159" },
  { img: dish7, name: "Паста орзо з морепродуктами", description: "масло, соус песто, чорнослойка, цитрусова восміжога", price: "139" },
  { img: dish8, name: "Чорна паста з тигровими креветками", description: "соус вино білое/вершки класік, вино, часник, чилі, тигрові креветки", price: "159" },
];