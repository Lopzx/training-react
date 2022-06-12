import axios from "axios"
import { useEffect, useState } from "react"

export const QuestionCreate = () => {
    const [nextId, setNextId] = useState();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const datas = await axios.get("http://localhost:4000/id_count");
            setNextId(datas.data.count + 1);
        }
        fetchData();
    }, [])

    const postMyQuestion = async (e) => {
        e.preventDefault()

        axios.post("http://localhost:4000/questions", {
            id: nextId,
            title,
            detail: details
        })

        axios.put("http://localhost:4000/id_count", {
            count: nextId
        })
        window.location.href = "/"
    }

    return (
        <form onSubmit={(e) => postMyQuestion(e)} >
            <div className="form-wrapper">
                <label htmlFor="">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} name="title" type="text"/>
            </div>
            <div className="form-wrapper">
                <textarea onChange={(e) => setDetails(e.target.value)} placeholder="details" name="detail" id="" cols="30" rows="10"></textarea>
            </div>

            <button >Submit</button>
        </form>
    )
} 