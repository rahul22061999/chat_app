import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import Router from './router/Router.jsx';
import {Provider} from './components/ui/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={Router}>
      <App/>
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
