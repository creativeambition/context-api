import { useState } from "react";
import "./app.css";
import { UserInfo } from "./context";

import Info from "./Info";
import SignIn from "./SignIn";

function App() {
  const [userdetails, setuserdetails] = useState({});

  return (
    <div className="container">
      <UserInfo.Provider value={{ setuserdetails, userdetails }}>
        <SignIn />

        <Info />
      </UserInfo.Provider>
    </div>
  );
}

export default App;
