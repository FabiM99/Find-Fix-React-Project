import React from 'react'

function NotFound() {
  return (
    
<main className="h-screen w-full flex flex-col justify-center items-center ">
	<h1 className="text-9xl font-extrabold text-customBlue tracking-widest">404</h1>
	<div className="bg-customGreen px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-customGreen group active:text-white focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-customGreen group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-customBlue border border-current">
          <router-link to="/">Torna alla Home</router-link>
        </span>
      </a>
    </button>
</main>
  )
}

export default NotFound