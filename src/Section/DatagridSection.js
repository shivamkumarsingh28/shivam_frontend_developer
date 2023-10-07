import React, {useContext, useState} from "react"
import LoadingState from "../Components/LoadingState"
import CreateContext from "../Context/CreateContext"
import Card from "../Components/Card";
import Model from "../Components/Model";


export default function DatagridSection() {
  // react hook usecontext to call capsule data 
  const capsules = useContext(CreateContext);

  // set modal true or false so model popup
  const [model, setModel] = useState(false);

  // data store for modal popup 
  const [tempdata, setTempdata] = useState([]);

// function get data from card by click and store in tempdata with react hoot setTempdata
  const getData = (detail, capsule_id, capsule_serial) => {
    let tempData = [detail, capsule_id, capsule_serial];
    setTempdata(item => [...tempData]);
    return setModel(true); // setModal True to popup model
  }
// close modal popup 
  const setfalse = () => {
    setModel(false);
  }

  return (
    <>

      {!capsules ? (
        // loading state show when data fetch take time 
        <LoadingState />
      ) : (
        <section className="pages-showcase">
          <div className="overlay py-20 lg:pt-32">
            
            <h1 className="heading">Capsules</h1>

            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">

              {/* map function data call one by one  */}
            {capsules.map(
                (capsule, index) => (
              <>
              {/* card import use here pass data as a capsule and function as a getData on click function execute */}
                  <Card capsule={capsule} index={index} click={getData}/>
                 </>
                )
              )}
            </div>
          </div>
        </section>
      )}
{/* modal check if is true then execute modal template else blank */}

      {
        model === true ? <Model tempdata={tempdata}  setfalse={setfalse}/> : ''
      }
    </>
  )
}