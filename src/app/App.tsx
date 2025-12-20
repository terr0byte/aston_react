import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import MainLayout from '../shared/layouts/MainLayout'

function App() {

  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>

  )
}

export default App
