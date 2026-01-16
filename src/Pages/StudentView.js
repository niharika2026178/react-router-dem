import { Link } from "react-router-dom";
const StudentView = () => {
    const students = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" }
    ];
    return (
        <div className="container mt-4">
            <h3>Student List</h3>
            <ul className="list-group">
                {students.map(s => (
                    <li key={s.id} className="list-group-item">
                        {s.name}
                        <Link to={`/student/view/${s.id}`} className="btn btn-sm btn-primary float-end">
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default StudentView;