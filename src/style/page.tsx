import { makeStyles } from '@material-ui/core/styles'

import { drawerWidth } from './component'

export const styles = makeStyles(theme => ({
  container: {
    marginLeft: drawerWidth
  }
}))