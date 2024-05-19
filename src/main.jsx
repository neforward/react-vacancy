import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";
const defaultState = {
  jobs: [
    {
      title: "Front-End developer",
      company: "AndroMedia",
      featured: true,
      avatarUrl:
        "https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png",
      conditions: ["1d ago", "full Time", "Remote"],
      tags: ["HTML", "CSS", "JS", "REACT"],
    },
    {
      title: "Game Developer",
      company: "GameWorld",
      featured: false,
      avatarUrl:
        "https://assets.altarofgaming.com/wp-content/uploads/2023/05/sonic-the-hedgehogs-gameworld-game-cover-altar-of-gaming-150x150.jpg",
      conditions: ["1d ago", "Part Time", "On-site"],
      tags: ["Unity", "C#", "3D Modeling"],
    },
    {
      title: "Front-End developer",
      company: "MadDevs",
      featured: false,
      avatarUrl:
        "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
      conditions: ["1d ago", "full Time", "KG Only"],
      tags: ["HTML", "CSS", "JS", "Vue"],
    },
    {
      title: "Full Stack Developer",
      company: "Techco",
      featured: true,
      avatarUrl:
        "https://media.licdn.com/dms/image/D4E0BAQEks0xDFYWWug/company-logo_200_200/0/1700500863498/techco_uk_logo?e=2147483647&v=beta&t=EqObm0JRDlJBObRGkRPzMTl4Xj5YwanLWXvbHeMgEpw",
      conditions: ["1d ago", "Part Time", "On-site"],
      tags: ["HTML", "CSS", "JS", "React", "Node.js"],
    },
    {
      title: "Front-End developer",
      company: "AndroMedia",
      featured: false,
      avatarUrl:
        "https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png",
      conditions: ["1d ago", "full Time", "Remote"],
      tags: ["HTML", "CSS", "JS", "Angular"],
    },
    {
      title: "UI/UX Designer",
      company: "DesignHub",
      featured: false,
      avatarUrl:
        "https://media.licdn.com/dms/image/C560BAQH4K9EO7p9q3A/company-logo_200_200/0/1630643741958/design_hubkw_logo?e=2147483647&v=beta&t=4EHqONxC6QpMVgiuih2qzIYQ7kyndzqYxYI-0EnNaVo",
      conditions: ["1d ago", "Contract", "Remote"],
      tags: ["UI/UX", "Sketch", "Figma", "Adobe XD"],
    },
    {
      title: "Data Scientist",
      company: "Genpact",
      featured: true,
      avatarUrl:
        "https://download.logo.wine/logo/Genpact/Genpact-Logo.wine.png",
      conditions: ["1d ago", "Full Time", "On-site"],
      tags: ["Machine Learning", "Data Analysis"],
    },
    {
      title: "Back-End developer",
      company: "MadDevs",
      featured: true,
      avatarUrl:
        "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
      conditions: ["1d ago", "full Time", "KG Only"],
      tags: ["Django", "Python", "NOdeJS", "MOngoDB"],
    },
  ],
  filteredJobs: [
    {
      title: "Front-End developer",
      company: "AndroMedia",
      featured: true,
      avatarUrl:
        "https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png",
      conditions: ["1d ago", "full Time", "Remote"],
      tags: ["HTML", "CSS", "JS", "REACT"],
    },
    {
      title: "Game Developer",
      company: "GameWorld",
      featured: false,
      avatarUrl:
        "https://assets.altarofgaming.com/wp-content/uploads/2023/05/sonic-the-hedgehogs-gameworld-game-cover-altar-of-gaming-150x150.jpg",
      conditions: ["1d ago", "Part Time", "On-site"],
      tags: ["Unity", "C#", "3D Modeling"],
    },
    {
      title: "Front-End developer",
      company: "MadDevs",
      featured: false,
      avatarUrl:
        "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
      conditions: ["1d ago", "full Time", "KG Only"],
      tags: ["HTML", "CSS", "JS", "Vue"],
    },
    {
      title: "Full Stack Developer",
      company: "Techco",
      featured: true,
      avatarUrl:
        "https://media.licdn.com/dms/image/D4E0BAQEks0xDFYWWug/company-logo_200_200/0/1700500863498/techco_uk_logo?e=2147483647&v=beta&t=EqObm0JRDlJBObRGkRPzMTl4Xj5YwanLWXvbHeMgEpw",
      conditions: ["1d ago", "Part Time", "On-site"],
      tags: ["HTML", "CSS", "JS", "React", "Node.js"],
    },
    {
      title: "Front-End developer",
      company: "AndroMedia",
      featured: false,
      avatarUrl:
        "https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png",
      conditions: ["1d ago", "full Time", "Remote"],
      tags: ["HTML", "CSS", "JS", "Angular"],
    },
    {
      title: "UI/UX Designer",
      company: "DesignHub",
      featured: false,
      avatarUrl:
        "https://media.licdn.com/dms/image/C560BAQH4K9EO7p9q3A/company-logo_200_200/0/1630643741958/design_hubkw_logo?e=2147483647&v=beta&t=4EHqONxC6QpMVgiuih2qzIYQ7kyndzqYxYI-0EnNaVo",
      conditions: ["1d ago", "Contract", "Remote"],
      tags: ["UI/UX", "Sketch", "Figma", "Adobe XD"],
    },
    {
      title: "Data Scientist",
      company: "Genpact",
      featured: true,
      avatarUrl:
        "https://download.logo.wine/logo/Genpact/Genpact-Logo.wine.png",
      conditions: ["1d ago", "Full Time", "On-site"],
      tags: ["Machine Learning", "Data Analysis"],
    },
    {
      title: "Back-End developer",
      company: "MadDevs",
      featured: true,
      avatarUrl:
        "https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo",
      conditions: ["1d ago", "full Time", "KG Only"],
      tags: ["Django", "Python", "NOdeJS", "MOngoDB"],
    },
  ],
};

const FILTER_BY_TAG = "FILTER_BY_TAG";
const FILTER_BY_CONDITION = "FILTER_BY_CONDITION";
const jobReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_BY_TAG:
      return {
        ...state,
        filteredJobs: state.jobs.filter((job) =>
          job.tags.includes(action.payload)
        ),
      };
    case FILTER_BY_CONDITION:
      return {
        ...state,
        filteredJobs: state.jobs.filter((job) =>
          job.conditions.includes(action.payload)
        ),
      };
    case "SEARCH": {
      let searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        filteredJobs: state.jobs.filter((job) => {
          const titleMatch = job.title.toLowerCase().includes(searchTerm);
          const tagsMatch = job.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm)
          );
          const conditionsMatch = job.conditions.some((condition) =>
            condition.toLowerCase().includes(searchTerm)
          );
          return titleMatch || tagsMatch || conditionsMatch;
        }),
      };
    }

    default:
      return state;
  }
};


export const filterByTag = (payload) => ({ type: FILTER_BY_TAG, payload });
export const filterByCondition = (payload) => ({
  type: FILTER_BY_CONDITION,
  payload,
});
export const searchJobs = (payload) => ({ type: "SEARCH", payload });

const store = createStore(jobReducer);
export default store;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
