import React, { useState } from 'react';
import './chatbot.css';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios'; // Import Axios for making API requests
import img from '../../assets/img.png';

// Load the OpenAPI key from .env file
const OPEN_API_KEY = process.env.OPEN_API_KEY;

const theme = {
  background: '#DCDCDC',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  botAvatar: img,
  floating: true,
};

const processUserInput = async (value) => {
  try {
    // Display loading indicator
    let result = "...";

    const response = await axios.get('YOUR_OPENAPI_ENDPOINT', {
      params: {
        query: value,
        apiKey: OPEN_API_KEY,
      },
    });

    const responseData = response.data;

    result = responseData.result;
    result = result.split(' ').slice(0, 100).join(' ');

    return result;
  } catch (error) {
    console.error('Error fetching data from OpenAPI:', error);
    return 'Sorry, something went wrong. Please try again later.';
  }
};

export default function Chatbot() {
// eslint-disable-next-line
  const [refreshKey, setRefreshKey] = useState(0); // State to force re-render

  const steps = [
    {
      id: '0',
      message: 'Welcome, how may I help you!',
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: async ({ value }) => {
        const result = await processUserInput(value);
        return [
          { user: true, value: value },
          { user: false, value: result },
        ];
      },
    },
  ];

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          key={refreshKey}
          headerTitle="Ask Me Anything"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}
