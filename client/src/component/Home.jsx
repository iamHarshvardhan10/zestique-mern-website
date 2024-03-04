import About from "./About";
import ReservationTable from "./ReservationTable";
import Testinomials from "./Testinomials";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeInfo">
          <span>Open since 1982</span>
          <span>Every Bite Narrates A Tale</span>
          <span>
            Over the years, we have had the pleasure of serving more than 3,000
            individuals
          </span>
          <div className="btn">
            <button>Reserve A table</button>
            <button>See the menu</button>
          </div>
        </div>
      </div>
      <ReservationTable/>
      <About/>
      <Testinomials/>
    </>
  );
};

export default Home;
