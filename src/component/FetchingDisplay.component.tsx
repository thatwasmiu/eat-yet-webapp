import { UseQueryResult } from "react-query";
import LoadingScrean from "./LoadingScreen.component";
import ErrorScreen from "./ErrorScreen.component";



const FetchingDisplay = ({isLoading, error}: UseQueryResult<unknown, unknown>) => {

    if (isLoading) return <LoadingScrean />;
    if (error) return <ErrorScreen  />;
}

export default FetchingDisplay;