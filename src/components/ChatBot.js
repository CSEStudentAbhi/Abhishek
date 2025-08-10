
import React, { useState, useRef, useEffect } from 'react';

const ChatBot = ({ autoOpen = false }) => {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Abhishek's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestionQuestions = [
    "Tell me about Abhishek's skills",
    "Tell me about his Project?",
    "How can I contact Abhishek?",
    "What is Abhishek's educational background?",
    "Tell me about Abhishek's hobbies"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open effect
  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Open after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  // Function to parse response and format bullet points
  const parseResponse = (text) => {
    if (!text.includes('**')) {
      return text;
    }

    // Split by ** and process each part
    const parts = text.split('**');
    const formattedParts = [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      if (part) {
        // Check if this part should be a bullet point
        if (i % 2 === 1) { // Odd indices are between ** markers
          // Check if this bullet point ends with *
          if (part.endsWith('*')) {
            const bulletContent = part.slice(0, -1).trim(); // Remove the * at the end
            
            // Check if this content contains subpoints (text between * markers)
            if (bulletContent.includes('*')) {
              const subParts = bulletContent.split('*');
              const mainPoint = subParts[0].trim();
              const subpoints = [];
              
              for (let j = 1; j < subParts.length; j++) {
                const subPart = subParts[j].trim();
                if (subPart) {
                  subpoints.push(subPart);
                }
              }
              
              formattedParts.push({
                type: 'bullet-with-subpoints',
                content: mainPoint,
                subpoints: subpoints,
                isLast: true
              });
            } else {
              formattedParts.push({
                type: 'bullet',
                content: bulletContent,
                isLast: true
              });
            }
          } else {
            // Check if this content contains subpoints
            if (part.includes('*')) {
              const subParts = part.split('*');
              const mainPoint = subParts[0].trim();
              const subpoints = [];
              
              for (let j = 1; j < subParts.length; j++) {
                const subPart = subParts[j].trim();
                if (subPart) {
                  subpoints.push(subPart);
                }
              }
              
              formattedParts.push({
                type: 'bullet-with-subpoints',
                content: mainPoint,
                subpoints: subpoints,
                isLast: false
              });
            } else {
              formattedParts.push({
                type: 'bullet',
                content: part,
                isLast: false
              });
            }
          }
        } else { // Even indices are regular text
          formattedParts.push({
            type: 'text',
            content: part
          });
        }
      }
    }

    return formattedParts;
  };

  const getBotResponse = async (userMessage) => {
    try {
      const response = await fetch('https://ravanmonster01.pythonanywhere.com/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: userMessage
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.response || "I'm sorry, I couldn't process your request at the moment.";
    } catch (error) {
      console.error('Error fetching response:', error);
      return "I'm having trouble connecting to my brain right now. Please try again later!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setShowSuggestions(false); // Hide suggestions after first message

    try {
      const botResponseText = await getBotResponse(inputMessage);
      
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Directly send the suggestion without adding to input box
    const userMessage = {
      id: messages.length + 1,
      text: suggestion,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setShowSuggestions(false); // Hide suggestions after first message

    // Get bot response for the suggestion
    getBotResponse(suggestion).then(botResponseText => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      
      setIsTyping(false);
    }).catch(error => {
      const errorResponse = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
      setIsTyping(false);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Component to render formatted message
  const FormattedMessage = ({ text }) => {
    const parsedContent = parseResponse(text);
    
    if (typeof parsedContent === 'string') {
      return <span>{parsedContent}</span>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {parsedContent.map((part, index) => (
          <div key={index}>
            {part.type === 'bullet' ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontSize: '16px', color: 'var(--color-accent)' }}>•</span>
                <span>{part.content}</span>
              </div>
            ) : part.type === 'bullet-with-subpoints' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '16px', color: 'var(--color-accent)' }}>•</span>
                  <span>{part.content}</span>
                </div>
                {part.subpoints.map((subpoint, subIndex) => (
                  <div key={subIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginLeft: '24px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--color-accent)', opacity: 0.7 }}>◦</span>
                    <span style={{ fontSize: '13px' }}>{subpoint}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span>{part.content}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: window.innerWidth <= 768 ? '20px' : '30px',
          right: window.innerWidth <= 768 ? '20px' : '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          width: window.innerWidth <= 768 ? 'calc(100vw - 40px)' : '380px',
          height: window.innerWidth <= 768 ? 'calc(100vh - 200px)' : '550px',
          maxWidth: '380px',
          maxHeight: '550px',
          backgroundColor: 'var(--color-bg-paper)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--color-secondary)',
          maxHeight: 'calc(100vh - 140px)',
          ...(window.innerWidth <= 768 && {
            bottom: '80px',
            right: '20px',
            left: '20px'
          })
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '16px',
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            borderRadius: '12px 12px 0 0',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>Abhishek's AI Assistant</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}
              >
                <div style={{
                  padding: '12px 16px',
                  borderRadius: message.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  backgroundColor: message.sender === 'user' ? 'var(--color-accent)' : 'var(--color-secondary)',
                  color: message.sender === 'user' ? 'white' : 'var(--color-text)',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  {message.sender === 'bot' ? (
                    <FormattedMessage text={message.text} />
                  ) : (
                    message.text
                  )}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--color-text-secondary)',
                  marginTop: '4px',
                  textAlign: message.sender === 'user' ? 'right' : 'left'
                }}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {/* Suggestion Questions */}
            {showSuggestions && messages.length === 1 && (
              <div style={{
                alignSelf: 'flex-start',
                maxWidth: '80%'
              }}>
                <div style={{
                  padding: '8px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '4px'
                  }}>
                    Quick questions you can ask:
                  </div>
                  {suggestionQuestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '16px',
                        border: '1px solid var(--color-accent)',
                        backgroundColor: 'transparent',
                        color: 'var(--color-accent)',
                        fontSize: '12px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        maxWidth: '100%',
                        wordWrap: 'break-word'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-accent)';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--color-accent)';
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isTyping && (
              <div style={{
                alignSelf: 'flex-start',
                maxWidth: '80%'
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-text)',
                  fontSize: '14px'
                }}>
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid var(--color-secondary)',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '20px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              style={{
                padding: '12px 16px',
                borderRadius: '20px',
                backgroundColor: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                opacity: (inputMessage.trim() && !isTyping) ? 1 : 0.5
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 
