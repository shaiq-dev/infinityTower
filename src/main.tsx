import React from 'react'
import ReactDOM from 'react-dom/client'
import { DAppProvider } from '@usedapp/core'

import { DAppConfig } from './configs'
import './styles/styles.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={DAppConfig}>
      <App />
    </DAppProvider>
  </React.StrictMode>
)
