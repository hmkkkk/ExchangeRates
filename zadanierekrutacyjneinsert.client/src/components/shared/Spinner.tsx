import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="spinner-wrapper">
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#510EF2"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="" />
        </div>
        
    )
}

export default Spinner;