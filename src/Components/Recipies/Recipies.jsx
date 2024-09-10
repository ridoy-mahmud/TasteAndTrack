
import Calculation from "../Calculation/Calculation";
import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";



const Recipies = () => {

    const [selectedRecipie, setSelectedRecipie] = useState([]);

    const handleSelectedRecipie = (recipie) => {
        const newRecipie = [...selectedRecipie, recipie];
        setSelectedRecipie(newRecipie);
    }

    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setRecipies(data))

    }, [])


    return (
        <div><br /><br />
            <div className="my-8 w-8/12 mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Our Recipes</h2>
                <small className=" ">At Our Recipes, we believe that food is more than just sustenance; it's a way to connect, create, and celebrate life's moments. Our collection of recipes spans cultures, cuisines, and generations, offering something for everyone—from beginner cooks to seasoned chefs. Whether you’re seeking quick weeknight meals, decadent desserts, or healthy options, we’ve got you covered.</small><br /><br />
            </div>

            <div className="w-10/12 mx-auto flex gap-3">
                {/* Card Section */}
                <div className="card-container grid grid-cols-2 gap-3">
                    {
                        recipies.map(recipie => <Recipie handleSelectedRecipie={handleSelectedRecipie} key={recipie.id} recipie={recipie}></Recipie>)
                    }
                </div>
                {/* Calculation Section */}
                <div className="selected-area">
                    <div className="card w-[477px] h-[685px] shadow-xl bg-white border-2 border-gray-200 ">
                        <h2 className="text-center font-bold text-xl mt-4 mb-3">Want to Cook: </h2>
                        <hr className="mx-auto w-8/12" />
                        <div className="overflow-x-auto">
                            <table className="table border-none">
                                {/* head */}
                                <thead>
                                    <tr className="border-none text-gray-500">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {
                                    selectedRecipie.map((selected, idx) => <Calculation key={idx} selected={selected}></Calculation>)
                                }
                            </table><br /><br />
                            <h2 className="text-center font-bold text-xl mt-4 mb-3">Currently Cooking: </h2>
                            <table className="table border-none">
                                <thead>
                                    <tr className="border-none text-gray-500">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-[#f9f9f9] text-gray-500 py-4">
                                    <tr className="border-none">
                                        <th>1</th>
                                        <td></td>
                                        <td>20
                                            minutes</td>
                                        <td>400
                                            calories</td>
                                    </tr>
                                    <br />
                                </tbody>
                            </table>
                            <div className="text-sm text-gray-500 gap-3 flex justify-end mt-5">
                                <div className="w-52">
                                    <p className="mb-2">Total Time - 45 Min</p>
                                    <p>Total Calories - 900 Calorie </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Recipies;