import React from 'react'

function Model({setfalse, tempdata}) {
  // console.log(tempdata[0])
  let modelstyle = {
    display: 'block', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: 1, /* Sit on top */
    left: 100,
    top: 0,
   /* Full height */
  overflow: 'auto', /* Enable scroll if needed */
  backgroundColor: 'black', /* Black w/ opacity */
  margin: '15% auto', /* 15% from the top and centered */
  padding: '20px',
  border: '1px solid #888',
  width:'60%'
  }

  let modelbody =
{
    padding: '2px 16px',
    color: 'white',
  
}


  return (

  <div style={modelstyle}>
  <div  role="document">
    <div>
      <div>
        <h5>Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={setfalse}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div style={modelbody}>
       <h1>{tempdata[0]}</h1>
       <h1>{tempdata[1]}</h1>
       <h1>{tempdata[2]}</h1>
      </div>
      <div>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={setfalse}>Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Model