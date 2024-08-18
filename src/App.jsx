
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Introduction from './components/Introduction'
import About from './components/About'
import { useTheme } from './components/Theme/ThemeContext'
import Colors from './Colors'
import WorkExperience from './components/WorkExperience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import StarsCanvas from './components/reusable/StartsCanvas'

export default function App() {
  const { theme } = useTheme()
  const colors = Colors[theme]

  return (
    <div style={{ color: colors.textColor }}

      className={`${theme}Background poppins-regular`}
    >
     
      {
        theme == 'dark' && <div style={{ zIndex: 0 }} class="opacity-50 absolute inset-0 w-full bg-[radial-gradient(#3d5b9d_1px,transparent_0px)] [background-size:16px_16px]"></div>
      }
      <div className='darkBackground curve shadow'>
        <div id="introduction"><Navbar /></div>

        <div ><Introduction /></div>
        <div id="about"><About /></div>
      </div>
      <div id="techstack"><TechStack /></div>
      <div id="workexperience"> <WorkExperience /></div>
      <div id="projects"> <Projects /></div >
      <div id="certifications"> <Certifications /></div >
      <div className='relative z-0'>
        <div id="contact"><Contact  /></div>
        <StarsCanvas />
      </div>
    </div >


  )
}