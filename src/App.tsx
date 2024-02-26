import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import mobileDivider from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [advice, setAdvice] = useState<string>('');
  const [adviceId, setAdviceId] = useState<number>(0);

  useEffect(() => {
    updateAdvice()
  }, []);

  function updateAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdvice(data.slip.advice);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <div className="card flex flex-col justify-center items-center bg-dark-blue p-8 gap-8 relative [&>*:nth-last-child(2)]:mb-8 rounded-xl shadow-2xl">
        <h1 className='uppercase text-sm text-light-green text-bold'>Advice {adviceId}</h1>
        <p className='text-very-light-blue text-xl'>"{advice}"</p>
        <img src={desktopDivider} alt="" />
        <a href="#" onClick={updateAdvice} className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-light-green p-5 aspect-square rounded-full'>
          <img src={dice} alt="" />
        </a>
      </div >
    </>
  )
}

export default App
