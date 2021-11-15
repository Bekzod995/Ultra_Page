import React from 'react'
import { homeObjeFour,  homeObjeThree, homeObjeTwo } from './Data'
import {InfoSection,Pricing} from '../../components'

function HomePage() {
    return (
        <>
        <InfoSection {...homeObjeTwo}/> 
        <InfoSection {...homeObjeThree}/>
        <Pricing/> 
        <InfoSection {...homeObjeFour}/> 
        </>
    )
}

export default HomePage
