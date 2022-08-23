import { Box } from "@chakra-ui/react";
import { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignUpCard";

function HomeContainer() {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <>
      <Box>
        {hasAccount ? (
          <LoginCard
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
          ></LoginCard>
        ) : (
          <SignupCard
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
          ></SignupCard>
        )}
      </Box>
    </>
  );
}

export default HomeContainer;
