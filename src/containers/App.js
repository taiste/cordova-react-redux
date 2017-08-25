import React, { Component }       from 'react'
import { Link, withRouter }       from 'react-router-dom'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import getMuiTheme                from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider'
import AppBar                     from 'material-ui/AppBar'
import Drawer                     from 'material-ui/Drawer'
import Menu                       from 'material-ui/Menu'
import MenuItem                   from 'material-ui/MenuItem'
import Paper                      from 'material-ui/Paper'
import Divider                    from 'material-ui/Divider'
import Routes                     from '../routes'

/* actions */
import * as uiActionCreators from '../core/actions/actions-ui'

const styles = {
  backgroundStyle: {
    boxShadow: '0px 2px 12px rgba(0,0,0,.2)',
    padding: '16px 16px 10px',
    height: '100%'
  }
}

export class App extends Component {
  constructor(props) {
    super(props)

    if (window.cordova) {
        screen.orientation.lock('portrait');
    }
  }

  openDrawer=() => {
    this.props.actions.ui.openDrawer()
  }

  closeDrawer=() => {
    this.props.actions.ui.closeDrawer()
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{height: '100vh'}}>
          <AppBar title="Example"
                  className="app-bar"
                  style={{position: 'fixed', top: '0'}}
                  onLeftIconButtonTouchTap= {this.openDrawer} />
          <Drawer docked={false}
                  disableSwipeToOpen={true}
                  open={this.props.ui.drawerOpen}
                  onRequestChange={this.closeDrawer}>
                  <Menu>
                    <MenuItem primaryText="Home"
                              containerElement={<Link to="/"/>}
                              onTouchTap={this.closeDrawer}/>
                    <Divider/>
                    <MenuItem primaryText="Item 1"
                              containerElement={<Link to="/item1"/>}
                              onTouchTap={this.closeDrawer}/>
                    <MenuItem primaryText="Item 2"
                              containerElement={<Link to="/item2"/>}
                              onTouchTap={this.closeDrawer}/>
                  </Menu>
          </Drawer>
          <Paper style={{marginTop: '64px', height: '100%'}}>
            <Routes/>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  routing: state.routing
})


const mapDispatchToProps = dispatch => ({
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
