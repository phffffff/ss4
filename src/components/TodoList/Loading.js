import { useSelector } from 'react-redux'

function Loading({ children }) {
    const { isLoading } = useSelector(state => state.stateLoading)
    console.log(isLoading);

    return (
        <>
            {(
                isLoading &&
                <div style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                }}>
                    <div className="position-fixed" style={{
                        height: "100vh",
                        top: "50%",
                        left: "50%",
                        backgroundColor: "rgb(0, 0, 0, 0.7)",
                    }}>
                        <div className="spinner-border text-primary" role="status" >
                        </div>
                    </div >
                </div>
            ) || <></>
            }
        </>
    );
}

export default Loading;