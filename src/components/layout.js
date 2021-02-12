import React from "react"
import { Link } from "gatsby"
import logo from "../../static/main_icon.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/"><img src={logo}></img></Link>
        {/* <img src={logo}></img> */}
        {/* <Link to="/"><img src="/static/main_icon.svg"></Link> */}
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        <Link to="/"><img src={logo}></img></Link>
        {/* <img src={logo}></img> */}
        {/* <Link to="/"><img src="/static/main_icon.svg"></Link> */}
      </h1>
    // header = (
    //   <Link className="header-link-home" to="/">
    //     ← home
    //     {/* {title} */}
    //     {/* <img src={logo}></img> */}
    //   </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, 
        {` `}
        <a>Junhyo Park all rights reserved</a>
      </footer>
    </div>
  )
}

export default Layout
