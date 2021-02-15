/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import facebook from "../../static/social_icon/facebook.svg"
import instagram from "../../static/social_icon/instagram.svg"
import linkedin from "../../static/social_icon/linkedin.svg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          written by <strong>{author.name}</strong> {author?.summary || null}
          <Link to="https://facebook.com/jun.f8k" target="_blank"><img src={facebook} alt="Link to Facebook"></img></Link>
          {`      `}
          <Link to="https://instagram.com/junhyopark_" target="_blank"><img src={instagram} alt="Link to Instagram"></img></Link>
          {`      `}
          <Link to="https://linkedin.com/in/junhyopark" target="_blank"><img src={linkedin} alt="Link to LinkedIn"></img></Link>
          <br/>
          tech enthusiast & intersted in wellness 🌎 🏋️‍♂️ 
          {/* <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a> */}
        </p>
      )}
    </div>
  )
}

export default Bio
