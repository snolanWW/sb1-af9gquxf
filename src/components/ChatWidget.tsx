import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronDown } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    setMessage('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#91202B] text-white p-4 rounded-full shadow-lg hover:bg-[#7a1b24] transition-colors z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-hidden ${
          isMinimized ? 'h-14' : 'h-[500px]'
        }`}
        style={{ width: '350px' }}
      >
        {/* Header */}
        <div 
          className="bg-[#91202B] text-white p-4 flex justify-between items-center cursor-pointer"
          onClick={toggleChat}
        >
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="font-semibold">Chat with Grundy</span>
          </div>
          <div className="flex items-center space-x-2">
            <ChevronDown className={`w-5 h-5 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
            <button onClick={(e) => { e.stopPropagation(); closeChat(); }}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        <div className={`flex flex-col h-[calc(500px-56px)] ${isMinimized ? 'hidden' : ''}`}>
          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
              <p className="text-sm">
                Hello! How can I help you today? I'm here to assist with any questions about our insurance services.
              </p>
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
              />
              <button
                type="submit"
                className="bg-[#91202B] text-white p-2 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}