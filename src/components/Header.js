import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/Home">Home</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/new">New</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/team">Team</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TodoList</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/withRfc">With rfc</NavLink>
                            <NavLink className="dropdown-item" to="/withRcc">With rcc</NavLink>
                            <NavLink className="dropdown-item" to="/withRfcReduxSaga">With rfc redux saga</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hoc">HOC</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/loading">Loading</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
