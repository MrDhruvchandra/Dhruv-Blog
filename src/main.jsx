import { StrictMode } from 'react'
import {Auth0Provider} from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-avrsrmdrfb12im3t.us.auth0.com"
  clientId="axyFDaCnhrWcgKILhuf1pIvbOZ0gl6SQ"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
