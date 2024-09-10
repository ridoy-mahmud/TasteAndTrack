import { useState } from "react";
import Selected from "../Selected/Selected"

const Calculation = ({ selected }) => {

    const [select, setSelect] = useState([]);
    const handleSelect = (selected) => {
        const newSel = [...select, selected];
        setSelect(newSel);
    }
    console.log("0000000000000", select, "Onlufel;e ")
    const { id, recipe_name, preparing_time, calories } = selected;
    return (
        <>
            <tbody className="bg-[#f9f9f9] text-gray-500 py-4" >
                {/* row 1 */}
                < tr className="border-none" >
                    <th>1</th>
                    <td className="w-36">{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                    <td><button onClick={() => handleSelect(selected)} className="btn btn-sm px-4 bg-green-600 text-white rounded-3xl p-2 border-0">Preparing</button></td>
                </ tr>
            </tbody >
        </>
    );
};

export default Calculation;