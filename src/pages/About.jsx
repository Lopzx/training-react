import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileLayout from "../components/common/ProfileLayout";
import SearchBar from "../components/SearchBar";
import SearchBarClick from "../components/SearchBarClick";

const About = () => {
    const [searchVal, setVal] = useState("");
 

    return (
        <>
            <SearchBarClick searchQuery={searchVal} setSearchQuery={setVal}/>
            <div>
                <ProfileLayout searchVal={searchVal} />
            </div>
        </>
    )

    
}

export default About;
