import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import doc from '../../Resources/Documents/Adam_Horvath_Resume_2022.pdf';
import './CV.scss';

function CV() {
    return (
        <>
            <div className="site-center">
                <div className="download-cv">
                    <Link to={require("../../Resources/Documents/Adam_Horvath_Resume_2022.pdf")} target="blank">
                        Download my consize CV in PDF format here
                    <FontAwesomeIcon icon={faDownload} size="lg" style={{ marginLeft: "1rem" }} />
                    </Link>
                </div>

                {/* WORK EXPERIENCE */}
                <section>
                    <h1>Work Experience</h1>
                    <div>
                        <h3>L&M Solutions Consulting, Budapest</h3>
                        <div>2015-2017 Part-time Software Engineer</div>
                        <div>2017-2019 Project Manager, Software Engineer</div>
                        <p>
                            Worked on several large enterprise web solutions as a full-stack engineer and as project manager on multiple
                            others. Altogether I was involved in the whole software delivery lifecycle, including requirement analysis, system
                            design, hands on coding, managing development and project progress, presenting results to stakeholders,
                            documentation and deploying solutions.
                            Clients included a major Hungarian bank, a German automotive company, Central European oil and gas supply
                            companies among others.
                        </p>
                        <h4>Highlighted projects:</h4>
                        <p>
                            Automotive manufacturing quality test management and workflow system for one of the major automotive
                            brands. Architected and led the development of a manufacturing support system using Angular, ASP.Net and
                            MS SQL to implement complex user interfaces and workflows. Worked productively with clients to understand
                            requirements and user needs, was able to keep balance between speed of delivery and quality while meeting
                            high level security standards.
                        </p>
                        <p>
                            Intranet portal for one of the major banks in Central Europe, the largest bank in Hungary. Developed several
                            components to be integrated in SharePoint for creating, targeting and consuming news, recommendations
                            and some social networking features using React with TypeScript and SPFx and continuous delivery. I was able
                            to learn React in a very limited time and build UI inensive applications scalable on mobile, tablet and desktop
                            devices. The system is used by thousands of users every day.
                        </p>
                        <p>
                            Full-stack application framework to bolster delivering quality solutions on a fast pace: Responsibilities included
                            architecting and leading the development of a front-end reusable component system using Angular by
                            building multiple high quality components, services and modules. This framework has been used to deliver
                            numerous solutions of small to larger scale.
                        </p>
                    </div>

                    <div>
                        <h3>This is Motif, London</h3>
                        <div>2020-2021 Software Engineer</div>
                        <div>2021-2022 Senior Software Engineer</div>
                        <p>
                            Instrumental role in designing and implementing software solutions for delivering and presenting market research
                            data. My responsibilities included designing and implementing features and modules for multiple client facing
                            reporting and content management systems, a workflow system, a central authorisation solution and an internal
                            project management system. I gained major experience in designing and developing cloud (Azure) based software
                            solutions.
                        </p>
                        <h4>Highlighted responsibilities and achievements:</h4>
                        <p>
                            Product owner of a client facing content management and reporting system. I was responsible for
                            managing feature and change requests for a system used for both managing sample files by clients and
                            dynamically presenting research results.
                        </p>
                        <p>
                            Product owner of a sample processing workflow system. I was responsible for implementing optimisations
                            and new features to a system which was processing sample files at a high level of parallelism. Challenges
                            included optimising the performance of running multiple thousand Azure Functions in parallel by writing
                            optimal C# code and optimising database operations using CosmosDB and MS SQL.
                        </p>
                        <p>
                            Full software redesign of an internal project management system. The project resulted in significant
                            performance imprevement for users, making them use the system more often which resulted in more up
                            to date data regarding projects and field work. We also managed to improve code quality, maintainability
                            and extendability by a large margin, due to designing a more consistent API, replacing existing design
                            patterns with ones that better fit the purpose, removing/simplifying ones whiches added value at the cost
                            of complexity was questionable and by making sure there is a clear separation of architecture layers.
                        </p>
                    </div>
                </section>

                {/* SKILLS */}
                <section>
                    <h1>Skill</h1>
                    <div>
                        <h3>Technical skills</h3>
                        <p>Proficient with:</p>
                        <p>
                            Net, .Net Core, C#, Angular, CSS, Sass, MS SQL, Azure, Git, Agile Development, Web Application Design and
                            Architecture
                        </p>

                        <p>Familiar with:</p>
                        <ul>
                            <li>React, Webpack, SharePoint, SPFx</li>
                            <li>
                                Continuous Deployment and Integration, UX, Responsive and Adaptive UI Design, Functional Programming ,
                                Performance Optimization in Web Applications
                                </li>
                        </ul>

                        <p>Familiar with (without commercial experience):</p>
                        <p>
                            Java, NodeJS, AWS, TDD
                        </p>

                        <h3>Soft skills</h3>
                        <ul>
                            <li>Commitment to delivering value</li>
                            <li>Active learner</li>
                            <li>Team-oriented: Making the most out of collaboration, can give constructive, beneficial feedback</li>
                            <li>Ability to communicate engineering concepts to technical and nontechnical stakeholders</li>
                            <li>Positive attitude, ability to acknowledge mistakes and still move forward in a positive way</li>
                            <li>Ability to handle multiple workstreams and prioritize accordingly</li>
                            <li>Passion for high quality</li>
                        </ul>
                    </div>
                </section>

                {/* EDUCATION */}
                <section>
                    <h1>Education</h1>
                    <div>
                        <h3>Óbuda University, Budapest</h3>
                        <p>Bachelor of Science in Engineering Information Technologist (2017)</p>
                    </div>
                </section>

                {/* INTERESTS */}
                <section>
                    <h1>Interests</h1>
                    <div>Application Design and Architecture, UX, Science</div>

                    <p><strong>Hobbies</strong></p>
                    <p>
                        Paintball, Basketball, Traveling
                    </p>
                </section>
            </div>
        </>
    );
}

export default CV;