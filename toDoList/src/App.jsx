import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-gray-100">
        <div class="flex items-center justify-center h-screen">
            <div class="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
                <div class="flex items-center mb-6">
                    <h1 class="mr-6 text-4xl font-bold text-blue-600"> To-Do Project | Saeed Sharifi Academy</h1>
                </div>
                <div class="relative">
                    <input type="text" placeholder="What needs to be done today?"
                    class="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <ul class="list-reset">
                    <li class="relative flex items-center justify-between px-2 py-6 border-b">
                    <div>
                        <input type="checkbox" class="" />
                        <p  class="inline-block mt-1 ml-2 text-gray-600">Eating breakfast at 7:00 </p>
                    </div>
                    <button type="button" class="absolute right-0 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </li>
                    <li class="relative flex items-center justify-between px-2 py-6 border-b">
                    <div>
                        <input type="checkbox" checked class="" />
                        <p  class="inline-block mt-1 ml-2 text-gray-600 line-through">Studying English part 2</p>
                    </div>
                    <button type="button" class="absolute right-0 flex items-center  space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </li>
                    <li class="relative flex items-center justify-between px-2 py-6 border-b">
                        <div>
                            <input type="checkbox" class="" />
                            <p  class="inline-block mt-1 ml-2 text-gray-600">Watchimg movie for an hour </p>
                        </div>
                        <button type="button" class="absolute right-0 flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
