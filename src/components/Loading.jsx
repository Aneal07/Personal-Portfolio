import React,{useState,useEffect} from 'react'
import { GiThink } from 'react-icons/gi'; // Import the thinking face icon

const Loading = () => {
 const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage(prev => {
                if (prev < 100) return prev + 25; // Increase by 25 each interval
                clearInterval(timer); // Clear the interval when reaching 100
                return 100;
            });
        }, 500); // Increase every 0.5 seconds

        return () => clearInterval(timer); // Clean up the timer
    }, []);

    return (
        <div id='loading-screen' className='text-gray-300 font-bold flex fixed top-0 left-0 w-full h-screen bg-[#040b13] justify-center items-center'>
            <div className='text-center flex flex-col items-center'>
                <h4 className='text-4xl'>Anil is thinking...</h4>
                <GiThink size={48} className='my-2'/>
                <div className='bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mt-2'>
                    {percentage}%
                </div>
            </div>
        </div>
    );
}

export default Loading