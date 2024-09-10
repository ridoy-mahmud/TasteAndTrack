
const Calculation = () => {
    return (

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
                    <tbody className="bg-[#f9f9f9] text-gray-500 py-4">
                        {/* row 1 */}
                        <tr className="border-none">
                            <th>1</th>
                            <td className="w-36">Chicken Caesar
                                Salad</td>
                            <td>20
                                minutes</td>
                            <td>400
                                calories</td>
                            <td><button className="btn btn-sm px-4 bg-green-600 text-white rounded-3xl p-2 border-0">Preparing</button></td>
                        </tr>
                    </tbody>
                </table><br /><br />
                {/* New Calc */}
                <h2 className="text-center font-bold text-xl mt-4 mb-3">Currently Cooking: </h2>
                <table className="table border-none">
                    {/* head */}
                    <thead>
                        <tr className="border-none text-gray-500">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#f9f9f9] text-gray-500 py-4">
                        {/* row 1 */}
                        <tr className="border-none">
                            <th>1</th>
                            <td>Chicken Caesar
                                Salad</td>
                            <td>20
                                minutes</td>
                            <td>400
                                calories</td>
                        </tr>
                    </tbody>
                </table><br />
                <div className="text-sm text-gray-600 gap-3 flex justify-end mt-5">
                    <div className="w-52">
                        <p className="mb-2">Total Time - 45 Min</p>
                        <p>Total Calories - 900 Calorie </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Calculation;