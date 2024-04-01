//Types
import { ICardsData } from "../cards.types"

//Assets
import Node from '../../../assets/node.png'
import React from '../../../assets/react.png'
import Redux from '../../../assets/redux.svg'
import Firebase from '../../../assets/firebase.svg'
import Mongo from '../../../assets/mongodb.svg'
import Typescript from '../../../assets/typescript.svg'

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