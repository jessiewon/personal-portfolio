import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanGridPortfolioPage,
  PlanItPortfolioPage,
  PostCajonPortfolioPage,
  CanopiiPortfolioPage
} from "components/PortfolioPages";

import CognitePreview from "assets/portfolio/cognite/cognitePreview3.png";
import SlikPreview from "assets/portfolio/slikPortfolio/slikPortfolioPreview3.png";
import PathPreview from "assets/portfolio/path/pathPreview3.png";
import JobminePreview from "assets/portfolio/jobmine/jobminePreview3.png";
import PlanItPreview from "assets/portfolio/planIt/planItPreview3.png";
import PlanGridPreview from "assets/portfolio/plangridDice/plangridPreview3.png";
import PostCajonPreview from "assets/portfolio/postCajon/postCajonPreview3.png";
import CanopiiPreview from "assets/portfolio/canopii/canopiiPreview.png";
import CKSavingsPreview from "assets/portfolio/cksavings/cksavingsPreview.png";

import CogniteLogo from "assets/portfolio/cognite/logo.png";
import SlikLogo from "assets/portfolio/slikPortfolio/logo.png";
import JobmineLogo from "assets/portfolio/jobmine/logo.png";
import PathLogo from "assets/portfolio/path/logo.png";
import PlanItLogo from "assets/portfolio/planIt/logo.png";
import PlanGridLogo from "assets/portfolio/plangridDice/logo.png";
import PostCajonLogo from "assets/portfolio/postCajon/logo.png";
import CanopiiLogo from "assets/portfolio/canopii/logo.png";

import CogniteScreenShot from "assets/portfolio/cognite/screenshot.png";
import JobmineScreenShot from "assets/portfolio/jobmine/screenshot.png";
import SlikScreenShot from "assets/portfolio/slikPortfolio/screenshot.png";
import PathScreenShot from "assets/portfolio/path/screenshot.png";
import PlanItScreenShot from "assets/portfolio/planIt/screenshot.png";
import PlanGridScreenShot from "assets/portfolio/plangridDice/screenshot.png";
import PostCajonScreenShot from "assets/portfolio/postCajon/screenshot.png";
import CanopiiScreenShot from "assets/portfolio/canopii/screenshot2.png";

const portfolioData = [
  {
    id: 0,
    title: "Cognite",
    link: "/portfolio/cognite",
    component: CognitePortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: CognitePreview,
    logo: CogniteLogo,
    gradient: "linear-gradient(to bottom right, #74C0D2, #8b9fa7)",
    primary: "#74C0D2",
    primaryDark: "#4aafc7",
    primaryLight: "#b4dced",
    linkColor: "#cbe6f2",
    screenShot: CogniteScreenShot
  },
  {
    id: 1,
    title: "Slik",
    link: "/portfolio/slik",
    component: SlikPortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: SlikPreview,
    logo: SlikLogo,
    gradient: "linear-gradient(to bottom right, #B69FD5, #516da4)",
    primary: "#B69FD5",
    primaryDark: "#a07ecf",
    primaryLight: "#d1b0e5",
    linkColor: "#eddcf7",
    screenShot: SlikScreenShot
  },
  {
    id: 2,
    title: "Canopii",
    link: "/portfolio/canopii",
    component: CanopiiPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: CanopiiPreview,
    logo: CanopiiLogo,
    gradient: "linear-gradient(to bottom right, #65B876, #BDE99A)",
    primary: "#9CD78C",
    primaryDark: "#65B876",
    primaryLight: "#9CD78C",
    linkColor: "#D7F2C1",
    screenShot: CanopiiScreenShot
  },
  {
    id: 3,
    title: "Post Cajón",
    link: "/portfolio/postcajon",
    component: PostCajonPortfolioPage,
    subHeading: "Electronic Drum Design & Development",
    gridImage: PostCajonPreview,
    logo: PostCajonLogo,
    gradient: "linear-gradient(to bottom right, #E0CB7F, #754A2B)",
    primary: "#E0CB7F",
    primaryDark: "#dbc05c",
    primaryLight: "#e5c5b0",
    linkColor: "#ead8cc",
    screenShot: PostCajonScreenShot
  },
  {
    id: 4,
    title: "Path",
    link: "/portfolio/path",
    component: PathPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: PathPreview,
    logo: PathLogo,
    gradient: "linear-gradient(to bottom right, #8acc3f, #399121)",
    primary: "#8acc3f",
    primaryDark: "#75c914",
    primaryLight: "#a0efb5",
    linkColor: "#cbefd5",
    screenShot: PathScreenShot
  },
  {
    id: 5,
    title: "Plan It",
    link: "/portfolio/planit",
    component: PlanItPortfolioPage,
    subHeading: "Game Design & Development",
    gridImage: PlanItPreview,
    logo: PlanItLogo,
    gradient: "linear-gradient(to bottom right, #68ABDB, #2BA097)",
    primary: "#68ABDB",
    primaryDark: "#3f99d9",
    primaryLight: "#9bcdff",
    linkColor: "#d2e4f7",
    screenShot: PlanItScreenShot
  },
  {
    id: 6,
    title: "PlanGrid International",
    link: "/portfolio/plangridInternational",
    component: PlanGridPortfolioPage,
    subHeading: "Design and Branding",
    gridImage: PlanGridPreview,
    logo: PlanGridLogo,
    gradient: "linear-gradient(to bottom right, #99c944, #498AA9)",
    primary: "#a0ce4e",
    primaryDark: "#93cf29",
    primaryLight: "#ccf28a",
    linkColor: "#e0f7b2",
    screenShot: PlanGridScreenShot
  },
  {
    id: 7,
    title: "Jobmine",
    link: "/portfolio/jobmine",
    component: JobminePortfolioPage,
    subHeading: "UI/UX Design & Human Factors",
    gridImage: JobminePreview,
    logo: JobmineLogo,
    gradient: "linear-gradient(to bottom right, #6C9CE2, #54a2c7)",
    primary: "#6C9CE2",
    primaryDark: "#5089de",
    primaryLight: "#aecbef",
    linkColor: "#d4e4f7",
    screenShot: JobmineScreenShot
  },
  {
    id: 8,
    title: "Credit Karma Savings",
    subHeading: "Updates in progress",
    gridImage: CKSavingsPreview
  }
];

export default portfolioData;
