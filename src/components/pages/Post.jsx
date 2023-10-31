import { useParams, useSearchParams } from "react-router-dom";


export default function Post() {
    const { category, id } = useParams();
    let [searchParams] = useSearchParams();

    console.log(searchParams);
    console.log(searchParams.get('page'));
    console.log(searchParams.get('sort'));

    return (
        <>
            <h1>Post Page Category: {category} || {id}</h1>
        </>
    )
}
