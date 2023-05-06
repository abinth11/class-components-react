import { useEffect, useState } from "react"

const FunctionalComponent = () => {
    const [name, setName] = useState('Gojo')
    let [age, setAge] = useState(22)
    useEffect(() => {
        console.log('functional component mounted')
        return ()=>{
            console.log('functional component unmounted')
        }
    }, [name])
    return (
        <div className="functional-component">
            {console.log('functional component rendered')}
            <h1>from functional component</h1>
            <button onClick={() => {
                setAge(age -= 1)
            }}>Age-</button>
            <button style={{ marginLeft: "5px" }} onClick={() => {
                setName("Gojo satoru")
            }}>change name</button>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
        </div>
    )
}
export default FunctionalComponent