import { useState } from 'react'

function Header({title}){
    const textH1 = "Título Predeterminado (default title)"
    return <h1>{title ? title : textH1}</h1>
}

export default function HomePage(){
    const arrayList = ["HTML","CSS","JavaScript","Node.js","React.js"]

    const [likes, setLikes] = useState(0)

    function handledClick(){
        return setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Desarrollo Web"/>
            <ul>
                {arrayList.map((arrayList) => (
                    <li key={arrayList}>{arrayList}</li>                
                ))}
            </ul>
            <button onClick = {handledClick}>Me gusta ({likes})</button>
        </div>
    )
}

