import { Container } from "react-bootstrap"
// import TeamMember from "./TeamMember"
import "./AboutUs.scss"
import TeamClass from "./TeamClass"
const AboutUs = () => {
  return (
    <Container>
      <h2>AboutUs</h2>
      {/* <TeamMember name={"Function component name"} /> */}
      <TeamClass name="abcnflkjdlkvm" location="chandigarh class" />
    </Container>
  )
}

export default AboutUs