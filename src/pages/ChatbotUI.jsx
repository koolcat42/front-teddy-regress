import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const ChatbotUI = () => {
  const [chats, setChats] = useState([{ id: 1, title: "New Conversation", messages: [] }]);
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("chats");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, isTyping]);

  const createNewChat = () => {
    const newId = Date.now();
    const newChat = { id: newId, title: "New Conversation", messages: [] };
    setChats([...chats, newChat]);
    setActiveChat(newId);
  };

  const simulateResponse = (userMessage) => {
    const responses = [
      "That's an interesting question! Let me help you with that.",
      "I understand what you're asking. Here's my perspective on it:",
      "Great question! Based on what you've shared, I'd suggest:",
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    return (
      response +
      " " +
      userMessage.split(" ").reverse().join(" ") +
      "? That's definitely worth exploring."
    );
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    const userMessage = message;
    setMessage("");

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: Date.now(),
                  text: userMessage,
                  sender: "user",
                  timestamp: new Date().toLocaleTimeString(),
                },
              ],
              title:
                chat.messages.length === 0
                  ? userMessage.substring(0, 30) + (userMessage.length > 30 ? "..." : "")
                  : chat.title,
            }
          : chat
      )
    );

    setIsTyping(true);
    setTimeout(() => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChat
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    id: Date.now() + 1,
                    text: simulateResponse(userMessage),
                    sender: "bot",
                    timestamp: new Date().toLocaleTimeString(),
                  },
                ],
              }
            : chat
        )
      );
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const currentChat = chats.find((chat) => chat.id === activeChat);

  // 👇 You can keep your "renderSidebarContent" here and pass it down
  const renderSidebarContent = () => {
    // same switch-case you had before
    return null; // placeholder
  };

  return (
    <div className="flex h-screen gradient-animated">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        createNewChat={createNewChat}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        renderSidebarContent={renderSidebarContent}
      />

      <ChatArea
        currentChat={currentChat}
        isTyping={isTyping}
        message={message}
        setMessage={setMessage}
        handleKeyPress={handleKeyPress}
        sendMessage={sendMessage}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
};

export default ChatbotUI;
