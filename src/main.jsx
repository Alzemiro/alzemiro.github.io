import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@radix-ui/themes/styles.css'
import {Avatar, Flex, Theme} from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Theme>
          <Flex gap="2">
              <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="A"
              />
              <Avatar fallback="A" />
          </Flex>
          <App />
      </Theme>
  </React.StrictMode>,
)
