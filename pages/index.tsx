import Style from "@/mypage.module.css"
export default (props:any)=>{

    let a = ["ali","hassan","erfan"].map(num=>{
    return <>
    {num}
        <div className={Style.sa}>
            <div>hi</div>
            <div>bye</div>
            <div>ok</div>
        </div>
        <br/>
    </>
    }
)
    return <div>
        {a}
    </div>
        
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}


