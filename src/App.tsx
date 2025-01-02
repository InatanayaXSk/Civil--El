import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detect } from './pages/Detect';
import { askPlantCareQuestion } from './lib/genai';
import Contents from './pages/content';

function App() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await askPlantCareQuestion(chatMessage);
      setChatResponse(response);
    } catch (error) {
      console.error('Error getting chat response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detect />} />
       

        <Route path="/content" element={<Contents />} />
      </Routes>
      <div className="chat-section">
        <h2>Ask Additional Questions</h2>
        <form onSubmit={handleChatSubmit} className="chat-form">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Ask about plant care..."
            className="chat-input"
          />
          <button type="submit" className="chat-submit">
            Send
          </button>
        </form>
        {loading && <div className="loading">Loading...</div>}
        {chatResponse && (
          <div className="chat-response">
            <h3>Response:</h3>
            <p>{chatResponse}</p>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;