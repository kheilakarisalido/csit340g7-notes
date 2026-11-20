import { useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import './index.css'
 
function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Kheila Karis Alido" />
      </div>
    </SettingsContext>
  )
}
 
export default App