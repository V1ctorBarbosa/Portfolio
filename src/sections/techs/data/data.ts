//Types
import { ICardsData } from "../techs.types"

//Assets
import Node from '../../../assets/node.png'
import React from '../../../assets/react.png'
import Redux from '../../../assets/redux.png'
import Firebase from '../../../assets/firebase.png'
import Mongo from '../../../assets/mongo.png'
import Typescript from '../../../assets/typescript.png'

export const cardsData: ICardsData[] = [
    {
        image: Typescript,
        name: 'Typescript'
    },
    {
        image: React,
        name: 'React'
    },
    {
        image: Redux,
        name: 'Redux'
    },
    {
        image: Mongo,
        name: 'MongoDB'
    },
    {
        image: Firebase,
        name: 'Firebase'
    },
    {
        image: Node,
        name: 'Node'
    }
]