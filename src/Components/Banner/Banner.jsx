const Banner = () => {
    return (
        <div className="rounded-xl">
            <div
                className="relative h-[80vh] w-10/12 mx-auto bg-cover bg-center flex justify-center items-center text-center"
                style={{ borderRadius: '20px', backgroundImage: `url('https://i.ibb.co/Xswxc0t/Rectangle-1.png')` }}>
                {/* Banner Content */}
                <div className="relative z-10 text-white">
                    <div className="w-8/12 mx-auto">
                        <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Discover an exceptional cooking class tailored for you!
                        </h3><br />
                        <p className="text-md sm:text-md mb-8">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="">
                        <div className="lg:flex justify-center lg:gap-4 sm:grid sm:grid-cols-1">
                            <button className="bg-green-500 text-black px-6 py-3 rounded-full transition">
                                Explore Recipes
                            </button>
                            <button className="bg-transparent border-2 text-white px-6 rounded-full transition">
                                Our Feedbacks
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
