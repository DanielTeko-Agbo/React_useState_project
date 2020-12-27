import React, { useState } from 'react'
import { data } from './data'

function App() {
  const [people, setPeople] = useState(data)

  const handler = () => {
    setPeople([])
  }

  return (
    <>
      <section className='container'>
        <article className='modal'>
          <h3>{people.length} birthdays today</h3>
          {people.map((person) => {
            const {id,img,name,age} = person
            return (
              <div key={id} className='users'>
                <li>
                  <img src={img} alt='' />
                  <h4>
                    {name}<br/>
                    <small>{age} years</small>
                  </h4>
                </li>
              </div>
            )
          })}
          <button className='btn' onClick={handler}> Clear Items</button>
        </article>
      </section>
    </>
  )
}

export default App;
