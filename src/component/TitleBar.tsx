import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import { TitleBarProps } from '../types/component'
import { styles } from '../style/component'

const TitleBar = (props: TitleBarProps) => {
  const classes = styles()

  return (
    <AppBar elevation={0} className={classes.title}>
      <Toolbar>
        <Typography>
          {props.currentPage}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar