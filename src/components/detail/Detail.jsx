import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}
export default Detail;