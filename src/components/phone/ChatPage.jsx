import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, MapPin, Clock } from 'lucide-react';
import { mockChats } from './mockData';

function ChatList({ onSelectChat }) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="h-11 bg-white flex items-center justify-center border-b border-gray-100 shrink-0">
        <span className="text-sm font-semibold">消息</span>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {mockChats.map((chat) => (
          <motion.div
            key={chat.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectChat(chat)}
            className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-50 cursor-pointer active:bg-gray-50"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl shrink-0">
              {chat.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{chat.user}</span>
                <span className="text-[10px] text-gray-400">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">{chat.lastMsg}</p>
            </div>
            {chat.unread > 0 && (
              <span className="w-4.5 h-4.5 bg-danger text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">
                {chat.unread}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChatRoom({ chat, onBack }) {
  const [messages, setMessages] = useState(chat.messages);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: 'me', text: input.trim(), time: '刚刚' }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      className="flex flex-col h-full bg-gray-100"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {/* 顶部 */}
      <div className="h-11 bg-white flex items-center px-3 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="flex items-center gap-1 text-primary bg-transparent border-none cursor-pointer text-sm">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="flex-1 text-center text-sm font-semibold">{chat.user}</span>
        <div className="w-6" />
      </div>

      {/* 消息列表 */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg, i) => {
            if (msg.from === 'meetup') {
              return (
                <motion.div
                  key={i}
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-primary/20 w-full max-w-[85%]">
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {msg.text}
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {msg.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {msg.time}
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100 text-[10px] text-warning font-medium">
                      {msg.status}
                    </div>
                  </div>
                </motion.div>
              );
            }

            const isMe = msg.from === 'me';
            return (
              <motion.div
                key={i}
                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                    isMe
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                  }`}
                >
                  {msg.text}
                  <div className={`text-[9px] mt-1 ${isMe ? 'text-white/60' : 'text-gray-400'}`}>
                    {msg.time}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* 输入框 */}
      <div className="bg-white border-t border-gray-100 p-2 flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="输入消息..."
          className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-xs outline-none border-none"
        />
        <button
          onClick={handleSend}
          className={`w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors ${
            input.trim() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'
          }`}
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ChatPage({ initialChat = null }) {
  const [selectedChat, setSelectedChat] = useState(initialChat);

  // 当 initialChat 变化时更新
  useEffect(() => {
    if (initialChat) setSelectedChat(initialChat);
  }, [initialChat]);

  return (
    <div className="h-full relative">
      <ChatList onSelectChat={setSelectedChat} />
      <AnimatePresence>
        {selectedChat && (
          <div className="absolute inset-0">
            <ChatRoom chat={selectedChat} onBack={() => setSelectedChat(null)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
