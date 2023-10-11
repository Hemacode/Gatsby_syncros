import React from "react";
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject, Sort,Page 
} from "@syncfusion/ej2-react-grids";
import LayoutComponent from "../main/layout";
import moment from "moment";

type Ttoken = {
    Authorization: any,
    "X-Konami-Session-Timetoexpire": number,
    "X-Konami-Iop": number
  }
const DeviceSetup = () =>{
    const [data, setData] = React.useState<{ deviceNoteTypes: object[]} | any>([]);

    const pageSettings = {
      pageSize: 10,
      pageSizes: ["All","5", "10", "20", "50"],
      pageCount: 5,
      currentPage: 1,
    };

    const token: Ttoken = {
        Authorization: localStorage.getItem("auth"),
        "X-Konami-Session-Timetoexpire":  1000000,
        "X-Konami-Iop": 10000062
    }
    localStorage.setItem("token", JSON.stringify(token));
    const getToken: string | null = localStorage.getItem("token");


  React.useEffect(() => {
    if (getToken) {
      fetch("https://fedev.kgisystems.com:4242/v1/system/devices/notes/types?limit=-1", {
        "method": "GET",
        "headers": JSON.parse(getToken),
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