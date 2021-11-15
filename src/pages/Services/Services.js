import React from 'react'
import { homeObjeFour } from './Data'
import {InfoSection,Pricing} from '../../components'

function HomePage() {
    return (
        <>
        
        <Pricing/> 
        <InfoSection {...homeObjeFour}/> 
        </>
    )
}

export default HomePage
