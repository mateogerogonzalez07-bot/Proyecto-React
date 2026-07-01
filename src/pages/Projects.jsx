import Gallery from '../components/Gallery.jsx'
import { projectImages } from '../data/siteData.js'

function Projects() {
  return <Gallery title="Proyectos realizados" images={projectImages} />
}

export default Projects
