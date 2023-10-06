import React, {useEffect, useState} from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";



function DynamicData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
          const res = await fetch(`https://api.spacexdata.com/v3/capsules`)
          const data = await res.json()
          setData(data)
        }
    
        fetchItems()
      }, [])




    const columns = [
        {
          dataField: "capsule_id",
          text: "Capsule_id",
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
            filter: textFilter()

          },
    
      ];
  return (
    <div className='container'>
    <div className="table">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        filter={filterFactory()}
      />
    </div></div>
  )
}

export default DynamicData