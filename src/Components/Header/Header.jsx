import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="w-full py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-11/12 lg:w-10/12 mx-auto gap-4 sm:gap-0">
                {/* Logo / Title */}
                <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Taste N Track</h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-5 text-gray-500">
                    <small className="hover:text-black cursor-pointer">Home</small>
                    <small className="hover:text-black cursor-pointer">Recipes</small>
                    <small className="hover:text-black cursor-pointer">About</small>
                    <small className="hover:text-black cursor-pointer">Search</small>
                </nav>

                {/* Search and User Icon */}
                <div className="flex justify-center sm:justify-end gap-3 items-center">
                    <label className="w-full sm:w-auto flex items-center gap-2 rounded-3xl bg-gray-100 px-2 py-1 sm:py-0">
                        <span className="text-black text-xl ms-2">
                            <CiSearch />
                        </span>
                        <input
                            type="text"
                            className="grow bg-transparent outline-none py-2"
                            placeholder="Search"
                        />
                    </label>
                    <div className="rounded-full p-2 bg-green-500 text-white text-2xl cursor-pointer">
                        <IoPersonOutline />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
