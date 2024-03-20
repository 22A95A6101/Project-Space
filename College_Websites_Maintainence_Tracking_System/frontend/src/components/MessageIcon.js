import React, { useState } from 'react';
import './MessageIcon.css'; // CSS file for styling

const MessageIcon = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleMessageSubmit = () => {
    // Logic for handling different input messages...
    const time = new Date().getHours();
    let message = '';

    // Logic for handling different input messages
    const lowercaseInput = inputMessage.toLowerCase(); // Convert input message to lowercase

    if (lowercaseInput.includes('hub')) {
      message = 'Founded back on the 3rd of February 2016, our journey has been quite an adventurously successful one. Over time our team has taken up commercial and social projects and developed apps, games, softwares, websites and a whole lot more. Our experienced developers are certified in an array of languages and can handle anything that comes their way';
    } else if (lowercaseInput === 'hi' || lowercaseInput === 'hello') {
      if (time < 12) {
        message = 'Hello! Good morning! Have a great day!';
      } else if (time < 18) {
        message = 'Hello! Good afternoon! How can I assist you?';
      } else {
        message = 'Hello! Good evening! Feel free to leave me a message.';
      }
    } else if (lowercaseInput.includes('team lead login') || lowercaseInput === 'lead' || lowercaseInput === 'team') {
      message = 'Team Lead, who delegates the task of modifying the websites to the Developer. ';
    } else if (lowercaseInput.includes('developer login') || lowercaseInput === 'dev login' || lowercaseInput === 'dev') {
      message = 'The Developer is responsible for implementing necessary changes to both the frontend and backend of the websites. Upon completion of the task, an email notification is sent to the Coordinator who initiated the request.';
    } else if (lowercaseInput.includes('ceo login') || lowercaseInput === 'ceo') {
      message = 'CEO is the person who tracks all the works';
    } else if (lowercaseInput.includes('coordinator login') || lowercaseInput === 'college coordinator login') {
      message = 'The Coordinator, an authenticated end user, submits requests to include or exclude specific features from various college websites, such as AEC, ACET, AEOC, Pharmacy, and Diploma.';
    } else if (lowercaseInput.includes('ceo of technical hub') || lowercaseInput === 'founder of technical hub' || lowercaseInput === 'babji sir') {
      message = 'Babji Neelam, the CEO and founder of Technical Hub at Aditya Engineering, is a visionary leader known for his entrepreneurial spirit and innovative mindset. With a passion for technology and a drive to make a difference, he embarked on a journey to establish Technical Hub, aiming to bridge the gap between education and industry requirements. Under his leadership, Technical Hub has become a pioneering institution in the field of technical education, providing cutting-edge training and resources to aspiring engineers. Babji Neelam commitment to excellence and dedication to empowering students have propelled Technical Hub to new heights, making it a hub of innovation and learning. Through his vision and perseverance, Babji Neelam continues to inspire and empower countless individuals, shaping the future of engineering education and contributing to the advancement of society as a whole.';
    } else if (lowercaseInput === 'what is your name?') {
      message = 'My name is Alina.';
    } else if (lowercaseInput === 'how are you?') {
      message = 'I am doing well, thank you for asking!';
    } else if (lowercaseInput === 'what time is it?' || lowercaseInput === 'time') {
      const currentTime = new Date().toLocaleTimeString();
      message = `The current time is ${currentTime}`;
    } else if (lowercaseInput === 'what is your purpose?') {
      message = 'My purpose is to assist users with queries related to Technical Hub.';
    } else if (lowercaseInput === 'can you help me?' || lowercaseInput === 'help') {
      message = 'Yes, I am here to help. Feel free to ask your question!';
    } else if (lowercaseInput === 'where are you located?') {
      message = 'I am a virtual assistant, so I do not have a physical location. However, I operate from the servers of Technical Hub.';
    } else if (lowercaseInput === 'what are your capabilities?') {
      message = 'I can provide information about Technical Hub, assist with login procedures, and answer general queries related to our services and team members.';
    } else if (lowercaseInput === 'what is your favorite color?') {
      message = 'I am a virtual assistant, so I do not have preferences like humans. However, I am fond of the color blue!';
    } else if (lowercaseInput === 'what languages do you speak?') {
      message = 'I am proficient in multiple programming languages including JavaScript, Python, and Java.';
    } else if (lowercaseInput === 'what do you do?') {
      message = 'I am a virtual assistant designed to assist users with queries related to Technical Hub.';
    } else if (lowercaseInput === 'what is your favorite food?') {
      message = 'As a virtual assistant, I do not have the ability to eat, but I do have a preference for data!';
    } else if (lowercaseInput === 'how old are you?') {
      message = 'As a virtual assistant, I do not have an age. I exist to provide assistance!';
    } else if (lowercaseInput === 'what is the weather like today?') {
      message = 'I am sorry, but I do not have the capability to provide weather information at the moment.';
    } else if (lowercaseInput === 'how this website works?' || lowercaseInput === 'about website') {
      message = 'Tracking the maintenance of websites is essential for ensuring their optimal performance, security, and user experience. By tracking maintenance activities, website owners can address issues promptly, mitigate security risks, and provide visitors with a positive browsing experience. Tracking website maintenance ensures that the site remains functional, secure, and user-friendly, contributing to its long-term success and effectiveness as an online platform. These requests are then assigned to the Team Lead, who delegates the task of modifying the websites to the Developer. The Developer is responsible for implementing necessary changes to both the frontend and backend of the  websites. Upon completion of the task, an email notification is sent to the Coordinator who initiated the request.';
    } else {
      message = 'Sorry, I cannot understand.';
    }

    setDisplayMessage(message);
 // MessageIcon.css - No chan
  };

  return (
    <div className="message-icon-container">
      <button className={`message-icon ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png" alt="Message Icon" />
        <span className="icon"></span>
      </button>
      {isClicked && (
        <div className="message-description">
          <textarea
            className="message-input"
            value={inputMessage}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
          />
          <button className="submit-button" onClick={handleMessageSubmit}>Submit</button>
          {displayMessage && (
            <div className="displayed-message">
              <p>{displayMessage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageIcon;