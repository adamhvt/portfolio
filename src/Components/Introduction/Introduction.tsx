import './Introduction.scss';
import profilePic from '../../Resources/Images/profile.jpg'

function Introduction() {
    return (
        <div className="introduction">
            <div className="site-center">
                <div className="row">
                    <aside>
                        <div><img src={profilePic} className="profile-pic" alt="Profile" width="150px" /></div>
                    </aside>
                    <article>
                        <p>Hi! I'm a senior software engineer with team management and project management experience.</p>
                        <p>
                            Experienced Full-Stack Software Engineer with Project Management experience adept in bringing forth expertise in
                            development and software systems design. Looking to obtain the position of Senior Software Engineer in a fastpaced tech environment to learn new technologies and utilize well honed skills in designing and implementing
                            solutions for the web and project management.
                        </p>
                        <p>
                            Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Introduction;