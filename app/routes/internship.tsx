import { Jobs } from "~/components/Jobs";
import jobsStyle from "../styles/jobs.css";
import Header from "~/components/Header";
const InternshipPage = () => {
    return (
      <>
      <Header />
      <Jobs type="internship"/>
      </>
    )
}
export default InternshipPage;

export const links = () => [
    {
      rel: "stylesheet",
      href: jobsStyle
    }
  ];
  