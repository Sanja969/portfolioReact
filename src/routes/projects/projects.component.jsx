import { useSelector } from 'react-redux';
import { ProjectsContainer, ProjectContainer, ProjectSubContainer, ImageContainer, SubContainer } from './projects.styles';
import { getProjects, selectProjectsIsLoading } from '../../redux/projects/projects.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';

const Projects = () => {
  const projects = useSelector(getProjects);
  const isLoader = useSelector(selectProjectsIsLoading); 

  return (
    isLoader ? <Spinner /> :
    <>
      <ProjectsContainer>
        <h2>&gt;&gt; PROJECTS</h2>
        <ProjectSubContainer>

          {
          projects.map(project => {
            return (
            <ProjectContainer key={project.id}>
              <SubContainer>
                <h3>
                  {project.name}
                  <a href={project.live}>Live</a>
                </h3>
                <a href={project.source}>&gt;&gt; More</a>
              </SubContainer>
              <SubContainer>
                <div>
                  <ImageContainer style={{background: `url(${project.img})` }}></ImageContainer>
                </div>

                <p>{project.description.slice(0, 350) + "..."}</p>
                <p>{project.technologies}</p>
              </SubContainer>
            </ProjectContainer>
          )})
          }
        </ProjectSubContainer>
      </ProjectsContainer>
      <Footer />
    </>
    


  );
}

export default Projects;