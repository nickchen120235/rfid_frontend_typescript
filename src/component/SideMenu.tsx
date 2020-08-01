import React from 'react'
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { SideMenuProps } from '../types/component'
import { styles } from '../style/component'

const SideMenu = (props: SideMenuProps) => {
  const classes = styles()

  return (
    <Drawer variant='persistent' anchor='left' className={classes.drawer}>
      <List>
        <Toolbar />
        {['add_card', 'card_info', 'card_record'].map((text: string) => (
          <ListItem key={text} button onClick={() => props.onClick(text)} selected={props.selected === text} component={Link} to={`/${text}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu