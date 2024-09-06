import React, { useState } from 'react'
import axios from "axios"
import Navbar from '../Pages/Navbar'


const Goldbanner = () => {
    const [GoldImg, setGoldImg] = useState()
    const [Title, setTitle] = useState("")
  
    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData()
  formData.append("GoldImg", GoldImg)
  formData.append("Title", Title)
console.log(formData);
  const result = await axios.post('${process.env.React_App_Goldbanner}', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log(result.data)
    }
  return (
    <div>
      <Navbar/>
             <form onSubmit={submit}>
             <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
        <input
        className='border-2 border-red-500'
          filename={GoldImg} 
          onChange={e => setGoldImg(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <input className='border-2 border-red-500'
          onChange={e =>  setTitle(e.target.value)} 
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Goldbanner
