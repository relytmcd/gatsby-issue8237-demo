import React from "react"
import MuiButton from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  button: {
    backgroundColor: "pink"
  }
})

const Button = ({ classes, handleClick }) => (
  <MuiButton
    variant="contained"
    color="secondary"
    onClick={handleClick}
    className={classes.button}
  >
    Im not feeling so hot.
  </MuiButton>
)

export default withStyles(styles)(Button)
