import { BiCodeAlt } from 'react-icons/bi';

export const SkillSet = [
    { id: "1", name: "C", imgsrc: "images/C.png" },
    { id: "2", name: "C++", imgsrc: "images/C++.png" },
    { id: "3", name: "Python", imgsrc: "images/Python.png" },
    { id: "4", name: "HTML", imgsrc: "images/HTML5.png" },
    { id: "5", name: "CSS", imgsrc: "images/CSS3.png" },
    { id: "6", name: "JavaScript", imgsrc: "images/javascript.png" },
    { id: "7", name: "YOLO", imgsrc: "images/YOLO.jpg" },
    { id: "8", name: "Computer Vision", imgsrc: "images/OpenCV.png" }
];

export const experience = [
    {
        id: 1,
        date: "May 2024 - July 2024",
        name: "Data Science Intern",
        company: "Ecubix / Value Chain Solutions",
        desc: [
            "Completed a data science internship focused on image and video processing.",
            "Trained and deployed YOLO models for object detection, optimizing accuracy and real-time performance.",
            "Streamlined data pipelines for efficient preprocessing and model deployment."
        ]
    },
    {
        id: 2,
        date: "May 2023 - June 2023",
        name: "Social Civic Internship",
        company: "Manav Seva Trust",
        desc: [
            "Assisted in planning and executing initiatives to provide free medication to underprivileged communities.",
            "Coordinated outreach efforts, ensured timely delivery of resources, and maintained records to track distribution and impact."
        ]
    }
];

export const Education = [
    {
        id: 1,
        date: "Graduation: May 2026",
        name: "Bachelor of Technology in Computer Engineering",
        company: "Pandit Deendayal Energy University",
        desc: "CPI: 6.2/10"
    },
    {
        id: 2,
        date: "March 2022",
        name: "HSC Education",
        company: "Nirman High School, Vastrapur, Ahmedabad"
    },
    {
        id: 3,
        date: "March 2020",
        name: "SSC Education",
        company: "Vijaynagar Higher Secondary School, Naranpura, Ahmedabad"
    }
];

export const Services = [
    {
        id: 1,
        icon: <BiCodeAlt />,
        name: "Web Development",
        desc: "Developing creative and responsive websites."
    },
    {
        id: 2,
        icon: <BiCodeAlt />,
        name: "Machine Learning & AI",
        desc: "Working on AI-driven models and data science solutions."
    }
];
