/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Saad's Portfolio",
  description:
    "The main goal is to keep discovering new ideas that should add value to the research, solve new problems, and challenge me to do new things in a new way. In the future, I aim to be a renowned researcher. To succeed, I must first believe that I can. My will is my wealth.",
  og: {
    title: "Md. Saad Hossain Portfolio",
    type: "website",
    url: "https://saadhossain.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Md. Saad Hossain",
  logo_name: "Md. Saad Hossain",
  nickname: "",
  subTitle:
    "The main goal is to keep discovering new ideas that should add value to the research, solve new problems, and challenge me to do new things in a new way. In the future, I aim to be a renowned researcher. To succeed, I must first believe that I can. My will is my wealth.",
  resumeLink:
    "",
  portfolio_repository: "https://linkedin.com/in/mdsaadhossain/",
  githubProfile: "https://github.com/MdSaadHossain",
};

// In portfolio.js or a similar file
export const achievementSection = {
  title: "Achievements",
  subtitle: "",
  achivementsCards: [
    {
      title: "Understanding Research Methods",
      subtitle: "An online course authorized by the University of London and SOAS University of London and offered through Coursera.",
      image: "Understand.jpg",
    },
    {
       title: "Industrial Biotechnology",
       subtitle: "An online course authorized by the University of Manchester and offered through Coursera.",
       image: "Industrial_Biotechnology.jpg",
     },
    // {
    //   title: "Achievement 1",
    //   subtitle: "Description of Achievement 1",
    //   image: "Industrial_Biotechnology.jpg",
    // },
    // {
    //   title: "Achievement 2",
    //   subtitle: "Description of Achievement 2",
    //   image: "Industrial_Biotechnology.jpg",
    // },
    // {
    //   title: "Achievement 1",
    //   subtitle: "Description of Achievement 1",
    //   image: "URL_to_image_1",
    // },
    // {
    //   title: "Achievement 2",
    //   subtitle: "Description of Achievement 2",
    //   image: "URL_to_image_2",
    // },
    // {
    //   title: "Achievement 1",
    //   subtitle: "Description of Achievement 1",
    //   image: "URL_to_image_1",
    // },
    // {
    //   title: "Achievement 2",
    //   subtitle: "Description of Achievement 2",
    //   image: "URL_to_image_2",
    // },
  ],
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "saad.hossain2014@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com//"

  {
    name: "Github",
    link: "https://github.com/MdSaadHossain/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com/in/mdsaadhossain/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/channel/UCF40td7ulGNJLdIID8c57Bw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:saad.hossain2014@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/mdsaad_hossain",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/saad.905/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/saad.hossain2014",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Research & Publication",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Engaging in comprehensive research with a focus on plant-based pharmaceuticals and cancer therapeutics.",
        "⚡ Contributing to ongoing publications, including a review of plant-based pharmaceutical production and genomic studies on breast cancer risk variants.",
        "⚡ Exploring in silico strategies targeting CK2α for prostate cancer therapy.",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "Bioinformatics & Biological Science Contribution",
      fileName: "FullStackImg",
      skills: [
        "⚡ Investigating the therapeutic potential of bioactive compounds from Ganoderma lucidum mushrooms.",
        "⚡ Pioneering bioinformatics research in lung cancer and drug discovery.",
        "⚡ Conducting in silico studies for breast cancer risk variants and prostate cancer therapy.",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Scientific Affiliations & Professional Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Member of the American Society for Microbiology (ASM), American Society of Clinical Oncology (ASCO), Web of Science Researcher Community (Clarivate), Royal Society of Chemistry (RSC), Elsevier Researcher Academy, American Chemical Society (ACS), and British Pharmacological Society (BPS).",
        "⚡ Completed training courses in Coursera, Elsevier Researcher Academy, Alison, Simplilearn, and PubChem.",
        "⚡ Active participation in online information sessions and courses related to research and science.",
    
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "Graphics Design & Video Editing",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in Adobe Photoshop and Adobe Illustrator for image processing.",
        "⚡ Skilled in video editing with Wondershare Filmora and Adobe Premiere Pro.",
        "⚡ Experienced in creating visually appealing logos and custom designs.",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        // {
        //   skillName: "Figma",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com//",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "East West University, Bangladesh",
      subtitle: "BSc in Genetic Engineering and Biotechnology",
      logo_path: "iiiitk_logo.png",
      alt_name: "EWU,Bangladesh",
      duration: "2019 - 2024",
      descriptions: [
        "⚡ I have delved into various biological science subjects, including Cell Biology, Molecular Biology, Biochemistry, Immunology, Biophysics, Bioinformatics, Genetics & Genomics, to deepen my understanding of the intricacies of life sciences.",
        "⚡ Apart from this, I have done courses in Mathematics, Statistics, Psychology, Professional Ethics, Industrial Biotechnology, Forensic Biology, Pharmaceutical Biotechnology and many more.",
        "⚡ I serve as an organizer at East West University, actively involved in managing both the Performing Arts Club and the Sports Club.",
        "⚡ I actively participate as a player in the East West University Genetic Engineering and Biotechnology department's football and cricket teams.",
      ],
      website_link: "https://www.ewubd.edu/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Scientific Affiliations, Work, Internship, and Volunteership",
  description:
    "Driven by an insatiable passion for exploration in the fields of biology, biochemistry, bioinformatics and biotechnology, my professional journey includes serving as a Junior Research Collaborator and Research Assistant. My journey is fueled by a commitment to making meaningful contributions to the scientific and research community.I possess a natural inclination for organizing, a perpetual curiosity for learning, and a genuine passion for volunteering. This drives my active involvement in various communities, where I contribute as a dedicated member and researcher.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Scientific Affiliations & Membership",
      work: true,
      experiences: [
        {
          title: "Student Member",
          company: "International Society for Computational Biology (ISCB)",
          company_url: "https://www.iscb.org/",
          logo_path: "ISCB_logo (2).png",
          duration: "February 2024 - Present",
          location: "Virginia, United States",
          description:
            "s",
          color: "#0879bf",
        },
        {
          title: "Global Outreach - Student Member",
          company: "American Society for Microbiology (ASM)",
          company_url: "https://asm.org/",
          logo_path: "ASM_Logo.png",
          duration: "January 2024 - Present",
          location: "Washington, United States",
          description:
            "s",
          color: "#9b1578",
        },
        {
          title: "Professional Member",
          company: "ISTAART - Alzheimer's Association",
          company_url: "https://istaart.alz.org/home",
          logo_path: "ISTAART_Logo.png",
          duration: "January 2024 - Present",
          // location: "Ahmedabad, Gujarat",
          description:
            "S",
          color: "#fc1f20",
        },
        {
          title: "Student / Non-Oncology Resident Member",
          company: "American Society of Clinical Oncology (ASCO)",
          company_url: "https://www.asco.org/",
          logo_path: "ASCO_Logo.png",
          duration: "December 2023 - Present",
          location: "Virginia, United States",
          description:
            "s",
          color: "#0879bf",
        },
        {
          title: "General Member",
          company: "Clarivate - Web of Science Researcher Community (WoS)",
          company_url: "https://clarivate.com/",
          logo_path: "WOS_Logo.png",
          duration: "October 2023 - Present",
          // location: "Chattogram, Bangladesh",
          description:
            "S",
          color: "#9b1578",
        },
        {
          title: "Student Member",
          company: "Royal Society of Chemistry (RSC)",
          company_url: "https://www.rsc.org/",
          logo_path: "RSC_Logo.png",
          duration: "October 2023 - Present",
          location: "London, United Kingdom",
          description:
            "S",
          color: "#fc1f20",
        },
        {
          title: "General Member",
          company: "Elsevier Researcher Academy",
          company_url: "https://researcheracademy.elsevier.com/",
          logo_path: "ERA_Logo.png",
          duration: "October 2023 - Present",
          // location: "Chattogram, Bangladesh",
          description:
            "S",
          color: "#0879bf",
        },
        {
          title: "Community Associate",
          company: "American Chemical Society (ACS)",
          company_url: "https://www.acs.org/",
          logo_path: "ACS_logo.png",
          duration: "April 2023 - Present",
          location: "Washington, United States",
          description:
            "S",
          color: "#9b1578",
        },
        {
          title: "Student Member",
          company: "British Pharmacological Society (BPS)",
          company_url: "https://www.bps.ac.uk/",
          logo_path: "BPS_logo.png",
          duration: "April 2023 - Present",
          location: "London, United Kingdom",
          description:
            "s",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Work & Relevant Experience",
      work: true,
      experiences: [
        {
          title: "Junior Research Collaborator",
          company: "Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh",
          company_url: "https://abcdlabbd.org/",
          logo_path: "ABCD_Logo.png",
          duration: "February 2023 - Present",
          location: "Chattogram, Bangladesh",
          description:
            "Contribute to cutting-edge research on lung cancer and drug discovery, focusing on non-small cell lung cancer (NSCLC) and exploring the PD-L1 target pathway. Investigate the isolation and characterization of bioactive compounds from Ganoderma lucidum mushrooms for potential cancer therapeutics.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "BioPc - A Bioinformatics Lab of Research and Training",
          company_url: "https://www.linkedin.com/company/biopc-a-bioinformatics-lab-of-research-and-training/",
          logo_path: "BioPcsh_logo.png",
          duration: "December 2022 - Present",
          location: "Chattogram, Bangladesh",
          description:
            "Proficiently performed in silico genome-wide study to annotate breast cancer risk variants and identified a compound for targeting CK2α in prostate cancer therapy. Leveraged data analysis techniques to uncover potential therapeutic avenues. Additionally, involved in crafting a review paper on molecular pharming, providing an overview of plant-based production of pharmaceuticals.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internship & Training",
      experiences: [
        {
          title: "Research Trainee",
          company: "Advanced Bioinformatics, Computational Biology, and Data Science Laboratory, Bangladesh",
          company_url: "https://abcdlabbd.org/",
          logo_path: "ABCD_Logo.png",
          duration: "January 2023 - February 2023",
          location: "Chattogram, Bangladesh",
          description:
            "Training about Computer-aided drug design, Drug discovery, Computational Chemistry, Molecular Dynamics Simulation, Pharmacokinetics Profiling, Medicinal chemistry, Molecular Docking, Drug Side Effects Prediction and Data Analysis.",
          color: "#000000",
        },
        {
          title: "Research Intern & Trainee",
          company: "BioPc - A Bioinformatics Lab of Research and Training",
          company_url: "https://www.linkedin.com/company/biopc-a-bioinformatics-lab-of-research-and-training/",
          logo_path: "BioPcsh_logo.png",
          duration: "November 2022 - December 2022",
          location: "Chattogram, Bangladesh",
          description:
            "Training about Basic bioinformatics, Drug design, Vaccine design, Predict 3D Model, Predict T-cell epitopes, Protein sequence analysis, Molecular docking and Project exhibition.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteership",
      experiences: [
        {
          title: "Member at United Nations Volunteers Platform (UVP)",
          company: "United Nations",
          company_url: "https://app.unv.org/",
          logo_path: "unvp_logo.png",
          // duration: "June 2023 - Present",
          // location: "Hyderabad, Telangana",
          description:
            "Actively engaged as a member on the United Nations Volunteers Platform, where I contribute my time and efforts towards initiatives that promote positive change and sustainable development on a global scale. I have also completed online training courses on this platform, gaining valuable insights and knowledge in various international subjects.",
          color: "#4285F4",
        },
        {
          title: "Member at Bangladesh Red Crescent Society (BDRCS)",
          company: "Bangladesh Red Crescent Society",
          company_url: "https://bdrcs.org/",
          logo_path: "BDRCS_logo.png",
          // duration: "Aug 2019 - May 2020",
          // location: "Hyderabad, Telangana",
          description:
            "Active member of the Bangladesh Red Crescent Society (BDRCS) and dedicated participant in blood donation activities. I am engaged with the society through its Facebook page, actively supporting and contributing by regularly donating blood to help those in need.",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span a diverse spectrum of research in the realm of biological science, with a focus on excelling in biotechnology, bioinformatics, and biochemistry. I actively contribute to innovative projects, utilizing bioinformatics and biological tools to propel forward impactful research initiatives.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I am working on and trying to publish a few research papers.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "No publication has been added",
      createdAt: "2024-01-01T16:26:54Z",
      description: " ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "website_pic.png",
    description:
      "I am easily accessible across various social media platforms. Feel free to drop me a message, and you can expect a prompt response within a few hours. I'm here to assist you with research, data science, utilizing tools and software, basic programming in biology, as well as video editing and graphic design.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "27 No RND Road, Lalbagh, Dhaka 1211, Bangladesh",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Rnd+road/@23.7175379,90.3841315,18z/data=!4m6!3m5!1s0x3755b9d8475a91ef:0x69d2e9e96860620f!8m2!3d23.717639!4d90.3855209!16s%2Fg%2F11s8zcy497?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
