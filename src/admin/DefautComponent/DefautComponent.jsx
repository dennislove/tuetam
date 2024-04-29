import React from 'react'
import NewsTable from '../News/NewsTable'
import HeaderComponent from './HeaderComponent'
import Dashboard from './Dashboard'
import FooterComponent from '../Footer/FooterComponent'

function DefautComponent() {
  return (
    <div className=' flex min-h-screen bg-gray-50'>
        <Dashboard/>
        <div className='p-4 ml-80 w-full'>
            <HeaderComponent/>

            <div>
                <NewsTable/>
            </div>
        <FooterComponent/>
        </div>
    </div>
  )
}

export default DefautComponent
