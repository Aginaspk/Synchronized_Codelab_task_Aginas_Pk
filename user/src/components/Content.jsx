import axios from 'axios'
import React, { useState } from 'react'

function Content() {
    const [input, setInput] = useState([])
    const [fullArray, setFullArray] = useState(null)
    const [patterns, setPatterns] = useState(0);
    const [indexes, setIndexes] = useState([]);
    const [maxSum, setMaxSum] = useState(0);
    const [err, setError] = useState(null)



    const findPattern = () => {
        // setError(null)
        // if (!Array.isArray(JSON.parse(input))) {
        //     setError("Input should be array")
        //     return;
        // }
        // let rows = input.length;
        // for (let i = 1; i <= rows-1; i++) {
        //     if (input[i].length != input[i + 1].length) {
        //         setError("invalid array")
        //         return;
        //     }
        // }

        try {
            axios.post('http://localhost:3000/pattern', { arr: input }).then((res) => {
                setIndexes(res.data.data.indexes);
                setMaxSum(res.data.data.maxSum);
                setPatterns(res.data.data.patterns)
            })
            setFullArray(JSON.parse(input))
            console.log(fullArray)
            console.log(fullArray.length);


        } catch (error) {
            setError(`something went wrong ${error}`)
        }
    }
    return (
        <div className='max-7xl mx-auto flex justify-between gap-5 mt-20'>
            <div className='w-1/2 shadow-2xl p-10'>
                <textarea onChange={(e) => setInput(e.target.value)} name="arr" id="" className='w-full h-[200px] border p-5'></textarea>
                <button className='w-full bg-black text-white py-7 cursor-pointer' onClick={findPattern}>Find I Pattern</button>
                {err && <div className='w-full border border-red-500 text-red-400'>
                    {err}
                </div>}
            </div>
            <div className='w-1/2 shadow-2xl p-10'>
                <h1 className='w-full text-bold text-2xl'>Result</h1>
                <div className='w-full flex'>
                    <div className='flex-1 border p-4'><span>No of Patterns  </span>{patterns === 0 ? 0 : patterns}</div>
                    <div className='flex-1 border p-4'><span>Max Sum  </span>{maxSum === 0 ? 0 : maxSum}</div>
                </div>
                <div className='w-full border'>
                    {/* <div className={`grid grid-col-[${fullArray.length}]`}>
                        {
                            fullArray.map((val) => {
                                return val.map((i, index) => <div key={index}>{i}</div>)
                            })
                        }
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Content