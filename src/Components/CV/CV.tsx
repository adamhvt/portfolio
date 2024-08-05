import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CV.scss';

function CV() {
    const [highlightVisible, setHighlightVisible] = useState(Array.from({ length: 6 }, _ => false));

    const showHighlight = (index: number) => {
        highlightVisible[index] = true;
        setHighlightVisible([...highlightVisible]);
    };

    return (
        <>
            <div className="site-center">
                <div className="download-cv-container">
                    <div className="download-cv">
                        <Link to={require("../../Resources/Documents/Adam_Horvath_CV.pdf")} target="blank">
                            <FontAwesomeIcon icon={faFilePdf} size="lg" style={{ marginRight: "1rem" }} />
                            Download my CV in PDF format here
                        </Link>
                    </div>
                </div>

                {/* WORK EXPERIENCE */}
                <section>
                    <h1>Work Experience</h1>
                    <section className='section-content'>
                        <h3 className='work-title'>Phinsys, London</h3>
                        <div className='work-years'>2022 - 2024 Senior Software Engineer</div>
                        <p>
                            Worked on the next generation of the company's flagship data modelling and data processing product used for
                            building data warehouses, reporting and providing data for external financial systems. I was responsible for
                            delivering key system components:
                        </p>
                        <p className='experience-details'>
                            <strong>Data model management module</strong> -
                            Key part in building a module that allows browsing, building and combining different data sources that are fed into ETL processes.
                        </p>
                        <p className='experience-details'>
                            <strong>ETL process builder</strong> -
                            Built a diagramming user interface similar to Azure Data Factory and AWS Glue for
                            drawing processes, and the backing system components for managing process models and process
                            configurations.
                        </p>
                        <p className='experience-details'>
                            <strong>Contributions to the framework used for building applications</strong> -
                            Key part in building a web application framework used to bolster building the
                            company's flagship and other future products.
                            Worked on core features, general purpose UI controls and controls used for data modelling along with smaller developer tools.
                        </p>
                    </section>
                    <section className='section-content'>
                        <h3 className='work-title'>This is Motif, London</h3>
                        <div className='work-years'>2020-2021 Software Engineer</div>
                        <div className='work-years'>2021-2022 Senior Software Engineer</div>
                        <p>
                            Instrumental role in designing and implementing software solutions for delivering and presenting market research
                            data. Responsibilities included designing and implementing features and modules for multiple client facing
                            reporting and content management systems and an internal project management system. In 2022 I became
                            responsible for managing software development within the company.
                        </p>
                        <h4>Highlighted responsibilities and achievements:</h4>
                        <p>
                            Product owner of a client facing content management and reporting system.
                            {
                                !highlightVisible[3] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(3)}>More</a> :
                                    <span>
                                        <br />
                                        I was responsible for
                                        managing feature and change requests for a system used for both managing sample files by clients and
                                        dynamically presenting research results.
                                    </span>
                            }
                        </p>
                        <p>
                            Product owner of a sample processing workflow system.
                            {
                                !highlightVisible[4] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(4)}>More</a> :
                                    <span>
                                        <br />
                                        I was responsible for implementing optimisations
                                        and new features to a system which was processing sample files at a high level of parallelism. Challenges
                                        included optimising the performance of running multiple thousand Azure Functions in parallel by writing
                                        optimal C# code and optimising database operations using CosmosDB and MS SQL.
                                    </span>
                            }
                        </p>
                        <p>
                            Full software redesign of an internal project management system.
                            {
                                !highlightVisible[5] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(5)}>More</a> :
                                    <span>
                                        <br />
                                        The project resulted in significant
                                        performance imprevement for users, making them use the system more often which resulted in more up
                                        to date data regarding projects and field work. We also managed to improve code quality, maintainability
                                        and extendability by a large margin, due to designing a more consistent API, replacing existing design
                                        patterns with ones that better fit the purpose, removing/simplifying ones whiches added value at the cost
                                        of complexity was questionable and by making sure there is a clear separation of architecture layers.
                                    </span>
                            }
                        </p>
                    </section>
                    <section className='section-content'>
                        <h3 className='work-title'>L&M Solutions Consulting, Budapest</h3>
                        <div className='work-years'>2015-2017 Part-time Software Engineer</div>
                        <div className='work-years'>2017-2019 Project Manager, Software Engineer</div>
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
                            brands.
                            {
                                !highlightVisible[0] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(0)}>More</a> :
                                    <span>
                                        <br />
                                        Architected and led the development of a manufacturing support system using Angular, ASP.Net and
                                        MS SQL to implement complex user interfaces and workflows. Worked productively with clients to understand
                                        requirements and user needs, was able to keep balance between speed of delivery and quality while meeting
                                        high level security standards.
                                    </span>
                            }
                        </p>
                        <p>
                            Intranet portal for one of the major banks in Central Europe, the largest bank in Hungary.
                            {
                                !highlightVisible[1] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(1)}>More</a> :
                                    <span>
                                        <br />
                                        Developed several
                                        components to be integrated in SharePoint for creating, targeting and consuming news, recommendations
                                        and some social networking features using React with TypeScript and SPFx and continuous delivery. I was able
                                        to learn React in a very limited time and build UI inensive applications scalable on mobile, tablet and desktop
                                        devices. The system is used by thousands of users every day.
                                    </span>
                            }
                        </p>
                        <p>
                            Full-stack application framework to bolster delivering quality solutions on a fast pace.
                            {
                                !highlightVisible[2] ?
                                    <a href="#/" className="highlight-toggle" onClick={() => showHighlight(2)}>More</a> :
                                    <span>
                                        <br />
                                        Responsibilities included
                                        architecting and leading the development of a front-end reusable component system using Angular by
                                        building multiple high quality components, services and modules. This framework has been used to deliver
                                        numerous solutions of small to larger scale.
                                    </span>
                            }
                        </p>
                    </section>
                </section>

                {/* SKILLS */}
                <section className='section-skills'>
                    <h1>Technical skills</h1>
                    <ul className='section-content'>
                        <li>Angular, TypeScript, JavaScript, CSS, Sass</li>
                        <li>.Net, .Net Core, C#</li>
                        <li>SQL Server, MongoDB, Cosmos DB</li>
                        <li>Azure, DevOps</li>
                        <li>Agile Development, Web Application Design and Architecture, Responsive and Adaptive UI Design</li>
                        <li>Also familiar with React, SharePoint, MongoDB, CosmosDB</li>
                    </ul>

                </section>

                {/* EDUCATION */}
                <section>
                    <h1>Education</h1>
                    <div className='section-content'>
                        <h3>Óbuda University, Budapest</h3>
                        <p>Bachelor of Science in Engineering Information Technologist (2017)</p>
                    </div>
                </section>

                {/* INTERESTS */}
                <section>
                    <h1>Professional Interests</h1>
                    <div className='section-content'>
                        <div>Application Design and Architecture, Application Security, Performance Optimisation, UX</div>
                        <p><strong>Hobbies</strong></p>
                        <p>
                            Paintball, Basketball, Traveling
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CV;