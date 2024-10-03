import { Hidden } from '@material-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DesktopIndex from '../component/menu/desktop'
import MobileIndex from '../component/menu/mobile'
import Footer from '../component/footer'
import useStyle from './masterstyle'
import ModalLogin from '../component/modal'
import Routes from '../routes'


export default function Master() {
  const classes=useStyle()
  return (
    <BrowserRouter>
        <div className={classes.root}>
     <Hidden xsDown>
<DesktopIndex />
     </Hidden>
     <Hidden smUp>
<MobileIndex />
     </Hidden>
     <Routes />
     <Footer />
     <ModalLogin />
    </div>
    </BrowserRouter>

  );
}
