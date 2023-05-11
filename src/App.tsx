function App() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-zinc-100'>
      <div className='flex flex-col sm:flex-row rounded-lg shadow-2xl'>
        <div id='score' className='bg-purple-500 py-12 px-8'>
          <h2>Your result</h2>
          <div id='circle'>
            g<h1>76</h1>
            <p>of 100</p>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who haven taken these
            tests.
          </p>
        </div>
        <div id='summary' className='py-12 px-8'>
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
