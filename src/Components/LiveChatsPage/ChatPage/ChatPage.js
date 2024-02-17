import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { io } from 'socket.io-client';
import axios from 'axios';
import SingleMessageItem from './SingleMessageItem';
const ENDPOINT = "https://demeserver.gffex.xyz"; // 
var socket, selectedChatCompare;

const ChatPage = () => {

    const { LoginWithEmail, authUser, selectedChat, setSelectedChat, notification, setNotification, chats, setChats } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);

    socket = io(ENDPOINT);


    useEffect(() => {
        socket.on("recvice_message", (data) => {
            setMessages(oldMessage => [...oldMessage, data]);
            // setMessages([...messages, data]);
        });
    });

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/chat//messgae/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setMessages(data.data);

            })
    }, [])


    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('join_room', authUser?._id);
        // socket.on("connected", () => setSocketConnected(true));
        // socket.on("typing", () => setIsTyping(true));
        // socket.on("stop typing", () => setIsTyping(false));
    }, []);


    const typingHandler = (e) => {
        setNewMessage(e.target.value);
    };

    const sendMessage = async (event) => {
        event.preventDefault();
        const storeData = { message: newMessage, userId: authUser?._id };
        try {

            const config = {
                headers: {
                    'content-type': 'application/json',

                }
            };
            axios.post(`https://demeserver.gffex.xyz/api/chat/messgae/send/${authUser?._id}`, storeData, config)
                .then(async (data) => {
                    event.target.reset();
                    const NewMessages = data?.data?.data
                    if (NewMessages) {
                        await socket.emit("send_message", NewMessages);
                        setMessages([...messages, NewMessages])
                    }


                })
                .catch(error => {

                })


        } catch (error) {

        }
    };




    return (
        <>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card card-bordered">
                                <div className="card-header d-flex align-items-center">
                                    <h4 className="card-title"><strong>Live Chat</strong></h4>

                                </div>


                                <div className="ps-container ps-theme-default ps-active-y pt-3" id="chat-content" style={{ overflowY: "scroll !important", height: "400px !important" }}>


                                    {
                                        messages.length !== 0 ?
                                        messages.reduce((finalArray, current) => {
                                                let obj = finalArray.find((item) => item?._id === current?._id);
                                                if (obj) {
                                                    return finalArray;
                                                }
                                                return finalArray.concat([current]);
                                            }, []).map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleMessageItem data={data} key={data?._id} index={index}></SingleMessageItem>
                                                    );
                                                }
                                            })
                                            :
                                            <tr>
                                                <td className="text-muted text-center" colspan="100%">Data not found</td>
                                            </tr>

                                    }


                                    {/* {messages.map((data, index) => <SingleMessageItem data={data} key={data?._id} index={index}></SingleMessageItem>)} */}



                                    <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                                        <div className="ps-scrollbar-x" tabindex="0" style={{ left: "0px", bottom: "0px" }}></div></div><div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "0px", right: "2px" }}><div className="ps-scrollbar-y" tabindex="0" style={{ top: "0px", right: "2px" }}></div></div></div>
                                <form onSubmit={sendMessage}>
                                    <div className="publisher bt-1 border-light mt-5">
                                        <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                                        <input className="publisher-input" type="text" placeholder="Enter a message.."

                                            onChange={typingHandler} />


                                        <button className="publisher-btn text-info" ><i className="fa fa-paper-plane" type='submit'></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default ChatPage;