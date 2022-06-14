import {useFetch} from "../hooks/useFetch";

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3001')
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && <div>{data.message}</div>}
        </div>
    );
}