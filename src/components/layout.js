import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Menu, Layout, Row, Col } from 'antd';

import Header from "./header"

const LayoutMain = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      news {
        categories {
          id
          slug
          name_rubric
        }
      }
    }
  `)

  const { Sider } = Layout;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Row>
          <Col lg={4}>
            <Sider>
              <Menu>
                {
                  data.news.categories.map(item => (
                    <Menu.Item key={item.id}>
                      <Link to={`/${item.slug}`}>{item.name_rubric}</Link>
                    </Menu.Item>
                  ))
                }
              </Menu>
            </Sider>
          </Col>
          <Col lg={20}>
              <main style={{ padding: '8px'}}>{children}</main>
          </Col>
        </Row>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain
