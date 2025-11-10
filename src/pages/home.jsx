import React from "react"
import { Header } from "../components/Header";
import { Herosection } from "../components/Herosection";
import { About } from "../components/About";
export const Home =()=>{
return(<>

<Header/>
<main>
<Herosection/>
<About/>
</main>
</>);
}


