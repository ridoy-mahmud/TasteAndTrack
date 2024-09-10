import React, { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import Ingrediants from "./Ingrediants/Ingrediants";

const Recipie = ({ recipie, handleSelectedRecipie }) => {

    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipie;
    const newIng = [...ingredients];
    // State to handle hover effect
    const [isHovered, setIsHovered] = useState(false);

    // Inline styles
    const imgStyle = {
        width: '340px',
        height: '245px',
        borderRadius: '1.0rem',
        filter: isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 1.7s',
    };

    return (
        <div className="card w-[369px] h-[685px] bg-white shadow-xl border-2 border-gray-200">
            <figure className="px-4 pt-4">
                <img
                    src={recipe_image}
                    alt={recipe_name}
                    style={imgStyle} // Apply inline styles
                    onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
                    onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title mb-3">{recipe_name}</h2>
                <small className="text-gray-500 text-sm mb-4">{short_description}</small>
                <hr className="mb-4" />
                <div className="h-[145px] mb-3">
                    <p className="mb-2">Ingredients: {newIng.length}</p>
                    <div className="text-gray-500 mb-3 text-sm">
                        {
                            newIng.map(ing => <Ingrediants key={ing} ing={ing}></Ingrediants>)
                        }
                    </div>
                </div>
                <div className="flex gap-2 items-center my-auto text-gray-600">
                    <div className="flex gap-2 items-center">
                        <span> <IoMdTime /> </span>
                        <small>{preparing_time}</small>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <span><AiOutlineFire /></span>
                        <small>{calories}</small>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleSelectedRecipie(recipie)} className="bg-green-500 px-5 py-2 rounded-3xl text-white ">Want to cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipie;
