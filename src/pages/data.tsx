import { client } from "../api-query-objects/factory";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface DataPageProps {
    
}

const DataPage = ({  }: DataPageProps) => {
    const navigate = useNavigate();
    const { makeRequest, status, data } = client.imagesList();

    useEffect(() => {
        const redirect = async () => {
            navigate('/data', {
                state: { data }
            });
        }

        if (status === 'loaded') {
            redirect();
        }
    }, [status]);

    return <>
        hello app
        <button onClick={makeRequest}>trigger</button>
    </>
}

export default DataPage;