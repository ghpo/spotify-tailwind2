import {Home as HomeIcon, Search,} from 'lucide-react'

export default function Home() {
  return (

  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-74 bg-zinc-950 p-6"> 
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full '></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full '></div>
          <div className='w-3 h-3 bg-green-500 rounded-full '></div>

        </div>
      <nav className="space-y-5 mt-10">
      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
        <HomeIcon /> Home
      </a>
      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
        <Search /> Search
      </a>
      
      </nav>  

      </aside>
        <main className="flex-1">main</main>
    </div>
    <footer className="bg-zinc-500 border-t border-zinc-700 p-6">footer</footer>
  </div>

);
}
