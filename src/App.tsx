
function App() {

  return (
    <>
      <div className='flex justify-between items-center bg-[#f2f2f2] shadow-md shadow-gray-300 py-2'>
        <div className='flex items-center'>
          <p className='p-3 text-xl px-4'>Post List</p>

          <ul className='flex item-center'>

            <li className='p-3'>Posts</li>
            <li className='p-3'>My posts</li>
          </ul>
        </div>
        <ul className='flex'>
          <li className='p-3'>login</li>
          <li className='p-3'>logout</li>
        </ul>
      </div>
    </>
  )
}

export default App
