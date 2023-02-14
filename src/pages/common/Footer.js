/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default function Footer(props) {
  return (
    <header
    sx={{
      display: "grid",
      gridGap: 3,
      maxWidth: "100%",
      pl:10,
      pr:5,
      px: 3,
      py: 3,
      gridAutoFlow: "row",
      gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
      variant: "styles.header",
    }}>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 3],
        order: [0, 1],
      }}>
      
    </div>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
     <Link
        to="/blog"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            textDecoration:"none",
            mr:4
          }}>
        Blog
      </Link>
      <Link
        to="/about"
        className="active"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            textDecoration:"none",
            mr:4
          }}>
        About
      </Link>
      <Link
        to="/contact"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            textDecoration:"none",
            mr:4
          }}>
        Contact
      </Link>
    </div>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        order: 2,
      }}>
       <span
        sx={{
          p: 2,
          mr:20
        }}>
        (C) My App 2023
      </span>
    </div>
  </header>
  )
}