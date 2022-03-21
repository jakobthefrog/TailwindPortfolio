import GitHubProfile from "../components/Icons/GitHubProfile";
import TwitterProfile from "../components/Icons/TwitterProfile";
import LinkedInProfile from "../components/Icons/LinkedInProfile";

const Footer = () => {
  return (
    <div className="flex flex-col items-start md:flex-row mt-20 pb-10">
      <div className="flex md:hidden">
        <span className="mr-2">
          <LinkedInProfile marginBottom={"mb-0"} />
        </span>
        <span className="mr-2">
          <GitHubProfile marginBottom={"mb-0"} />
        </span>
        {/* <span className="mr-2">
          <TwitterProfile marginBottom={"mb-0"} />
        </span> */}
      </div>
    </div>
  );
};

export default Footer;
