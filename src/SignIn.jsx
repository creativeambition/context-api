import { useContext, useState } from "react";
import { UserInfo } from "./context";

function SignIn() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuserdetails } = useContext(UserInfo);

  function handleSubmit(e) {
    e.preventDefault();

    setuserdetails({
      name: username,
      pass: password,
    });

    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setusername(e.target.value);
          }}
          placeholder="username"
          type="text"
        />

        <input
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="password"
          type="text"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SignIn;
