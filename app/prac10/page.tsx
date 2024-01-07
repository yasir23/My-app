
"useclient";
import { useState } from "react";
export default function Home() {

    
    
    let [count, setCount] = useState(0) ;

    let increment = () => {
    if (count < 10){
        setCount((ct) => ct + 1);
        setCount((ct) => ct + 1);
        setCount((ct) => ct + 1);

    }

    let decrement = () =>{
        setCount(count--);

        if (count< 0){
            setCount(0);
        }
    };

    return(

        <main>
            <button onClick={increment} className="bg-blue-900"></button>

            <button onClick={decrement} className="bg-slate-900"></button>
        </main>
    )

    

}
}
