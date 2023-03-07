import { useDispatch, useSelector } from 'react-redux'

import { actionCreater } from '../../redux/actions/hocAction';

import Login from './Login';
import SignIn from './SignIn';
import SlideDown from './SlideDown';

function HocComponent() {
    const dispatch = useDispatch();

    const handleOnClichSignIn = () => {
        dispatch(actionCreater('CHANGE_COMPONENT', <SignIn />))
    }
    const handleOnClickLogin = () => {
        dispatch(actionCreater('CHANGE_COMPONENT', <Login />))
    }

    return (
        <>
            <SlideDown>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId"
                    onClick={handleOnClickLogin}
                >
                    Login
                </button>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId"
                    onClick={handleOnClichSignIn}
                >
                    SignIn
                </button>
            </SlideDown>
        </>
    );
}

export default HocComponent;