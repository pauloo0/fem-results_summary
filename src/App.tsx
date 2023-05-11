import ReactionIcon from './assets/images/icon-reaction.svg'
import MemoryIcon from './assets/images/icon-memory.svg'
import VerbalIcon from './assets/images/icon-verbal.svg'
import VisualIcon from './assets/images/icon-visual.svg'

function App() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-white font-hanken-grotesk text-lg box-border'>
      <div className='max-w-4xl flex flex-col sm:flex-row rounded-3xl shadow-2xl bg-white'>
        <div
          id='score'
          className='w-1/2 rounded-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue py-12 px-10 flex flex-col items-center justify-between text-center'
        >
          <h2 className='text-light-lavander text-2xl'>Your Result</h2>
          <div
            id='circle'
            className='w-48 h-48 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full flex flex-col items-center justify-center my-6'
          >
            <h1 className='text-6xl text-white font-extrabold'>76</h1>
            <p className='text-light-lavander text-lg mt-2'>of 100</p>
          </div>
          <h2 className='text-3xl text-white font-bold mb-4'>Great</h2>
          <p className='text-lg text-light-lavander font-medium'>
            You scored higher than 65% of the people who haven taken these
            tests.
          </p>
        </div>

        <div
          id='summary'
          className='w-1/2 py-12 px-10 flex flex-col justify-between'
        >
          <h2 className='text-2xl text-dark-gray-blue'>Summary</h2>

          <div>
            <div
              id='reaction'
              className='mb-4 flex flex-row justify-between px-4 py-2 rounded-lg bg-light-red-bg'
            >
              <p className='flex text-light-red'>
                <img src={ReactionIcon} className='mr-4' />
                Reaction
              </p>
              <div id='score'>
                <p className='text-dark-gray-blue-faded'>
                  <span className='text-dark-gray-blue mr-1'>80</span> / 100
                </p>
              </div>
            </div>
            <div
              id='memory'
              className='mb-4 flex flex-row justify-between px-4 py-2 rounded-lg bg-orange-yellow-bg'
            >
              <p className='flex text-orange-yellow'>
                <img src={MemoryIcon} className='mr-4' />
                Memory
              </p>
              <div id='score'>
                <p className='text-dark-gray-blue-faded'>
                  <span className='text-dark-gray-blue mr-1'>92</span> / 100
                </p>
              </div>
            </div>
            <div
              id='verbal'
              className='mb-4 flex flex-row justify-between px-4 py-2 rounded-lg bg-green-teal-bg'
            >
              <p className='flex text-green-teal'>
                <img src={VerbalIcon} className='mr-4' />
                Verbal
              </p>
              <div id='score'>
                <p className='text-dark-gray-blue-faded'>
                  <span className='text-dark-gray-blue mr-1'>61</span> / 100
                </p>
              </div>
            </div>
            <div
              id='visual'
              className='flex flex-row justify-between px-4 py-2 rounded-lg bg-cobalt-blue-bg'
            >
              <p className='flex text-cobalt-blue'>
                <img src={VisualIcon} className='mr-4' />
                Visual
              </p>
              <div id='score'>
                <p className='text-dark-gray-blue-faded'>
                  <span className='text-dark-gray-blue mr-1'>72</span> / 100
                </p>
              </div>
            </div>
          </div>

          <button
            type='button'
            className='text-white text-lg font-medium bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue rounded-full py-2 px-6'
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
