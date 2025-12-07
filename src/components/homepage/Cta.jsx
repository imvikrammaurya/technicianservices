import Button from "../ui/Button";
export default function Cta() {
  return (
    <>
      <div className="flex flex-col container mt-35  mx-auto px-25  ">
        <div className="flex flex-col text-center">
          <h4>Ready to get things fixed</h4>
          <p>
            Contact HomeTech Repair & Installations today and schedule your
            service appointment with a team that shows up and gets it done.
          </p>
          <Button variant="ghost">Schedule service</Button>
          <Button variant="ghost">Get quote</Button>
        </div>
      </div>
    </>
  );
}
