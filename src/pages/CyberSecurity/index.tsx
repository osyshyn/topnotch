import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionImage from "../../assets/cyber-security-1sec.svg"

const CyberSecurityPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#252423] px-[80px]'>
      <PageTitle title='Cyber Security'/>

        {/* 1section */}
        <div className='flex  w-full justify-center items-center'>
            <div className='flex flex-col items-start justify-center w-1/2'>
                <h2 className='text-4xl font-bold text-white mb-2'>Partner with Top Notch</h2>
                <p className='text-white'>Don’t leave your business vulnerable. Partner with Top Notch for superior cybersecurity and peace of mind. Protect your organization from the growing threat of cyberattacks and ensure your business’s safety and compliance.</p>
            </div>
            <div className='w-1/2'>
                <img src={SectionImage}/>
            </div>
        </div>

    </div>
  )
}

export default CyberSecurityPage
