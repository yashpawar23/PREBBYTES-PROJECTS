import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MyData = createContext()

const AddFile = (props) => {

const [Data]=useState([
    {
        id: 1,
        title: "Shah Rukh Khan",
        img: "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Why-SRK%E2%80%99s-Residence%E2%80%99s-Nameplate-Was-Removed-2.jpg",
        category: "Bollywood",
        description: "It seems like the diamonds on the plate are to blame here. According to a close friend of the actor the nameplate was taken down for reasons of safety.“That is one expensive nameplate, probably one of its kind in the entire world, and so after it was put up, it was brought to the host’s attention that it was not safe to have precious stones studded on to the wall. Shah Rukh decided to remove the nameplate from its place of public accessibility for the time being,” the friend reveals."
    },
    {
        id: 51,
        title: "Amitabh Bachchanr",
        img: "https://media.gettyimages.com/photos/indian-actor-amitabh-bachchan-poses-on-the-red-carpet-for-the-4th-picture-id97942617?k=20&m=97942617&s=612x612&w=0&h=sjWZ5uQGKCfe3xuaEnbRluarZVhCinXidBwJjJaUtho=",
        category: "bollywood",
        description: "Amitabh Bachchan was born on October 11, 1942 in Allahabad, British India (present-day Prayagraj, Uttar Pradesh, India) to legendary poet Harivansh Rai Bachchan & Teji Bachchan. He also has a brother named Ajitabh. He completed his education from Uttar Pradesh and moved to Bombay to find work"
    },
])
  return (
    <>
    <MyData.Provider value={[Data]}>
        {props.children}


    </MyData.Provider>
    
    </>
  )
}

export default AddFile