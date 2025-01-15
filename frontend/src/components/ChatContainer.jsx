import { useEffect,useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageSkelaton from "./skelatons/MessageSkelaton";
import MessageInput from "./MessageInput";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const { messages, getMessages, isMessageLoading, selectedUser, subscribeToMessages,unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndREF = useRef(null);
  useEffect(() => {
    if (selectedUser?._id) {
      
      getMessages(selectedUser._id);
      subscribeToMessages();
      return()=>unsubscribeFromMessages();
    }
  }, [selectedUser?._id, getMessages,subscribeToMessages,unsubscribeFromMessages]);
  useEffect(() => {
    if(messageEndREF.current&&messages){
    messageEndREF.current?.scrollIntoView({ behavior: "auto" });}
  },[messages])

  if (isMessageLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkelaton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndREF}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">{formatMessageTime(message.createdAt)}</time>
            </div>
            <div className="chat-bubble flex flex-col ">
             {message.image&&(
            <img
            src={message.image}
            alt="message image"
            className="w-[60px] sm:w-[65px] md:w-[70px] lg:w-[200px] rounded-md mb-2"
          />
          )}
              {message.text && <p>{message.text}</p>}
             
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
