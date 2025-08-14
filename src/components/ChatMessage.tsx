import React from 'react';
import ReactMarkdown from 'react-markdown';

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

  // Function to render content with proper formatting
  const renderContent = (content: string) => {
    if (isUser) {
      // For user messages, just handle newlines
      return content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < content.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    } else {
      // For bot messages, render as markdown
      return (
        <ReactMarkdown
          components={{
            // Custom styling for markdown elements
            p: ({ children }) => <p className="chat-text mb-2 last:mb-0">{children}</p>,
            h1: ({ children }) => <h1 className="chat-text text-xl font-bold mb-2">{children}</h1>,
            h2: ({ children }) => <h2 className="chat-text text-lg font-bold mb-2">{children}</h2>,
            h3: ({ children }) => <h3 className="chat-text text-base font-bold mb-2">{children}</h3>,
            ul: ({ children }) => <ul className="chat-text list-disc list-inside mb-2 space-y-1">{children}</ul>,
            ol: ({ children }) => <ol className="chat-text list-decimal list-inside mb-2 space-y-1">{children}</ol>,
            li: ({ children }) => <li className="chat-text">{children}</li>,
            strong: ({ children }) => <strong className="chat-text font-bold">{children}</strong>,
            em: ({ children }) => <em className="chat-text italic">{children}</em>,
            code: ({ children }) => <code className="chat-text bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
            pre: ({ children }) => <pre className="chat-text bg-gray-100 p-2 rounded text-sm font-mono overflow-x-auto mb-2">{children}</pre>,
            blockquote: ({ children }) => <blockquote className="chat-text border-l-4 border-gray-300 pl-4 italic mb-2">{children}</blockquote>,
            a: ({ children, href }) => <a href={href} className="chat-text text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
          }}
        >
          {content}
        </ReactMarkdown>
      );
    }
  };

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
        <div className="chat-text">
          {renderContent(message.content)}
        </div>
      </div>
    </div>
  );
}
