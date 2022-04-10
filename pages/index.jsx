import { useState } from 'react'

function Header({title}){
    const textH1 = "Título Predeterminado (default title)"
    return <h1>{title ? title : textH1}</h1>
}

export default function HomePage(){
    const arrayList1 = ["HTML","CSS","JavaScript","Node.js","React","Next.js","Vercel"]
    const arrayList2 = ["Visual Studio Code","GitHub"]

    const [likes, setLikes] = useState(0)

    function handledClick(){
        return setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Aprende lo Básico de Next.js"/>
            <h2>Tecnologías y Herramientas para el Desarrollo Web</h2>
            <ul>
                {arrayList1.map((arrayList1) => (
                    <li key={arrayList1}>{arrayList1}</li>                
                ))}
            </ul>
            <h2>Editor de Código y Control de Versiones</h2>
            <ul>
                {arrayList2.map((arrayList2) => (
                    <li key={arrayList2}>{arrayList2}</li>                
                ))}
            </ul>
            <button onClick = {handledClick}>Me gusta ({likes})</button>
        </div>
    )
}

