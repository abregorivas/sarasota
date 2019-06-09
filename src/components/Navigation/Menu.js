import React from "react"
import PropTypes from "prop-types"
import uuidv1 from "uuid"
import { Link, Breadcrumbs } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

const Menu = props => {
  const { menuItems } = props
  return (
    <Breadcrumbs aria-label="Breadcrumb">
      {menuItems.map(item => (
        <Link
          component={item.external ? "a" : GatsbyLink}
          key={uuidv1()}
          color="inherit"
          variant="caption"
          to={item.external ? null : item.route}
          href={item.route}
          target={item.external ? "_blank" : null}
          rel={item.external ? "noopener" : null}
        >
          {item.label}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

Menu.propTypes = { menuItems: PropTypes.array }

export default Menu
