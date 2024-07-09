import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import DashboardLeft from '../components/Dashboard/DashboardLeft'
import DashboardRight from '../components/Dashboard/DashboardRight'
import Brief from '../assets/dashboard/brief.png';
import Message from '../assets/dashboard/message.png';
import Clipboard from '../assets/dashboard/clipboard.png';
import Bookmark from '../assets/dashboard/bookmark.png';
const states = [
  { icon: Brief, alt: 'brief', count: 10, label: 'Invites Jobs', backgroundColor: '#E8F0FB' },
  { icon: Clipboard, alt: 'clipboard', count: 15, label: 'Completed Jobs', backgroundColor: '#F6E9FE' },
  { icon: Message, alt: 'message', count: 5, label: 'Messages', backgroundColor: '#FFE6E6' },
  { icon: Bookmark, alt: 'bookmark', count: 7, label: 'Saved Jobs', backgroundColor: '#E6F2E6' },
];
const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <section  style={{backgroundColor:"#f8fbfe"}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-3 position-sticky top-0">
              <DashboardLeft/>
            </div>
            <div className="col-lg-9 py-5" style={{height:"100vh", overflowY:"scroll" , scrollbarWidth:"none" , paddingTop:"20px" , paddingBottom:"20px" , "-webkit-scrollbar":{display:"none"}}}>
            <DashboardRight states={states} />
      </div>
        </div>
      </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Dashboard
