export const ProfileCard = ({information}) => {

    console.log(information)
    return (
        <>
            <div className="flex">
                <div className="img-wrapper mg-right-5">
                    <img className="profile-img" src={information.avatar_url} alt="Meaningfull description here" />
                </div>
                <div className="detail-wrapper">
                    <h2>{information.login}</h2>
                    <p>{information.name}</p>
                    <p>{information.email}</p>
                    <a href={information.html_url}>{information.html_url}</a>
                </div>
            </div>
        </>
    )
}