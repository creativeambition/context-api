import { useContext } from "react";
import { UserInfo } from "./context";

function Info() {
  const { userdetails } = useContext(UserInfo);

  return (
    <div style={{ marginTop: "100px" }}>
      <span>
        Your username is -- <p>{userdetails.name}</p>
      </span>

      <br />
      <span>
        Your password is -- <p>{userdetails.pass}</p>
      </span>
    </div>
  );
}

export default Info;
