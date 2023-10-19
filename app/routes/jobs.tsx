import { Jobs } from "~/components/Jobs";
import jobsStyle from "../styles/jobs.css";
import Header from "~/components/Header";
const JobPage = () => {
  return (
    <>
      <Header />
      <Jobs type="jobs" />
    </>
  );
};
export default JobPage;

export const links = () => [
  {
    rel: "stylesheet",
    href: jobsStyle,
  },
];
