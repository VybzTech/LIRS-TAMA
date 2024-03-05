import Container1 from "./Container1.jsx";
import Container2 from "./Container2.js";
import Container3 from "./Container3.js";
import Container4 from "./Container4.js";
import Confirmation from "./Confirmation.js";
import { useStatus } from "../context/StatusContext.js";

const Body = () => {
  const { status, setStatus } = useStatus();
  // ('Verified', 'Validated', 'Uploaded', 'Completed') Verification

  switch (status) {
    case "Verified":
      return <Container2 />;
      break;
    case "Validated":
      return <Container3 />;
      break;
    case "Uploaded":
      return <Container4 />;
      break;
    case "Completed":
      return <Confirmation />;
      break;
    default:
      return <Container3 />;
      break;
  }
};

export default Body;
