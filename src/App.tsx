import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Progress from './components/Progress'

function App() {

  return (
    <>
      <Header />

      <hr className='absolute border-black'></hr>

      <div className="absolute flex flex-row top-24 left-10 right-10 gap-10">

        <div className="w-1/4 p-4">
          <Progress/>
        </div>

        <div className="w-3/4 p-4">
          <Form />
        </div>


      </div>
    </>

  )
}

export default App
