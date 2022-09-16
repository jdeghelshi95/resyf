/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'About Us', href: '/' },
  { name: 'Destinations', href: '/categories' },

  { name: 'Reservations', href: '/reservations' },
]

export default function Example() {
  const token = localStorage.getItem('token')

  const logUserOut = () => {
    localStorage.clear();
    window.location = '/signin'
  }
  return (
    <header className="bg-orange-400">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-white py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Resy</span>
              <img className="h-20 w-auto" src="https://i.imgur.com/LW9HfKY.png" alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block ">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:bg-white p-2 hover:text-black rounded ">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
          {token ? <a
          onClick={() => logUserOut()}
          href="#" className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Logout</a>: (
            <>
            <a
              href="/signin"
              className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-orange-400 hover:bg-indigo-50"
            >
              Sign up
            </a>
            </>
          )}
            
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
