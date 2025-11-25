import "../../styles/home.css";
import image from "/images/img-2.webp";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Welcome to the World of Jennifer Aniston</span>
        <span>
          Jennifer Aniston is an actress, producer, creative visionary, and
          cultural cornerstone whose presence has shaped the emotional landscape
          of modern entertainment. Her work blends humor, depth, vulnerability,
          and an unmistakable sense of human warmth — creating a legacy that is
          both timeless and continually evolving. She is one of the rare figures
          in global culture whose name evokes more than celebrity. It evokes a
          feeling. Jennifer represents a unique fusion of grounded authenticity
          and classic Hollywood luminosity. Her performances don’t just
          entertain — they comfort, uplift, and connect across generations. At
          the height of fame, she remains effortlessly human, and at the heart
          of simplicity, she remains unmistakably iconic. She stands in a space
          that only a few stars ever reach: Where artistry becomes identity, and
          identity becomes cultural memory.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
