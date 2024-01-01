import React, { useState } from 'react'

const options = ["cricket", "football", "hockey"]
const days = ["weekends", "weekdays"]
const Radiobtn = () => {
    const [game, setGame] = useState()
    console.log(game)

    return (
        <div>
            <h1>WHICH GAME</h1>

            {
                options.map((item, index) => {

                    return (
                        <>
                            <input type='radio' name='options' id="{item}" key={index} value={item} onChange={(e) => { setGame(e.target.value) }} />
                            <label for='item' >{item}</label>
                        </>
                    )
                })
            }


            <h2>SELECT DAYS</h2>

            {
                days.map((item1, index) => {
                    console.log(item1)

                    return (
                        <>
                            <input type='radio' name='options' id="{item}" key={index} value={item1} onChange={(e) => { setGame(e.target.value) }} />
                            <label for="{item}">{item1}</label>
                        </>
                    )
                })
            }

            <h2>You Will Play</h2>
            <h3>{game} on </h3>
        </div>
    )
}

export default Radiobtn