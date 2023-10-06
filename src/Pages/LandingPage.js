import React from 'react'
import HeaderSection from '../Section/HeaderSection.js'
import BannerSection from '../Section/BannerSection.js'
import DatagridSection from '../Section/DatagridSection.js'
import DynamicData from '../Section/DynamicData.js'


export default function LandingPage() {
  return (
    <div>
        <HeaderSection />
        <BannerSection />
        <DatagridSection />
        <DynamicData />
    </div>
  )
}

