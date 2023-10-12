import * as React from "react"
import { type PageProps } from "gatsby"
import App from "./App";
import '../scss/index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
   <>
     <React.StrictMode>
          <App />
        </React.StrictMode>,
   </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <link
        href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
        rel="stylesheet"
    />
  </>
)
