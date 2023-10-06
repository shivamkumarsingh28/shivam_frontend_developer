  import CreateContext from "./CreateContext";
  import React, {useEffect, useState} from 'react';


  const ApiState = (props) => {
      const [apidata, setApidata] = useState(null)
    
      useEffect(() => {
          const fetchCapsules = async () => {
            const res = await fetch("https://api.spacexdata.com/v3/capsules/")
            const data = await res.json()
            setApidata(data)

          }
      
          fetchCapsules()
        }, [])
        return (
          <CreateContext.Provider value={apidata} >
              {props.children}
          </CreateContext.Provider>
        )
  }

  export default ApiState;