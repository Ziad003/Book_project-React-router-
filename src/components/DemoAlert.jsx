import { useLocation } from "react-router";

const DemoAlert = () => {
    const location=useLocation();
    const value=location.state?.value||"";
    return (
        <div className="text-red-200 text-center font-bold text-xl mt-15">
      This site is for demo.
      <br />
      Main functionalities {`with ${value}`} are coming soon...
    </div>
    );
};

export default DemoAlert;