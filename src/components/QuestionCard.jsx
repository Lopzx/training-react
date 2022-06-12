import axios from "axios";
import { Link } from "react-router-dom";

const QuestionCard = ({ title, detail, id }) => {

  const deleteData = async () => {
    await axios.delete("http://localhost:4000/questions/" + id);
    window.location.reload();
  }

  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <div className="card__action">
        <Link className="btn btn-primary" to={`/question/${id}/edit`}>
          Edit
        </Link>
        <button onClick={() => deleteData()} type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default QuestionCard;
