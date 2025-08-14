import React from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  // Avatar URLs from the example.html
  const botAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuCqsy30THQs_x3NsMVN23jyE8R4Pj_OfvK6XA7IKmPrQ0c4jadYqOlLmWpcjmxlDFYG0nyTC3vAoRsbK53_KlofoMQUJxl6oaUmZCmYxjHt71zw6XDEm6ipU65ZDqa1j7URgUfhxYaXnJ9kpHKQh2gvGiujaAT689eOC0eBsmeLhzrVko-A2oDvOQf5jYX8hStaKwhCThd9lR-mTBPPlCiggOezJ1w_x-Myza-mqtdqelbo_c3nUdVEnpEOesEDdZFuneyPWpI5pw";
  const userAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuDG83S-ezdP8U69NaGLeyHf9o3GmDe0xKafkgDAfnjyU1DTcj3KXn0OoBRCqAc4ipLPrEftfIoiODq7FNvpiIe3mQXTDseusQLPOapLal6s5fWo2hh1kaCiLxA8Iytw4CQFnzMyo2amgwlKM6wDqFqVD7kaj2bAc3VCLx-LrycZW27sTfdvnPJIHFl1K90-mYPKRYuLL9cIt76wm6VEWE5vJu5dcUNunj9yoTkoeya52SHFyECp_5ygCxzCQXD2onQWcsThDKrbfQ";

  return (
    <div className="chat-message">
      <div 
        className="chat-avatar"
        style={{backgroundImage: `url("${isUser ? userAvatar : botAvatar}")`}}
      ></div>
      <div className="chat-content">
        <div className="chat-header">
          <p className="chat-name">{isUser ? 'Student' : 'HarperBot'}</p>
          {message.timestamp && <p className="chat-time">{message.timestamp}</p>}
        </div>
        <p className="chat-text">{message.content}</p>
      </div>
    </div>
  );
}
