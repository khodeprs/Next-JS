import Style from "@/mypage.module.css"
export default (props:any)=>{

    return <div style={{ }}>
        <img src="/1.jpg" style={{width:100, height:100, 
        objectFit:"contain", backgroundColor:"pink",}}/>

    </div>
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}
