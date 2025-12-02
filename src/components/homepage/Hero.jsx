export default function Hero() {
  return (
    <>
      <div className="container my-20  mx-auto px-45 border">
        <div className="flex flex-row border">
          <div>
            <h4 className="font-semibold text-2xl">
              Expert repair and installation when you need it
            </h4>
            <p>
              HomeTech Repair & Installations handles air conditioners, washing
              machines, and purtfiers with precision and care. We show up on
              time, do the work right, and leave your home running smooth.
            </p>
            <button>Book Now</button>
            <button>Learn more</button>
          </div>
          <div>
            <img src="src\assets\Images\hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
