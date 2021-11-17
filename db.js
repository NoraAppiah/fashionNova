import greenImage from './assets/img5.jpg';
import beigeImage from './assets/img6.jpg';
import pinkImage from './assets/img4.jpg';
import lightBlueJean from './assets/img7.jpg';
import mediumBlueJean from './assets/img8.jpg';
import orangeBikini from './assets/img9.jpg';
import blueBikini from './assets/img10.jpg';
import redDrive from './assets/img11.jpg';
import greenDrive from './assets/img12.jpg';

export default {
    items: [
        {
            price: 120,
            name: "Million Reasons",
            shortDesc: "Cross Strap Midi in Beige",
            sizes: ["4", "6", "8"],
            images: [
                {color: "rgb(193, 145,118)", source: beigeImage},
                {color: "rgb(19, 28, 21)", source: greenImage},
            ],
        },
        {
            price: 230,
            name: "Supreme Dream",
            shortDesc: "Supreme Dream Square Neck Mini Dress in Pink",
            sizes: ["4", "6", "8"],
            images: [
                {color: "rgb(176, 110, 113)", source: pinkImage},
                {color: "rgb(193, 145,118)", source: beigeImage},
            ],
        },
        {
            price: 98,
            name: "Back Me Up",
            shortDesc: "CUT OUT BACK WIDE LEG DISTRESSED JEANS IN MEDIUM BLUE WASH",
            sizes: ["4", "6", "8"],
            images: [
                {color: "rgb(163, 181, 192)", source: lightBlueJean},
                {color: "rgb(144, 166,192)", source: mediumBlueJean},
            ],
        },
        {
            price: 50,
            name: "Jorani",
            shortDesc: "HOOP DETAIL BIKINI TOP IN BLUE",
            sizes: ["4", "6", "8"],
            images: [
                {color: "rgb(240, 149, 72)", source: orangeBikini},
                {color: "rgb(183, 215, 232)", source: blueBikini},
            ],
        },
        {
            price: 50,
            name: "Drive",
            shortDesc: "SEAMLESS V NECK SPORTS BRA IN RED",
            sizes: ["4", "6", "8"],
            images: [
                {color: "rgb(159, 68, 76)", source: redDrive},
                {color: "rgb(159, 169, 149)", source: greenDrive},
            ],
        },
    ]
}