
import Calculation from "../Calculation/Calculation";
import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";



const Recipies = () => {

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
                <small className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem accusamus ipsum vero accusantium esse non repudiandae cumque dolore fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, suscipit!</small><br />
            </div>

            <div className="w-10/12 mx-auto flex gap-3">
                {/* Card Section */}
                <div className="card-container grid grid-cols-2 gap-3">
                    {
                        recipies.map(recipie => <Recipie key={recipie.id} recipie={recipie}></Recipie>)
                    }
                </div>
                {/* Calculation Section */}
                <div>
                    {
                        <Calculation></Calculation>
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipies;