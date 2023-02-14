import * as React from "react"
import { ThemeProvider  } from 'theme-ui'
import Layout from "./common/layout"
import Home from "./Home"

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
  },
}


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
