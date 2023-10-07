import React, {useEffect, useState} from 'react'  // react with useEffect and useState hook
import BootstrapTable from "react-bootstrap-table-next"; // bootstrap table help to make data table
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";  // bootstrap filter help to filter table data
import paginationFactory from "react-bootstrap-table2-paginator"; // bootstrap paginator table data pagination



function DynamicData() {
    const [data, setData] = useState([]); // data store in it come from api fetch

    // useEffect fetch spacex capsule data and store in setData 
    useEffect(() => {
      // function fetch data from spacex api
        const fetchItems = async () => {
          // url from data come
          const res = await fetch(`https://api.spacexdata.com/v3/capsules`)
          // data json come in data
          const data = await res.json()
          // store in data with help of hook 
          setData(data)
        }
    // function call 
        fetchItems()
      }, [])



// table colume
    const columns = [
        {
          // data property name 
          dataField: "capsule_id",
          // text show on website
          text: "Capsule_id",
          // sort true / false
          sort: true,
        },
        {
          dataField: "capsule_serial",
          text: "Capsule_serial",    
          sort: true,
       
        },
        {
          dataField: "type",
          text: "Type",
          sort: true,
          filter: textFilter(),
        },
        {
            dataField: "details",
            text: "Detail",
            sort: true,
          },
          {
            dataField: "original_launch",
            text: "Original Launch",
            sort: true,
            filter: textFilter()
          },
          {
            dataField: "status",
            text: "Status",
            sort: true,
            // filter 
            filter: textFilter()

          },
    
      ];
  return (
    <div className='container'>
    <div className="table">
      {/* bootstrap table import use here */}
      <BootstrapTable
        keyField="id"
        data={data} // data section
        columns={columns} // columns define above use here
        striped
        hover
        condensed
        pagination={paginationFactory()} // pagination factory 
        filter={filterFactory()}  // filter factory
      />
      {/* end bootstrap table */}
    </div></div>
  )
}

export default DynamicData