import { useEffect, useState } from 'react'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import mobileDivider from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import './App.css'

function App() {
  const [advice, setAdvice] = useState<string>('');
  const [adviceId, setAdviceId] = useState<number>(0);

  useEffect(() => {
    updateAdvice()
  }, []);

  function handleClick(event: any) {
    animateButton(event.currentTarget)
    updateAdvice()
  }

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

  function animateButton(clickedButton: any) {
    clickedButton.classList.add('rotate');

    setTimeout(function () {
      clickedButton.classList.remove("rotate");
    }, 2000);
  }

  return (
    <>
      <div className="wrapper md:max-w-[500px] max-w-[400px]">
        <div className="card flex flex-col justify-center items-center bg-dark-blue p-8 gap-8 relative rounded-xl shadow-2xl w-full mt-5 mb-12">
          <h1 className='uppercase text-xs text-light-green text-bold tracking-[.25em] font-bold'>Advice #{adviceId}</h1>
          <p className='text-very-light-blue text-xl font-bold text-center'>"{advice}"</p>
          <img className='hidden md:block mb-10' src={desktopDivider} alt="Desktop divider" />
          <img className='md:hidden mb-10' src={mobileDivider} alt="Desktop divider" />
          <button onClick={event => handleClick(event)} className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-light-green p-5 aspect-square rounded-full transition-shadow duration-500 hover:shadow-[0_0_20px_15px_#6efcac40]'>
            <img src={dice} alt="" />
          </button>
        </div >
      </div>
    </>
  )
}

export default App
