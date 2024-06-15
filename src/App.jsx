
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Introduction from './components/Introduction'
import About from './components/About'
import { useTheme } from './components/Theme/ThemeContext'
import Colors from './Colors'

export default function App() {
  const { theme } = useTheme()
  const colors = Colors[theme]
  return (
    <div style={{ color: colors.textColor }} className={`${theme}Background poppins-regular`}>
      {
        theme == 'dark' && <div style={{ zIndex: 0 }} class="opacity-50 absolute inset-0 w-full bg-[radial-gradient(#3d5b9d_1px,transparent_0px)] [background-size:16px_16px]"></div>
      }
      <Navbar />
      <Introduction />
      <About />
    </div>


  )
}