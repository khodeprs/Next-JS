
import style from '@/mypage.module.css'
import { parse } from 'path'
import { useEffect, useState } from 'react'

const RezaProMax = (props) => {

    let a = 0

    let [state, setState] = useState<any>({})
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById("mytitle").innerHTML = "NEW TITLE"
        }, 5000)

    })
    
    return <div><div style={{
        width: 200,
        backgroundColor: "purple", display: "flex", borderRadius: 5,
        flexDirection: "column", alignItems: "center"
    }}>
        <br-x />
        <br-x />
        <br-x />
        <f-20 id="mytitle">{props.title}</f-20>
        <img src='/1.jpg' style={{ height: 100, width: 100, }} />
        <f-12>{state.counter}</f-12>
        <br-x />
        <br-x />
    </div>
        <br-x />
        <b-200 style={{ backgroundColor: "brown" }} onClick={()=>{
            a++;
            // if(!state.counter) {
            //     state.counter = 0
            // }
            // state.counter++
            // setState(JSON.parse(JSON.stringify(state)))
        }}
        ><f-11>Click me</f-11></b-200>
    </div>
}

const Reza = (title, caption) => {

    return <div style={{
        height: 200, width: 200,
        backgroundColor: "purple", display: "flex", borderRadius: 5,
        flexDirection: "column", alignItems: "center"
    }}>
        <br-x />
        <br-x />
        <br-x />
        <f-20>{title}</f-20>
        <img src='/1.jpg' style={{ height: 100, width: 100, }} />
        <f-12>{caption}</f-12>
    </div>
}
export default (props: any) => {

    let arr = [
        { title: "REZA1", caption: "CAPTION1" },
        { title: "REZA20", caption: "CAPTION2" },
        { title: "REZA30", caption: "CAPTION3" },
        { title: "REZA40", caption: "CAPTION4" },
    ]
    return (
        <w-x>
            {/* {arr.map(item=> Reza(item.title, item.caption))} */}
            <RezaProMax title="REZA PM1" caption="CAPT1" />
        </w-x>)

}

export const getServerSideProps = async () => {

    return {
        props: {
            a: { value: "hi" }
        }
    }
}