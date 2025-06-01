import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faWind, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: any;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML & CSS", icon: faHtml5, percentage: 75 },
  { name: "JavaScript", icon: faJsSquare, percentage: 75 },
  { name: "React.js", icon: faReact, percentage: 70 },
  { name: "Node.js", icon: faNodeJs, percentage: 70 },
  { name: "Tailwind CSS", icon: faWind, percentage: 75 },
  { name: "SQL Server", icon: faDatabase, percentage: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="container mt-4 py-3">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: false,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className="col-6 mb-4" 
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card p-3 shadow-sm h-100"> 
                <h5 className="skill-name">
                  <FontAwesomeIcon icon={skill.icon} className="me-2" />
                  {skill.name}
                </h5>
                <div className="progress mt-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;