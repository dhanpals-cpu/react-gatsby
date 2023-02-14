/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Footer from "./Footer"
import HeaderCommon from "./Header"
export default (props) => (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
     <HeaderCommon />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}>
        <div
          sx={{
            maxWidth: '100%',
            mx: "auto",
            px: 3,
          }}>
          {props.children}
        </div>
      </main>
      <footer
        sx={{
          width: "100%",
        }}>
        <Footer />
      </footer>
    </div>
  )