import { NavLink } from "react-router"
export default function SideMenue(){
    return(
        <div>
        <aside className="flex bg-red-300 p-4  h-full ">
          <nav className="   flex flex-col gap-2     ">
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "") }
              to="/"
            >
              Home
            </NavLink>

            <NavLink to="/contact" className={({isActive})=>(isActive? "text-red-500" :"")}>contact </NavLink>
            <NavLink to="/about" className={({isActive})=>(isActive?"text-green-600":"")}>About </NavLink>
            <NavLink to="/prudacts" className={({isActive})=>(isActive ? "text-orange-600":"")}>prudacts</NavLink>
            <NavLink to="/people" className={({isActive})=>(isActive? "text-purple-700": "")}>people </NavLink>
          </nav>
        </aside>
        
      </div>
    )
}