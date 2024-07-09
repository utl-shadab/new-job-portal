import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DashboardLeft from './DashboardLeft'
import ChatIcon from '../../assets/dashboard/chaticon.png'
import ChatIcon2 from '../../assets/dashboard/chaticon2.png'
import ChatIcon3 from '../../assets/dashboard/chaticon3.png'
import ChatIcon4 from '../../assets/dashboard/chaticon4.png'
import ChatIcon5 from '../../assets/dashboard/chaticon5.png'


const Message = () => {
    const [selectedChat, setSelectedChat] = useState('HCL');
    const [searchTerm, setSearchTerm] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [chats, setChats] = useState({
        HCL: [
            { sender: 'HCL', time: '10:30 AM', message: "Hi Jack! I'm doing well, thanks. Can't wait for the weekend!" },
            { sender: 'Jack Raymonds', time: '10:30 AM', message: "I know, right? Weekend plans are the best. Any exciting plans on your end?" },
        ],
        Google: [
            { sender: 'Google', time: '11:00 AM', message: "Hello Jack! How are you today?" },
            { sender: 'Jack Raymonds', time: '11:05 AM', message: "I'm good, thanks! How about you?" },
        ],
        Microsoft: [
            { sender: 'Microsoft', time: '9:00 AM', message: "Good morning, Jack! Are you available for a quick call?" },
            { sender: 'Jack Raymonds', time: '9:05 AM', message: "Good morning! Yes, I am available." },
        ],
        Amazon: [
            { sender: 'Amazon', time: '2:00 PM', message: "Hi Jack! We have an update on your application." },
            { sender: 'Jack Raymonds', time: '2:05 PM', message: "Great! Looking forward to hearing it." },
        ],
    });

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    const chatIcons = [ChatIcon, ChatIcon2, ChatIcon3, ChatIcon4, ChatIcon5];
    const chatIconMap = {
        HCL: ChatIcon,
        Google: ChatIcon2,
        Microsoft: ChatIcon3,
        Amazon: ChatIcon4,
    };

    const filteredChats = Object.keys(chats).filter(chat => {
        return chat.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chats[chat].some(message =>
                message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                message.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
    });

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newChat = { sender: 'Jack Raymonds', time: new Date().toLocaleTimeString(), message: newMessage };
            setChats(prevChats => ({
                ...prevChats,
                [selectedChat]: [...prevChats[selectedChat], newChat]
            }));
            setNewMessage('');
        }
    };
    return (
        <div>
            <div>
                <Navbar />
                <section style={{ backgroundColor: "#f8fbfe" }}>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-3 position-sticky top-0">
                                <DashboardLeft />
                            </div>
                            <div className="col-lg-9 py-3 " style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none", paddingTop: "20px", paddingBottom: "20px", "WebkitScrollbar": { display: "none" } }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="chat-list">
                                            <div className="chat-search-bar">
                                                <input
                                                    type="text"
                                                    placeholder="Search ..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                                <button type="submit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {filteredChats.map((chat, index) => (
                                                <div key={chat} className={`chat-item ${selectedChat === chat ? 'active' : ''}`} onClick={() => handleChatSelect(chat)} style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '20px 0', cursor: 'pointer', backgroundColor: selectedChat === chat ? '#e6f7ff' : 'transparent' }}>
                                                    <div className="chat-avatar" style={{ marginRight: '10px' }}>
                                                        <img src={chatIcons[index % chatIcons.length]} alt={chat} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                                    </div>
                                                    <div className="chat-info" style={{ flex: '1' }}>
                                                        <div className="chat-name" style={{ fontWeight: 'bold' }}>{chat}</div>
                                                        <div className="chat-message" style={{ color: 'gray' }}>We are seeking a talented...</div>
                                                    </div>
                                                    <div className="chat-time" style={{ fontSize: '12px', }}>2:16 PM</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="chat-messages">
                                            <div className="job-application-status" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                                                <span style={{ color: '#333' }}>You applied to this position on 17 April 2024</span>
                                                <button style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
                                                    View job
                                                </button>
                                            </div>
                                            {chats[selectedChat].map((chat, index) => (
                                                <div key={index} className={`chat-message ${chat.sender === 'Jack Raymonds' ? 'sent' : 'received'}`}>
                                                    <div className="chat-avatar">
                                                    <img src={chatIconMap[selectedChat]} alt={chat.sender} />
                                                    <div className="chat-sender" style={{ color: 'blue' }}>{chat.sender}</div>
                                                    </div>
                                                    <div className="chat-bubble">
                                                        <div className="chat-text">{chat.message}</div>
                                                        <div className="chat-time" style={{ color: 'blue', textAlign: 'right', marginTop:  '5px', display:'none' }}>{chat.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        <div className="chat-input">
                                            <input
                                                type="text"
                                                placeholder="Type a message"
                                                value={newMessage}
                                                onChange={(e) => setNewMessage(e.target.value)}
                                            />
                                            <button onClick={handleSendMessage}>
                                            <i class="fa-solid fa-paper-plane"></i>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Message
