import React, {useContext, useState} from "react"
import LoadingState from "../Components/LoadingState"
import CreateContext from "../Context/CreateContext"
import Card from "../Components/Card";
import Model from "../Components/Model";


export default function DatagridSection() {
  const capsules = useContext(CreateContext);
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);


  const getData = (detail, capsule_id, capsule_serial) => {
    let tempData = [detail, capsule_id, capsule_serial];
    setTempdata(item => [...tempData]);
    return setModel(true);
  }

  const setfalse = () => {
    setModel(false);
  }

  return (
    <>

      {!capsules ? (
        <LoadingState />
      ) : (
        <section className="pages-showcase">
          <div className="overlay py-20 lg:pt-32">
            
            <h1 className="heading">Capsules</h1>

            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {capsules.map(
                (capsule, index) => (
              <>
                  <Card capsule={capsule} index={index} click={getData}/>
                 </>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {
        model === true ? <Model tempdata={tempdata}  setfalse={setfalse}/> : ''
      }
    </>
  )
}