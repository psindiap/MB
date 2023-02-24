import React from 'react'
// import bgImg from '../assets/img1.jpg';
import bgImg from '../assets/MB2.jpg';
import mbImg from '../assets/mb1.png';
import dm1 from '../Srcs/Imgs (1).png';
import dm2 from '../Srcs/Imgs (2).png';
import dm3 from '../Srcs/Imgs (3).png';
import dm4 from '../Srcs/Imgs (4).png';
import dm5 from '../Srcs/Imgs (5).png';




import { useForm } from 'react-hook-form';


export default function Form2() {

    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(100);


    return (

            <div className="flex mx-auto flex-col md:flex-row w-10/12 items-center justify-center register2 h-screen70 rounded-lg">
                <div className="flex flex-col w-1/4 p-4  ">
                    <h2 className='font-semibold text-xl'>Sort</h2>
                    <span >Priority based Sort: Ascending order-</span>


                    <div className="flex flex-col md:flex-row w-full mt-6">

                        <div className='mx-auto w-1/2 p-2'>
                            <label for="countries" class="block mb-2 text-sm font-semibold text-lg text-gray-900 dark:text-white">Priority 1:</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a parameter</option>
                                <option value="US">Deflection</option>
                                <option value="CA">Weight</option>
                                <option value="FR">Thickness</option>
                                <option value="DE">Depth</option>
                            </select>
                        </div>


                        <div className='mx-auto w-1/2 p-2'>
                            <label for="countries" class="block mb-2 text-sm font-semibold text-lg text-gray-900 dark:text-white">Priority 2:</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose another parameter</option>
                                <option value="US">Deflection</option>
                                <option value="CA">Weight</option>
                                <option value="FR">Thickness</option>
                                <option value="DE">Depth</option>
                            </select>
                        </div>

                    </div>

                    <button class="mx-auto w-fit block bg-blue-500 hover:bg-blue-400 text-white font-bold mt-8 py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                        Sort
                    </button>

                </div>
                <div className='h-full overflow-y-scroll'>
                    <div>
                    <div className="flex flex-row">
                            <div className="flex flex-col w-full p-4 items- center justify-center">
                                <h2 className='font-semibold text-lg'>Design 1</h2>
                                <h2 className='font text-sm'>Deflection: _ mm </h2>
                                <h2 className='font text-sm'>Thickness: _ mm</h2>
                                <h2 className='font text-sm'>Length:  _ mm </h2>
                                <h2 className='font text-sm'>Width:  _ mm</h2>
                            </div>
                            <div>
                                <img src={dm1} alt="img1.jpg" />
                            </div>
                        </div>


                        <div className="flex flex-row">
                            <div className="flex flex-col w-full p-4 items-center justify-center">
                                <h2 className='font-semibold text-lg'>Design 2</h2>
                                <h2 className='font text-sm'>Deflection: _ mm </h2>
                                <h2 className='font text-sm'>Thickness: _ mm</h2>
                                <h2 className='font text-sm'>Length:  _ mm </h2>
                                <h2 className='font text-sm'>Width:  _ mm</h2>
                            </div>
                            <div>
                                <img src={dm2} alt="img1.jpg" />
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-col w-full p-4 items-center justify-center">
                                <h2 className='font-semibold text-lg'>Design 3</h2>
                                <h2 className='font text-sm'>Deflection: _ mm </h2>
                                <h2 className='font text-sm'>Thickness: _ mm</h2>
                                <h2 className='font text-sm'>Length:  _ mm </h2>
                                <h2 className='font text-sm'>Width:  _ mm</h2>
                            </div>
                            <div>
                                <img src={dm3} alt="img1.jpg" />
                            </div>
                        </div>


                        <div className="flex flex-row">
                            <div className="flex flex-col w-full p-4 items-center justify-center">
                                <h2 className='font-semibold text-lg'>Design 4</h2>
                                <h2 className='font text-sm'>Deflection: _ mm </h2>
                                <h2 className='font text-sm'>Thickness: _ mm</h2>
                                <h2 className='font text-sm'>Length:  _ mm </h2>
                                <h2 className='font text-sm'>Width:  _ mm</h2>
                            </div>
                            <div>
                                <img src={dm4} alt="img1.jpg" />
                            </div>
                        </div>


                        <div className="flex flex-row">
                            <div className="flex flex-col w-full p-4 items-center justify-center">
                                <h2 className='font-semibold text-lg'>Design 5</h2>
                                <h2 className='font text-sm'>Deflection: _ mm </h2>
                                <h2 className='font text-sm'>Thickness: _ mm</h2>
                                <h2 className='font text-sm'>Length:  _ mm </h2>
                                <h2 className='font text-sm'>Width:  _ mm</h2>
                            </div>
                            <div>
                                <img src={dm5} alt="img1.jpg" />
                            </div>
                        </div>


                       
                    </div>
                </div>
            </div>
    )
}
