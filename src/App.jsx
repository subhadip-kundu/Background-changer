import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('skyblue')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-4 py-2.5 rounded-full">
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Red' }} onClick={() => { setColor('Red') }}>Red</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'olive' }} onClick={() => { setColor('Olive') }}>Olive</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Green' }} onClick={() => { setColor('Green') }}>Green</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Blue' }} onClick={() => { setColor('Blue') }}>Blue</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Coral' }} onClick={() => { setColor('Coral') }}>Coral</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Skyblue' }} onClick={() => { setColor('Skyblue') }}>Skyblue</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Violet' }} onClick={() => { setColor('Violet') }}>Violet</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Orange' }} onClick={() => { setColor('Orange') }}>Orange</button>
            <button className='outline-none px-7 py-2 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'Black' }} onClick={() => { setColor('Black') }}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
