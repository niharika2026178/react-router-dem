import { useParams } from "react-router-dom";
const StudentDetail=()=>{
    const {id}=useParams();
    return(
        <div className="container mt-4">
            <h3>Student Details</h3>
            <p><strong>Student ID:</strong>{id}</p>
        </div>
    )
}
export default StudentDetail;