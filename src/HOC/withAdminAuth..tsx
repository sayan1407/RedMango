import userModel from "../Interface/userModel";
import jwt_decode from "jwt-decode";
import { SD_Role } from "../Utility/SD";


const withAdminAuth = (WrappedComponent: React.ComponentType) => {
  console.log("withAdminAuth HOC called");
  return (props: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return null;
    }
    console.log("token");
    if(token){
            const { role }: userModel = jwt_decode(token);
            var adminRole : string = SD_Role[SD_Role.admin];
            if(role != adminRole)
            {
                window.location.href = "/accessDenied";
                return null;
            }
      
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAdminAuth;