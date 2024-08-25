import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="border-b shadow-sm">
        <div className="flex px-4 py-4 max-w-6xl justify-between mx-auto">
          <Link to="/">
            <h1 className="text-xl font-thin font-mono">
              Django + React Query Test App
            </h1>
          </Link>
          <nav className="flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/items">Items</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex flex-col max-w-6xl mx-auto px-4 py-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
