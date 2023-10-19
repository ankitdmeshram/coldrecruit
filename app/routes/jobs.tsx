import { Jobs } from "~/components/Jobs";
import jobsStyle from "../styles/jobs.css";
import Header from "~/components/Header";
import { MetaFunction } from "@remix-run/cloudflare";
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

  
export const meta: MetaFunction = () => {
  return [
    { title: "Jobs - Cold Recruit" },
    {
      property: "og:title",
      content: "Jobs - Cold Recruit",
    }
  ];
};