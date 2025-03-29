import React, { useState } from 'react'
import { Dice6, RefreshCw } from 'lucide-react'

function App() {
  const [randomNumber, setRandomNumber] = useState<string>('0000')

  const generateNumber = () => {
    const newNumber = Math.floor(1000 + Math.random() * 9000).toString()
    setRandomNumber(newNumber)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Dice6 className="w-12 h-12 text-purple-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Random Number Generator</h1>
        </div>
        
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-4 gap-4">
            {randomNumber.split('').map((digit, index) => (
              <div 
                key={index}
                className="aspect-square flex items-center justify-center bg-white rounded-lg shadow-md text-4xl font-bold text-purple-600"
              >
                {digit}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={generateNumber}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 group"
        >
          Generate Number
          <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </div>
  )
}

export default App
