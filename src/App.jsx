
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffee = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffee);


  return (
    <div className='md:mx-28 md:mt-10'>
      <h1 className='text-4xl text-center text-gray-700 font-black md:py-8'>Hot- Cold- Just Wow! coffee</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map((coffee, idx) =>
          <CoffeeCard 
              key={idx}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}>
            </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App;
