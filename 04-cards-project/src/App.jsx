// import React from "react";
// import { Bookmark } from "lucide-react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "4 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      datePosted: "7 days ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      companyName: "Google",
      datePosted: "8 days ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hr",
      location: "Chennai, India",
    },
  ];
  console.log(jobOpenings);
  return (
    <>
      <div className="parent">
        {jobOpenings.map(function (elem) {
          return (
            <Card
              company={elem.companyName}
              post={elem.post}
              logo={elem.brandLogo}
              date={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
