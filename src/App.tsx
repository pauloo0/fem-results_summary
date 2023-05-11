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
            className='w-48 h-48 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full flex flex-col items-center justify-center'
          >
            <h1 className='text-6xl text-white font-extrabold'>76</h1>
            <p className='text-light-lavander text-sm mt-2'>of 100</p>
          </div>
          <h2 className='text-3xl text-white font-bold'>Great</h2>
          <p className='text-lg text-light-lavander font-medium'>
            You scored higher than 65% of the people who haven taken these
            tests.
          </p>
        </div>

        <div id='summary' className='py-12 px-10'>
          <h2>Summary</h2>
          <div id='reaction'>
            <span>Icon</span>
            Reaction
            <div id='score'>
              <span>80</span>
              <p>/ 100</p>
            </div>
          </div>
          <div id='memory'>
            <span>Icon</span>
            Memory
            <div id='score'>
              <span>92</span>
              <p>/ 100</p>
            </div>
          </div>
          <div id='verbal'>
            <span>Icon</span>
            Verbal
            <div id='score'>
              <span>61</span>
              <p>/ 100</p>
            </div>
          </div>
          <div id='visual'>
            <span>Icon</span>
            Visual
            <div id='score'>
              <span>72</span>
              <p>/ 100</p>
            </div>
          </div>

          <button type='button' className='bg-purple-500'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
