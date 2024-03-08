import Container1 from "./Container1.jsx";
import Container2 from "./Container2.tsx";
import Container3 from "./Container3.tsx";
import Container4 from "./Container4.tsx";
// import Confirmation from "./Confirmation.js";
import { useStatus } from "../context/StatusContext.js";

const Body = () => {
  const { status } = useStatus();
  // ('Verified', 'Validated', 'Uploaded', 'Completed') Verification
  //  let navigate;useEffect(() => {
  //    navigate = useNavigate();
  //  }, [status])

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
      // case "Completed":
      //   return navigate("/Completed");
      // <Confirmation />;
      break;
    default:
      return <Container3 />;
      break;
  }
};

export default Body;
