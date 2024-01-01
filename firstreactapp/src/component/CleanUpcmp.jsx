import React, { useEffect, useState } from 'react'

const CleanUpcmp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);



    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default CleanUpcmp