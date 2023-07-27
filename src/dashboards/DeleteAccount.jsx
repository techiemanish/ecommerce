import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {
    //const navigate = useNavigate();
    
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    let token = data.jwtToken.token;
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const payload ={
        email: data.email
    }
    axios.delete("https://ecommerce-api-4fpf.onrender.com/api/login",{ headers, data: payload })
    .then((res)=>{
        if(res.data.status === "Success"){
            toast.success(res.data.message);
            // navigate("/login", { replace: true });
        }
        else{
            toast.error("Something went wrong, Please try again!")
        }
    })
}

export default DeleteAccount