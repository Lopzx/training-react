import axios from "axios";
import { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { ProfileCard } from "../ProfileCard";
import RepoCard from "../RepoCard"
import SearchBar from "../SearchBar";

const ProfileLayout = ({searchVal}) => {
    const baseApi = "https://api.github.com/users/";
    const [userVal, setUser] = useState();
    const [repos, setRepos] = useState();
    const [searchValue, setSearch] = useState("");

    useEffect(() => {
        if(!searchVal) return;

        setUser(null);
        setRepos(null);
        const fetchData = async () => {
            const user = await axios.get(baseApi + searchVal)
            setUser(user.data);
            const repolist = await axios.get(user.data.repos_url);
            setRepos(repolist.data);
        }
        fetchData();
    }, [searchVal]);

    const processRepoList = () => {
        if(!searchVal)
            return "Input Value"
        if(!userVal || !repos)
            return "Loading..."
        return (
           [ <SearchBar searchQuery={searchValue} setSearchQuery={setSearch} title={"Cari Repository"}/>,
           repos.filter((el) =>el.name.toLowerCase().includes(searchValue.toLowerCase()))
           .map((val) => <RepoCard key={val.id} repo={val}/>)]
        )
        
        
    }
    

    const RenderProfile = () => {
        if(!userVal) {
            return;
        }

        return <ProfileCard information={userVal}/>
    }
    
    return (
        <>
            <div className="profile-wrapper">
                {RenderProfile()}
            </div>
            <div className="repo-wrapper">
                {processRepoList()}
            </div>
        </>
    )
}

export default ProfileLayout;