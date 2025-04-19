import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('Starting application initialization')
console.log('Environment:', import.meta.env.MODE)

// Set a global flag to indicate app has started loading
window.appStarted = true

// Function to check if we're in a production build on GitHub Pages
const isGitHubPages = () => {
  return window.location.hostname.includes('github.io') || 
         window.location.hostname.includes('naes.tech')
}

// Check if the DOM is ready
const rootElement = document.getElementById('root')
console.log('Root element found:', !!rootElement)

// Add a global error handler
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Global error caught:', message, error)
  displayError(`Global error: ${message}`)
  return true // Prevents default error handling
}

// Helper function to display errors
function displayError(message) {
  const rootEl = document.getElementById('root')
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="color: white; padding: 20px; text-align: center;">
        <h1>Application Error</h1>
        <p>${message}</p>
        <p>Try the <a href="fallback.html" style="color:#0099ff;">static fallback page</a></p>
      </div>
    `
  }
}

if (rootElement) {
  try {
    console.log('Creating React root')
    const root = ReactDOM.createRoot(rootElement)
    console.log('Rendering App component')
    
    // Use a simple error boundary
    const ErrorFallback = ({ error }) => (
      <div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Something went wrong</h1>
        <p>{error.toString()}</p>
      </div>
    )
    
    // Add error boundary in production
    if (import.meta.env.PROD) {
      try {
        root.render(<App />)
      } catch (error) {
        root.render(<ErrorFallback error={error} />)
      }
    } else {
      // In development, use StrictMode
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      )
    }
    
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    displayError(`Failed to render: ${error.message}`)
  }
} else {
  console.error('Root element not found')
  // Try to display an error message directly on the page
  document.body.innerHTML = `
    <div style="color: white; padding: 20px; text-align: center;">
      <h1>Failed to load application</h1>
      <p>Could not find root element. Please check the console for more information.</p>
      <p>Try the <a href="fallback.html" style="color:#0099ff;">static fallback page</a></p>
    </div>
  `
} 