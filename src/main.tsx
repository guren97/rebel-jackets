import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add Font Awesome for icons
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
