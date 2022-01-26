import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-row gap-4 justify-center bg-white shadow-sm h-16 m-auto font-medium text-sm border-b-2">
                <div className="flex flex-row items-center hover:border-blue-500 border-transparent border-b-2"><Link className="" to="/">Home</Link></div>
                <div className="flex flex-row items-center hover:border-blue-500 border-transparent border-b-2"><Link to="/about">About</Link></div>
            </div>
        </nav>
    )
}