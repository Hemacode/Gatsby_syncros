import * as React from "react"
import { type PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import App from "./App";
import '../scss/index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
   <>
     <React.StrictMode>
      <Helmet>
          <link
            href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
            rel="stylesheet"
          />
        </Helmet>
          <App />
        </React.StrictMode>,
   </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
    <link
        href="https://cdn.syncfusion.com/ej2/21.1.35/bootstrap5.css"
        rel="stylesheet"
    />
  </>
)
