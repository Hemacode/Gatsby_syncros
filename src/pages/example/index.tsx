import React, { useEffect, useState } from 'react'
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject, Sort,Page 
} from "@syncfusion/ej2-react-grids";
import LayoutComponent from '../main/layout'

const Example = () => {
    const  [data, setData] = useState([]);

    const pageSettings = {
        pageSize: 10,
        pageSizes: ["All","5", "10", "20", "50"],
        pageCount: 5,
        currentPage: 1,
      };
  
    
    const allDataQuery = `
    query (
        $options: PageQueryOptions
      ) {
        posts(options: $options) {
          data {
            id
            title
            body
          }
          meta {
            totalCount
          }
        }
      }
    `
    const allDatavariable = {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 10
        }
      }
    }

    const allData = () => {
        fetch("https://graphqlzero.almansi.me/api", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: allDataQuery,
              variables: allDatavariable,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setData(data?.data?.posts?.data) 
              console.log('Alls Post:', data.data.posts?.data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

    useEffect(() => {
        allData()
  },[])

  return (
    <>
    <LayoutComponent>
      <div>
      <div className="grid-header">GraphQL</div>
      <GridComponent dataSource={data} allowSorting={true} allowPaging={true} pageSettings={pageSettings}>
        <ColumnsDirective>
          <ColumnDirective field='id' width={100}/>
          <ColumnDirective field='title'/>
          <ColumnDirective field='body'/>
        </ColumnsDirective>
        <Inject services={[Sort, Page]}/>
      </GridComponent>
      </div>
    </LayoutComponent>
    </>
  )
}

export default Example

export const Head = () => (
    <>
      <link
          href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
          rel="stylesheet"
      />
    </>
  )