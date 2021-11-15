import React from 'react'
import { homeObjeFour, homeObjeOne, homeObjeThree, homeObjeTwo } from './Data'
import {InfoSection,Pricing} from '../../components'

function HomePage() {
    return (
        <>
        <InfoSection {...homeObjeOne}/> 
        <InfoSection {...homeObjeTwo}/> 
        <InfoSection {...homeObjeThree}/>
        <Pricing/> 
        <InfoSection {...homeObjeFour}/> 
        </>
    )
}

export default HomePage
