import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as FabricLogo} from '../../ass/fabric.svg'
import "./navigation.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <FabricLogo className="logo" />
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )

}   

export default Navigation