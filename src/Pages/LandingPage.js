import React from 'react'
import HeaderSection from '../Section/HeaderSection.js' // import header from Section folder
import BannerSection from '../Section/BannerSection.js'  // import banner from Section folder
import DatagridSection from '../Section/DatagridSection.js' // import capsule data and model popup from section folder
import DynamicData from '../Section/DynamicData.js'  //import dyanmic data table from section folder


export default function LandingPage() {
  return (
    <div>
      {/* Header Section with logo */}
        <HeaderSection />
        {/* end header */}

        {/* Banner Section */}
        <BannerSection />
        {/* end Banner */}

        {/* Capsule data section */}
        <DatagridSection />
        {/* end capsule */}

        {/* Dynamic Data table with filter search pagination */}
        <DynamicData />
        {/* end dynamic data section */}
    </div>
  )
}

