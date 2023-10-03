import Header from "~/components/Header";
import homeStyle from "../styles/home.css";
import jobsStyle from "../styles/jobs.css";
import { Jobs } from "~/components/Jobs";
const _index = () => {
  return (
    <>
      <Header />

      <div className="gs-hero">
        <h1>Find Your Best Job</h1>
        <div className="gs-flex gs-flex-center">
          <button className="gs-btn-primary gs-mt-2">Starts Now</button>
        </div>
      </div>

      <Jobs />


    </>
  );
};

export default _index;

export const links = () => [
  {
    rel: "stylesheet",
    href: homeStyle,
  },
  {
    rel: "stylesheet",
    href: jobsStyle
  }
];
