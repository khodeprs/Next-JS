import Style from "@/mypage.module.css"
export default (props:any)=>{
    return <div style={{display:"flex", flexWrap:"wrap", maxWidth:130,
        height:200, backgroundColor:"pink", overflow:"hidden"
    }}>
        <div style={{height:50 , minWidth:50, backgroundColor:"red"}}></div>
        <div style={{height:50 , minWidth:50, backgroundColor:"green"}}></div>
        <div style={{height:50 , minWidth:50, backgroundColor:"yellow"}}></div>
    </div>

      
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}


