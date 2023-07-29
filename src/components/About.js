import devOps_img from "../../assets/devops.svg";
import network_img from "../../assets/computernetwork.svg";
import cloud_img from "../../assets/cloudcomputing.svg";
import web_img from "../../assets/webdevelopment.svg";
import Navbar from "./Navbar";
const About = () => {
    return (
        <div class="row-combo">
          <Navbar></Navbar>
          <div class="about-box">
            <div>
              <div class="about-detail">
                <h1 class="for-pseudo">About Me</h1>
                <p>
                  👋 Hi, I'm Deepak Puri, a passionate DevOps professional with
                  a strong foundation in SDLC & methodologies like Agile and
                  DevOps.
                  <br /><br />🚀 I bring a wealth of experience and expertise in
                  various facets of the DevOps landscape. From Linux system
                  administration to cloud platforms, automation, and web
                  development frameworks, I have a diverse skill set that allows
                  me to tackle complex challenges and deliver efficient
                  solutions. <br /><br />🖥️ Linux System Administration: With
                  extensive experience working with Linux distributions like
                  Ubuntu, CentOS, and RedHat, I have honed my skills in system
                  administration. From optimizing performance to managing robust
                  Linux-based environments, I ensure smooth operations and
                  reliable infrastructure. <br /><br />🔒 Networking
                  Fundamentals: I possess a solid understanding of networking
                  fundamentals, which empowers me to design and implement secure
                  and scalable network architectures. By ensuring efficient data
                  flow and reliable connectivity, I create strong foundations
                  for successful deployments. <br /><br />🔧 BASH Scripting:
                  Automation is my forte, and I love writing BASH scripts to
                  automate various system tasks. These scripts not only
                  streamline processes but also enhance productivity by
                  eliminating repetitive manual work. <br /><br />☁️ Cloud
                  Platforms: I have a strong knowledge of cloud platforms,
                  including AWS (Amazon Web Services) and GCP (Google Cloud
                  Platform). Leveraging the scalability and flexibility of these
                  platforms, I deploy and manage cloud infrastructure for
                  seamless application deployments. <br /><br />🛠️
                  Infrastructure Provisioning with Terraform: Using Terraform, I
                  automate the provisioning of cloud infrastructure, ensuring
                  consistent and reproducible deployments. By leveraging
                  Terraform's declarative syntax, I deliver efficient and
                  scalable solutions. <br /><br />🚀 CI/CD Pipelines with
                  Jenkins: I have hands-on experience setting up Continuous
                  Integration and Continuous Deployment (CI/CD) pipelines using
                  Jenkins. Configuring and integrating Jenkins with various
                  tools, I enable automated build, test, and deployment
                  processes for accelerated software delivery. <br /><br />🔧
                  Configuration Management with Ansible: With Ansible, a
                  powerful configuration management tool, I automate
                  infrastructure configuration and streamline application
                  deployments. This improves efficiency, reduces errors, and
                  ensures consistent environments. <br /><br />🐳 Docker and
                  Kubernetes: I possess expertise in Docker and Kubernetes, the
                  leading containerization and orchestration technologies.
                  Leveraging these tools, I manage and deploy applications in
                  containers and Kubernetes clusters for scalability and high
                  availability. <br /><br />🌐 Web Development Frameworks: In
                  addition to my DevOps skills, I am familiar with web
                  development frameworks like Flask and Django. This knowledge
                  enables me to collaborate effectively with development teams,
                  bridging the gap between infrastructure and application
                  components. <br /><br />♘ Chess Enthusiast: When I'm not busy
                  optimizing Linux systems or automating cloud infrastructures,
                  you can find me engaging in epic battles on the 64-square
                  battlefield of chess. From strategic maneuvers to tactical
                  brilliance, I bring the same passion and calculated finesse to
                  the game as I do to the world of DevOps. Chess is my
                  sanctuary, my mental playground where I indulge in the art of
                  strategy and tactics. With each move, I embrace the intricate
                  dance of pieces, always staying one step ahead of my opponent.
                  It's a game that challenges my mind and fuels my love for
                  intellectual pursuits.{" "} My goal is to empower
                  organizations with efficient, reliable, and scalable DevOps
                  solutions. With my broad skill set and a proven track record,
                  I drive operational excellence and accelerate software
                  delivery cycles. Let's collaborate and take your projects to
                  new heights! Feel free to reach out to me through the contact
                  details provided on this website. 📩
                </p>
              </div>
              <div class="about-current">
                <h1>What I'm Doing</h1>
                <div class="about-current-row">
                  <div class="about-current-row-item-wrapper">
                    <div class="about-current-row-item">
                      <img src={devOps_img} />
                      <div class="about-current-row-item-details">
                        <h2>DevOps and SRE</h2>
                        <p>
                          I enjoy learning software development, managing cloud
                          infrastructure and deployment as DevOps and SRE
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="about-current-row-item-wrapper">
                    <div class="about-current-row-item">
                      <img src={cloud_img} />
                      <div class="about-current-row-item-details">
                        <h2>Cloud Computing</h2>
                        <p>
                          I build many things using cloud computing including
                          loT, applications and websites
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="about-current-row-item-wrapper">
                    <div class="about-current-row-item">
                      <img src={network_img} />
                      <div class="about-current-row-item-details">
                        <h2>Computer Networking</h2>
                        <p>
                          I love to make everything connected to communicate
                          with each other, such as computing devices and now the
                          loT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="about-current-row-item-wrapper">
                    <div class="about-current-row-item">
                      <img src={web_img} />
                      <div class="about-current-row-item-details">
                        <h2>Web Development</h2>
                        <p>
                          I enjoy developing and managing websites either for
                          personal or specific purposes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
       
    );
}

export default About;