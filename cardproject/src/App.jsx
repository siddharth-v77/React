import React from 'react'
import Card from './component/Card'
// import User from './component/User'

const App = () => {
  const arr = [
  {
    id: 1,
    brandLogo: "https://img.icons8.com/color/150/000000/amazon.png",
    brandName: "Amazon",
    postedTime: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    tags: ["Part-time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
    isSaved: false
  },
  {
    id: 2,
    brandLogo: "https://img.icons8.com/color/150/000000/google-logo.png",
    brandName: "Google",
    postedTime: "2 days ago",
    jobTitle: "Frontend Developer",
    tags: ["Full-time", "Mid Level"],
    salary: "$95/hr",
    location: "Bangalore, India",
    isSaved: true
  },
  {
    id: 3,
    brandLogo: "https://img.icons8.com/ios-filled/150/000000/tesla-logo.png",
    brandName: "Tesla",
    postedTime: "1 week ago",
    jobTitle: "Product Designer",
    tags: ["Full-time", "Senior Level"],
    salary: "$110/hr",
    location: "Austin, USA",
    isSaved: false
  },
  {
    id: 4,
    brandLogo: "https://img.icons8.com/color/150/000000/microsoft.png",
    brandName: "Microsoft",
    postedTime: "Just now",
    jobTitle: "Backend Engineer",
    tags: ["Contract", "Entry Level"],
    salary: "$80/hr",
    location: "Hyderabad, India",
    isSaved: false
  },
  {
    id: 5,
    brandLogo: "https://img.icons8.com/color/150/000000/netflix.png",
    brandName: "Netflix",
    postedTime: "3 days ago",
    jobTitle: "Data Scientist",
    tags: ["Full-time", "Senior Level"],
    salary: "$130/hr",
    location: "Los Gatos, USA",
    isSaved: true
  },
  {
    id: 6,
    brandLogo: "https://img.icons8.com/ios-filled/150/000000/mac-os.png",
    brandName: "Apple",
    postedTime: "12 hours ago",
    jobTitle: "iOS Developer",
    tags: ["Full-time", "Mid Level"],
    salary: "$100/hr",
    location: "Cupertino, USA",
    isSaved: false
  },
  {
    id: 7,
    brandLogo: "https://img.icons8.com/color/150/000000/meta.png",
    brandName: "Meta",
    postedTime: "4 days ago",
    jobTitle: "UX Researcher",
    tags: ["Part-time", "Mid Level"],
    salary: "$90/hr",
    location: "London, UK",
    isSaved: false
  },
  {
    id: 8,
    brandLogo: "https://img.icons8.com/color/150/000000/spotify--v1.png",
    brandName: "Spotify",
    postedTime: "2 weeks ago",
    jobTitle: "Sound Engineer",
    tags: ["Contract", "Senior Level"],
    salary: "$110/hr",
    location: "Stockholm, Sweden",
    isSaved: true
  },
  {
    id: 9,
    brandLogo: "https://img.icons8.com/color/150/000000/airbnb.png",
    brandName: "Airbnb",
    postedTime: "1 day ago",
    jobTitle: "Interaction Designer",
    tags: ["Full-time", "Entry Level"],
    salary: "$75/hr",
    location: "San Francisco, USA",
    isSaved: false
  },
  {
    id: 10,
    brandLogo: "https://img.icons8.com/color/150/000000/y-combinator.png",
    brandName: "Y Combinator",
    postedTime: "6 hours ago",
    jobTitle: "Startup Founder",
    tags: ["Full-time", "Executive"],
    salary: "$150/hr",
    location: "Global",
    isSaved: false
  }
];
 console.log(arr);
 
  return (
    <div className='parent'>
        {arr.map(function(elem,idx){
          return <div key={idx}>
            <Card company={elem.brandName} Logo={elem.brandLogo} post={elem.jobTitle}
          time={elem.postedTime} tag={elem.tags} pay={elem.salary} location={elem.location}
           />
          </div>
        })}
    </div>
  )
}

export default App