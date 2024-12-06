import { useState } from "react"

const Turing = (props)=> {
    let [state, setState] = useState({text:"hi"} as any)

    return <c-x style={{width:500, height:400, backgroundColor:"skyblue"}}>
        <f-c style={{width:500, height:100, backgroundColor:"darkgray"}}>
            RESULT
        </f-c>
        <f-x style={{height:100, width:500, backgroundColor:"lightcoral"}}>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>7</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>8</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>9</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>+</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>-</f-cc>
        </f-x>
        <f-x style={{height:100, width:500, backgroundColor:"firebrick"}}>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>6</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>5</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>4</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>*</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>/</f-cc>
        </f-x>
        <f-x style={{height:100, width:500, backgroundColor:"lightcoral"}}>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>3</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>2</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>1</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>0</f-cc>
            <f-cc style={{width:500, height:100, backgroundColor:"lightcyan"}}>=</f-cc>
        </f-x>

    </c-x>
    
}

export default (props: any)=>{

    return <Turing/>


}
    
    // return <div className={style.ali}>
        // {JSON.stringify(props)}
        // return <div style={{display:"flex",
        //     // اینجا چون کالمن ریورس داریم بای میره بالاتر
        //     // flexDirection:"column-reverse",
        //     // alignItems:"center",
        //     backgroundColor:"purple",
        //     height:200 , width:200,
        //     flexDirection:"row",
        //     alignItems:"center",
        //     justifyContent:"center"
        // }}>
            // <div>hi</div>
            // <div>bye</div>
    // </div>

export const getServerSideProps = async()=>{
    return {
        props:{
        a:{value:"hi"}
    }
    }
}