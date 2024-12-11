import { useState } from "react"
import fs from 'fs'


let a=['1','+','2','-','3']
const calc=(arr)=>{
    let res=null;
    let prevop=null;
    for (let i of arr){
        if (res==null){
            res=Number(i);
                        
        }
        if (["+","-","*","/"].includes(i)){
            prevop=i;
        }
        else if (prevop!=null&&!isNaN(Number(i))){
            if (prevop=="+"){
                res+=Number(i)
            }
            else if (prevop=="-"){
                res-=Number(i)
            }
            else if (prevop=="*"){
                res*=Number(i)
            }
            else if (prevop=="/"){
                res/=Number(i)
            }
        }
    }
    return res
}

console.log(calc(a))

const Turing = (props)=> {
    let [state, setState] = useState({text:"hi"} as any)
    
    let l = []
    let c = ()=>{
        document.getElementById("result").innerText = l.join(" ")
    }

    return <c-x style={{backgroundColor:"skyblue" , width:500 , height:400}} onClick={()=>{
        c()
    }}>
        <f-c id="result" style={{backgroundColor:"pink" , width:500 , height:100}}>
            RESULT
        </f-c>
        <f-x style={{height:100 , width:500 , backgroundColor:"lightcoral"}}>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}} onClick={()=>{l.push("7")}}>7</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("8")}}>8</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("9")}}>9</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("+")}}>+</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("-")}}>-</f-cc>
            
        </f-x>

        <f-x style={{height:100 , width:500 , backgroundColor:"lightcoral"}}>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("4")}}>4</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("5")}}>5</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("6")}}>6</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("*")}}>*</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("/")}}>/</f-cc>
            
        </f-x>        
        
        <f-x style={{height:100 , width:500 , backgroundColor:"lightcoral"}}>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("1")}}>1</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("2")}}>2</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("3")}}>3</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}}onClick={()=>{l.push("0")}}>0</f-cc>
            <f-cc style={{height:100 , width:500 , backgroundColor:"lightcyan"}} onClick={()=>{
                setTimeout(() => {
                    document.getElementById("result").innerText=calc(l)
                }, 100);
            }}>=</f-cc>
            
        </f-x>
    </c-x>
    
    
    
}

export default (props: any)=>{

    return <Turing/>
}

export const getServerSideProps = async()=>{
    return {
        props:{
        a:{value:"hi"}
    }
    }
}