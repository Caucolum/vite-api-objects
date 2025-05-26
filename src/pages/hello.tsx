import { ImagesListDataProps } from "../api-query-objects/api";

interface HelloPageProps {
    data: ImagesListDataProps
}

const HelloPage = ({ data }: HelloPageProps) => {

    return <>
        hello data
        {data && data.message}
    </>
}

export default HelloPage;