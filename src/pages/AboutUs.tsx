import React, { useState } from 'react';
import './AboutUs.css';
import { TopBar } from '../components/TopBar';

const AboutUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && message) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyY2_16MYWsIQjjSLl8uQ9xDYwrEDeYjwYb9SRCmKQNILktSzWPPNS3OAn5sFSZGDdGjg/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, message }),
        });
        if (response.ok) {
          alert("Your message has been sent successfully.");
        } else {
          alert("Your message has been sent successfully");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again later.");
      }
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div>
      <TopBar />
      <div className="aboutus-container p-8">
        <section className="team-section mb-8">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Chirag A Chintaal", github: "https://github.com/chiragachintaal/" },
              { name: "Lochan N S", github: "https://github.com/lochanns" },
              { name: "Sumadhva Krishna H M", github: "https://github.com/InatanayaXSk" },
              { name: "Hemang Shrikar Desai", github: "https://github.com/Shogun05" }
            ].map((member, index) => (
              <div key={index} className="team-member-card p-4 border rounded-lg cursor-pointer hover:shadow-lg flex items-center bg-blue-100" style={{ width: '25%' }} onClick={() => window.open(member.github, "_blank")}>
          <div className="team-member-avatar bg-green-200 text-green-800 w-16 h-16 flex items-center justify-center rounded-full mr-4">{member.name[0]}</div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full p-2 mb-4 border rounded h-32"
            />
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;