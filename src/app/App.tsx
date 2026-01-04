import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './provider/router/Router'

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>

  )
}

export default App
