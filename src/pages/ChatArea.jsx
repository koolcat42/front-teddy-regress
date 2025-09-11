import { MessageCircle, User, Bot, Send } from "lucide-react";

const ChatArea = ({
  currentChat,
  isTyping,
  message,
  setMessage,
  handleKeyPress,
  sendMessage,
  messagesEndRef,
}) => {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {currentChat?.messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Start a conversation
            </h3>
            <p className="text-white/60 max-w-md">
              Ask me anything! I'm here to help with questions, provide
              information, or just have a friendly chat.
            </p>
          </div>
        ) : (
          currentChat?.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 animate-fadeIn ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[80%] ${
                  msg.sender === "user" ? "order-first" : ""
                }`}
              >
                <div
                  className={`p-3 sm:p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-auto"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                </div>
                <p className="text-xs text-white/50 mt-1 px-2">
                  {msg.timestamp}
                </p>
              </div>

              {msg.sender === "user" && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              )}
            </div>
          ))
        )}

        {isTyping && (
          <div className="flex gap-3 animate-fadeIn">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
              <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 sm:p-6 bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="flex gap-2 sm:gap-3 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl 
                text-white placeholder-white/50 focus:outline-none focus:ring-2 
                focus:ring-blue-400 focus:border-transparent transition-all duration-300 
                hover:bg-white/15 focus:bg-white/15 text-sm sm:text-base"
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!message.trim() || isTyping}
            className="px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 
              hover:to-purple-700 text-white rounded-xl transition-all duration-300 
              disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
