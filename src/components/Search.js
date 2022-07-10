import iconSearch from "../assets/icon-search.svg"
import { getUser } from '../API/searchUser'
import { useState, useEffect } from "react"

function Search ({getRes}) {
    const [inputValue, setInputValue] = useState('')
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        getUser("Octocat").then((res) => getRes(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function submitForm(e){
        e.preventDefault()
        getUser(inputValue).then((res) => {
            setUserData(res)
            if (!res.message) {
                getRes(res)  
            }
        })
    }

    return (
        <form className="flex center" action="post" role="search">
            <div>
                <img src={iconSearch} alt="" />
            </div>
           
            <input 
                onChange={(e) => setInputValue(e.target.value)}
                type="search" 
                autoComplete="off" 
                placeholder="Search GitHub username..." 
                id="initial-input" 
            />
            
            {
                userData.message && <p className="errorMessage flex end">No result</p>
            }

            <div className="button flex end">
                <button id="search" type="submit" onClick={submitForm}>Search</button>
            </div>
      </form>
    )
}

export default Search