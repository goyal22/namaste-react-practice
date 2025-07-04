import { useRouteError } from "react-router";
const Error = () => {
    const Errormsg = useRouteError();
    console.log(Errormsg);
    return (
     <div> 
    <h1>Error</h1>
    </div>  
)
}

export default Error;