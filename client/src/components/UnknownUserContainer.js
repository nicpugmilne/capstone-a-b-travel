import { Box } from "@chakra-ui/react";
import { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignUpCard";

function UnknownUserContainer({ setUser }) {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <Box>
      {hasAccount ? (
        <LoginCard
          setUser={setUser}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        ></LoginCard>
      ) : (
        <SignupCard
          setUser={setUser}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        ></SignupCard>
      )}
    </Box>
  );
}

export default UnknownUserContainer;
