import React from "react";
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject, Sort,Page 
} from "@syncfusion/ej2-react-grids";
import LayoutComponent from "../main/layout";
import moment from "moment";


const DeviceSetup = () =>{
    const [data, setData] = React.useState<{ deviceNoteTypes: object[]} | any>([]);
    let authToken :any ;

    const pageSettings = {
      pageSize: 10,
      pageSizes: ["All","5", "10", "20", "50"],
      pageCount: 5,
      currentPage: 1,
    };

if( typeof window !== 'undefined'){
   authToken = localStorage.getItem("auth");
}
  
  React.useEffect(() => {
    if (authToken !== null) {
      const synkHeaders: Record<string, string> = {
        "Authorization": authToken ,
        "X-Konami-Iop": "10000498", // Convert to string
        "X-Konami-Session-Timetoexpire": "1696852247174", // Convert to string
      };

      fetch("https://fedev.kgisystems.com:4242/v1/system/devices/notes/types?limit=-1", {
        "method": "GET",
        "headers": synkHeaders,
      }).then(res => res.json()).then(data => {
        const dataObj = data?.deviceNoteTypes.map((item: any) => ({
          ...item,
          lastModDate: item?.lastModDate ? moment(item.lastModDate).format("YYYY-MM-DD") : item.lastModDate
        }))
        setData(dataObj)
      }).catch(rejected => {
        console.log(rejected);
    });
    }
},[]);

   
return (
    <>
    <LayoutComponent>
      <div>
      <div className="grid-header">Device Setup</div>
      <GridComponent dataSource={data} allowSorting={true} allowPaging={true} pageSettings={pageSettings}>
        <ColumnsDirective>
          <ColumnDirective field='Description'/>
          <ColumnDirective field='LastModBy'/>
          <ColumnDirective field='LastModDate'/>
        </ColumnsDirective>
        <Inject services={[Sort, Page]}/>
      </GridComponent>
      </div>
    </LayoutComponent>
    </>
 
)}

export default DeviceSetup;

export const Head = () => (
  <>
    <link
        href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
        rel="stylesheet"
    />
  </>
)