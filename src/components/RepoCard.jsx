import { Link } from "react-router-dom";


const RepoCard = ({repo}) => {
    return (
        <div className="card">
            <a href={repo.html_url}><h2>{repo.name}</h2></a>
            <p className="subtitle">{repo.full_name}</p>
        </div>
    )
}

export default RepoCard;