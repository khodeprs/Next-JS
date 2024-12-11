process.env['NODE_TLS_REJECT_UNAUTHORZED']="0";
import fs from 'fs';
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