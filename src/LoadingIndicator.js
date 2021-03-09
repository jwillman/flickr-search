import Spinner from "react-bootstrap/Spinner";

function LoadingIndicator(props) {
    if (props.loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    } else {
        return <span></span>;
    }
}

export default LoadingIndicator;
