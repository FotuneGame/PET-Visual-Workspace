import API from "@/api";



export  const check_auth = (): boolean =>{
    if(localStorage.getItem("access_token")){
        //cookie need have "httpOnly; secure; samesite=strict" (refresh_token will be create at server and save in cookie)
        const refresh_token = document.cookie.split("; ").find((row) => row.startsWith("refresh_token="))?.split("=")[1];
        if(refresh_token){
            API.auth.Refresh(refresh_token).then(res=>{
                if(res.headers.Authorization){
                    localStorage.setItem("access_token",res.headers.Authorization.split(" ")[1]);
                    return true;
                }
            })
        }else localStorage.removeItem("access_token");
    }
    return false;
}