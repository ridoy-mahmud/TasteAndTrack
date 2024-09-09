import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";



const Recipies = () => {
    return (
        <div><br /><br />
            <div className="my-8 w-8/12 mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Our Recipes</h2>
                <small className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem accusamus ipsum vero accusantium esse non repudiandae cumque dolore fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, suscipit!</small><br />
            </div>
            <div className="w-10/12 mx-auto flex gap-3">
                {/* Card Section */}
                <div className="card-container flex gap-3">
                    <div className="card w-[369px] h-[685px] bg-white shadow-xl border-2 border-gray-200">
                        <figure className="px-4 pt-4">
                            <img
                                src="https://images.unsplash.com/photo-1634864572872-a01c21e388d4?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mb-3">Spicy Chawmin</h2>
                            <small className="text-gray-500 text-sm mb-5">Classic Italian pasta dish with savory meat sauce.</small>
                            <hr className="mb-5" />
                            <div>
                                <p>Ingredients: 6</p> <br />
                                <div className="text-gray-500">
                                    <li className="mb-2">500mg grond beef</li>
                                    <li className="mb-2">1 onion, chopped</li>
                                    <li className="mb-2">2 cloves garlic, minced</li>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center my-auto text-gray-600">
                                <div className="flex gap-2 items-center">
                                    <span> <IoMdTime /> </span>
                                    <small> 30 minutes</small>
                                </div>
                                <div className="flex gap-2 items-center ">
                                    <span><AiOutlineFire /></span>
                                    <small>900 Callorie</small>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button className="bg-green-500 px-5 py-2 rounded-3xl text-white ">Want to cook</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Calculation Section */}
                <div>
                    <div className="card w-[477px] h-[685px] shadow-xl bg-white ">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipies;