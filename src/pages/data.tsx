
interface DataPageProps {
    makeRequest: () => void
}

const DataPage = ({ makeRequest }: DataPageProps) => {


    return <>
        hello app
        <button onClick={makeRequest}>trigger</button>
    </>
}

export default DataPage;