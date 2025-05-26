import { ImagesListDataProps } from "../api-query-objects/api";

interface HelloPageProps {
    data: ImagesListDataProps,
}

const HelloPage = ({ data }: HelloPageProps) => {
    console.log(data);
    
    return <>
        hello data
    </>
}

export default HelloPage;