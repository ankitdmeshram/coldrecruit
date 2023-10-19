import { Jobs } from "~/components/Jobs";
import jobsStyle from "../styles/jobs.css";
import Header from "~/components/Header";
import { MetaFunction } from "@remix-run/cloudflare";
const InternshipPage = () => {
    return (
      <>
      <Header />
      <Jobs type="internships"/>
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
  
  
export const meta: MetaFunction = () => {
  return [
    { title: "Internship - Cold Recruit" },
    {
      property: "og:title",
      content: "Internship - Cold Recruit",
    }
  ];
};