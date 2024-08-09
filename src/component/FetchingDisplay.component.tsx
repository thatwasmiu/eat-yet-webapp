import { UseQueryResult } from "react-query";
import LoadingScrean from "./LoadingScreen.component";
import ErrorScreen from "./ErrorScreen.component";
import NotFoundPage from "./NotFoundPage.component";



const FetchingDisplay = ({isLoading, error, isFetching}: UseQueryResult<unknown, unknown>) => {

    if (isLoading) return <LoadingScrean />;
    if (isFetching) return <LoadingScrean />;
    if (error) return <ErrorScreen  />;
    return <NotFoundPage />
}

export default FetchingDisplay;