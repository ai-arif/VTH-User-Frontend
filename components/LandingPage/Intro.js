import CommonInfo from "../Shared/CommonInfo";
import Container from "../UI/Container";

function Intro() {
  return (
    <Container>
      <CommonInfo
        headline="our mission"
        title="Premier Pet Care With A Personal Touch"
        buttonName="Book Now"
      >
        Our team is a family of passionate, dedicated animal lovers known for
        our excellent service to the pets and people of Mymensingh and the
        surrounding areas. Our goal is to partner with you to see that your pet
        has as many happy, healthy years as possible. We do that by focusing on
        preventive care, providing comprehensive services, and using a
        customized approach.
      </CommonInfo>
    </Container>
  );
}

export default Intro;
