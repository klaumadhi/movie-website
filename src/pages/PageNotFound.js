import { Link } from 'react-router-dom'
import image from '../assets/images/pagenotfound.png'
import { useEffect } from 'react'


export const PageNotFound = () => {

  useEffect(() => {

    document.title = 'Page Not Found / Cinemate'
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-grey-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
          <img className='rounded' src={image} alt="404 Page not found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to='/'>
          <button className='w-64 text-xl text-white hover:text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium'>Back To CineMate</button>
          </Link>
            
        </div>
      </section>


    </main>
  )
}
