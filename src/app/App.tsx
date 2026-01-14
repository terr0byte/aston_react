import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './provider/router/Router'
import { Provider } from 'react-redux'
import { store } from './provider/store'

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      </Provider>

  )
}

export default App
