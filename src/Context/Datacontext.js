  import CreateContext from "./CreateContext";
  import React, {useEffect, useState} from 'react';

// api data store and pass in all component by useContext and createcontext react hook
  const ApiState = (props) => {
    // store data in it 
      const [apidata, setApidata] = useState(null)
    
      // use effect to fetch data from spacex website
      useEffect(() => {
          const fetchCapsules = async () => {
            const res = await fetch("https://api.spacexdata.com/v3/capsules/")
            const data = await res.json()
            // save data
            setApidata(data)

          }
      // function call 
          fetchCapsules()
        }, [])
        return (
          <CreateContext.Provider value={apidata} >
              {props.children}
          </CreateContext.Provider>
        )
  }

  export default ApiState;