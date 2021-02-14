import React from "react"
import { Link } from "gatsby"
import logo from "../../static/main_icon.svg"
import notes from "../../static/notes.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="main-heading">
        <div id='box-left' style={{float:'left'}}>
          <Link to="/" ><img src={logo}></img></Link>
        </div>
        <div id='box-right' style={{float:'right', align:'center'}}>
          <Link to="https://www.notion.so/junhyopark/notes-ecbba9771c9b4c0ab71d9ec94b4bba2e" target="_blank"><img src={notes}></img></Link>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="main-heading">
        <Link to="/"><img src={logo}></img></Link>
        {/* <img src={logo}></img> */}
        {/* <Link to="/"><img src="/static/main_icon.svg"></Link> */}
      </div>
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
