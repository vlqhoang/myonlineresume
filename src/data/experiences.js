const experiences = [
    {
        'job_type': 5,
        'project_title': 'Fraud Prevention System',
        'url': 'https://www.nab.com.au/',
        'company': 'National Australian Bank - NAB.',
        'time_window': '(Oct 2022 - Present)',
        'descriptions': [
             'NAB is the largest commercial bank in Australia. As a member of NAB Fraud team, our job is to prevent fraudulent transactions by introducing sophisticated services and infrastructures into the system. The ultimate mission is to fight financial crime and protect customers.',
             'My daily work includes collaboration with Australian team members to rapidly deliver new features, break them down into microservices, and contribute to the whole fraud system in order to build a comprehensive, effective, and resilient fraud prevention system.',
             'This project is driven by Scrum with the following main technical stacks: Java-based microservices, Kafka, Kafka Stream, Postgres, Docker, AWS, Splunk, Jenkins, Rally.'
        ],
        'skills': [10, 11, 13, 15, 17, 19, 20, 21, 24]
    },
    {
        'job_type': 5,
        'project_title': 'Instaclustr Platform for Apache Cassandra',
        'url': 'https://www.instaclustr.com/',
        'company': 'Instaclustr. ',
        'time_window': '(July 2021 - Oct 2022)',
        'descriptions': [
            'Instaclustr provides fully managed services, one of them is Apache Cassandra, certified and hosted in the cloud or on-prem. Cassandra is customized and the configuration is optimized for your cluster so customers can focus on their applications.',
            'I\'m part of the Cassandra team with the other 5 members. My responsibility is to collaborate with team members to deliver high-quality Cassandra features (SaaS) and provide the fastest bug fixes possible to Cassandra and its add-ons such as Spark, spark-jobserver, Lucene index, Debezium, Continuous data backup, etc. Apart from that, Cassandra team is responsible for delivering and offering customers with latest Cassandra major / minor versions that contain the latest bug fixes and CVEs patched while ensuring no downgrade to performance and functionalities.',
            'This project is driven by Scrum with the following main technical stacks: Java-based microservices, Postgres, Cassandra, Docker, Kubernetes, AWS, Ansible, Jenkins, Jira.'
        ],
        'skills': [10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24]
    },
    {
        'job_type': 4,
        'project_title': 'MySunlife',
        'url': 'https://play.google.com/store/apps/details?id=com.sunlife.ca.mysunlife&hl=en&gl=US&showAllReviews=true',
        'company': 'Sun Life Financial Inc. ',
        'time_window': '(August 2020 - April 2021)',
        'descriptions': [
            'Sun Life Financial Inc. is a Canadian financial services company. It is primarily known as a life insurance company.',
            'MySunlife is a Sunlife\'s customer-centric portal product. It has a web version and a hybrid app version with data processed by microservices. The target is to provide customers with up-to-date information about their policies and insurance data and allow customers to manage their policy & contracts.',
            'Together with the other 4 team members, my task was to correspond with BA team to implement features from back-end side to front-end side that suit the business requirements and ensure on-time deliveries with tested quality and UI/UX. When responsive web version is completed, if feasible, this feature will be redesigned and deliver to app version with a more suitable UI / UX. Satisfaction from customers is one of a primary target.',
            'This project was driven by Scrum with the following main technical stacks: Ionic Framework, Java-based microservices, Spring, MySQL, HTML, SCSS, Typescript, Angular, Jenkins, Jira.'
        ],
        'skills': [9, 10, 11, 1, 2, 4, 5, 6, 13, 19, 20, 21]
    },
    {
        'job_type': 3,
        'project_title': 'Sunportal',
        'url': 'https://online.sunlife.com.vn/sunportal/',
        'company': 'Sun Life Financial Inc. ',
        'time_window': '(May 2020 - August 2020)',
        'descriptions': [
            'Sunportal is a portal that serves Sunlife\'s partners (selling agents). Through this portal, agents can easily manage customer data so they can actively reach out to customers whenever they need help.',
            'Team size for this project was 3 and my responsibilities were to work with the design team and sketch out prototypes and get ideas delivered as a fully responsive website version that offered great UI/UX that matches the approved design.',
            'This project was driven by Scrum with the following main technical stacks: Java-based microservices, Spring, MySQL, HTML, SCSS, Typescript, Angular, Jenkins, Jira.'
        ],
        'skills': [10, 11, 1, 2, 4, 5, 6, 13, 19, 20, 21]
    },
    {
        'job_type': 5,
        'project_title': 'Sunlife\'s Microservices',
        'url': 'https://www.sunlife.com.vn/vn/',
        'company': 'Sun Life Financial Inc. ',
        'time_window': '(July 2019 - April 2020)',
        'descriptions': [
            'In an attempt to facilitate and support ever-growing numbers of customers, Sunlife\'s backend system embraces microservices architecture, and services were designed to be scalable to ensure the performance, manageability, and availability, especially on business-critical services.',
            'With a team size of 6, my job was to work closely with BA team to analyze and implement appropriate functionalities on various services that not only align with business requirements but also ensure feature\'s performance and avoid code smell with clean code, SOLID principles. Also, to ensure bug-free, Junit tests were added as automation tests to cover and validate all functionalities. Before delivering to customers, features were carefully tested with 2 level acceptance tests to make sure all features bring no unexpected errors.',
            'This project was driven by Scrum with the following main technical stacks: Java-based microservices, Junit Test, Spring, MySQL, Jenkins, Jira.'
        ],
        'skills': [10, 11, 13, 19, 20, 21]
    },
    {
        'job_type': 4,
        'project_title': 'Patent Study',
        'url': '',
        'company': 'Robert Bosch Engineering VN - Robert Bosch Germany. ',
        'time_window': '(September 2018 - May 2019)',
        'descriptions': [
            'Since Bosch is one of the world-class companies with a precept \'Invented For Life\', researchers and developers from Bosch have registered large numbers of patents. Eventually, finding a way to manage those patents effectively became a problem and Patent Study was a perpetual solution to this problem. It helped manage, classify, and provide detailed reports in numbers and metrics on all patents.',
            'With a team size of 3, my responsibilities were to work with a product owner coming from India to analyze requirements and provide functionalities that could introduce the most effective way to manage patents with great UI/UX as well. The most challenging part was the report function, the numbers and metrics provided through Jasper reports must be flawless and can provide clear insights so that senior managers can evaluate patents statuses.',
            'Waterfall methodology was applied with following main technical stacks: Java, Junit Test, Spring, HTML, CSS, JS, AngularJS, SQL, Jasper report.'
        ],
        'skills': [10, 11, 13, 1, 3, 5, 6, 20, 21]
    },
    {
        'job_type': 6,
        'project_title': 'GVisit',
        'url': '',
        'company': 'Robert Bosch Engineering VN - Robert Bosch Singapore. ',
        'time_window': '(May 2018 — August 2018)',
        'descriptions': [
            'G stands for Bosch\'s chairmen coming from Germany. In an attempt to make Gs business visits to Singapore more interactive, an assistant application called GVisit was planned for a few months in advance. The idea for this application is to provide Gs with the most convenient assistant possible, including many useful features around meeting assistants. GVisit app was pre-installed on IPads and delivered to each G as a personal assistant. This app provides notifications on all upcoming meetings, information about people that Gs are about to meet. When a meeting occurs, Gs can view detailed meeting contents from within provided Ipads. To ensure flexibility, all data can be updated remotely at any time, helping Gs stay up-to-date with the agenda.',
            'With a team size of 3, me and teammates worked closely with Bosch Singapore team to analyze and implement features that can adapt all of the business requirements with a strict timeline while ensuring high performance, UI/UX of the application. We aimed to provide Gs with the highest satisfaction. In the last few days, I came to Bosch Singapore office to prepare the final steps and ensured the deployment went smoothly with no unexpected errors.',
            'Waterfall methodology was applied with following main technical stacks: HTML, SCSS, Typescript, Angular, Ionic',
        ],
        'skills': [1, 2, 4, 5, 6, 9, 20, 21]
    },
    {
        'job_type': 4,
        'project_title': 'Personal projects',
        'url': 'https://github.com/vlqhoang?tab=repositories',
        'company': '',
        'time_window': '',
        'descriptions': [
            'In my free time, I\'m usually doing self-study and works on some personal projects so that I can learn something new while sharpening my skills. I\'ve never stopped educating myself with courses, documents and books from the Internet so that I can become a better version of myself every day.',
            'I\'ve been working on various projects ranging from frontend to backend with the following main technical stacks: HTML, CSS, CSS preprocessor, React, Redux, React hook, Ionic, Java, and Spring microservices, Kafka, Docker, Swarm, Kubernetes.',
        ],
        'skills': [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19]
    }
]
export default experiences;