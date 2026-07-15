import React from 'react'
import Card from './component/card'

const App = () => {
  return (
    <div className='parent'>
 <Card user = 'aman' age={19} img='https://images.unsplash.com/photo-1782199483843-49fb9416fa7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'/>  
 <Card user = 'verma' age={21} img='https://images.unsplash.com/photo-1768970338809-d88ab5997672?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'/>   

    </div>
  )
}

export default App