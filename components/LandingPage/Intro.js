import CommonInfo from "../Shared/CommonInfo";
import Container from "../UI/Container";

function Intro() {
  return (
    <div id="learn-more">
      <Container>
        <CommonInfo
          headline="our mission"
          title="To restore and enhance the health and well-being of your animals and birds"
        >
          Our team is a family of passionate and dedicated animal lovers, known
          for providing excellent service to the pets, animals, and birds of
          Mymensingh and the surrounding areas. Our goal is to partner with you
          to ensure your animals and birds live long, healthy, and productive
          lives. We achieve this through preventive care, comprehensive
          services, and a customized approach.
        </CommonInfo>
      </Container>
    </div>
  );
}

export default Intro;
