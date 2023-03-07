import { Outlet, NavLink, useNavigate, useLocation, useMatch, useParams, useSearchParams, useResolvedPath, Navigate, usePr } from 'react-router-dom'



function Home(props) {
    // const hisory = useNavigate();
    // const location = useLocation();

    // const [searchParams, setSearchParams] = useSearchParams()

    // console.log(searchParams.get("id"))
    // console.log(setSearchParams)
    // let match = useMatch({ });
    // console.log(match);
    // const path = useResolvedPath("/home");
    // const match = useMatch({ path: path.pathname })
    // console.log(path)
    // console.log(match)

    // const params = useParams()

    // console.log(Navigate);


    // console.log(location);
    // console.log(params);
    // console.log(match);


    return (
        <div>
            <h1>Home</h1>
            {/* <Navigate to='/new' /> */}
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <NavLink style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    }
                }} to="/new">new</NavLink> |{" "}
                <NavLink style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    }
                }} to="/team">team</NavLink>
            </nav>
            {/* <button onClick={() => hisory('/new', { replace: true })}>Helo</button>
            <button onClick={() => hisory(-1)}>hi</button> */}
            <Outlet />
        </div>
    );
}

export default Home;