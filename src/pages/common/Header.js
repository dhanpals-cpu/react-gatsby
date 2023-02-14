/** @jsx jsx */
import { jsx, Heading,Avatar } from "theme-ui"
import { Link } from 'gatsby'

export default function HeaderCommon(props) {
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
            textDecoration:'none',
            mr:4
          }}>
        <Heading>My App</Heading>
      </Link>
    </div>
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        order: 2,
      }}>
      <Link
        to="/blog"
        className="active"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            "&.active": {
              borderBottom: "2px solid",
              color:"var(--theme-ui-colors-active)"
            },
            textDecoration:'none',
            mr:4,
            fontSize:14
          }}>
        Blog
      </Link>
      <Link
        to="/about"
        className="active"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            textDecoration:"none",
            mr:4,
            fontSize:14
          }}>
        About
      </Link>
      <Link
        to="/contact"
        sx={{
            color: "var(--theme-ui-colors-primary)",
            textDecoration:"none",
            mr:4,
            fontSize:14
          }}>
        Contact
      </Link>
      <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
    </div>
  </header>
  )
}