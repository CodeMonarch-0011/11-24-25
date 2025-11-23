import "../../styles/home.css";
import image from "/images/img-7.webp";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">Philosophy</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>
            <em>“Stay real. Stay kind. Stay human.”</em>
          </span>

          <div>
            <span>Jennifer’s presence embodies:</span>
            <ul>
              <li>Strength without hardness</li>
              <li>Beauty without arrogance</li>
              <li>Success without losing warmth</li>
              <li>Vulnerability without fear</li>
            </ul>
          </div>

          <span>
            She reminds the world that authenticity can be its own form of
            iconic.
          </span>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
