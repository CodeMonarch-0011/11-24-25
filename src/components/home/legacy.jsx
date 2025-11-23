import "../../styles/home.css";
import image from "/images/img-3.webp";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Cultural Impact & Legacy</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          <span>
            Jennifer Aniston’s influence extends beyond performance. <br />
            She shaped how audiences understand women in comedy, drama, and
            fame.
          </span>

          <div>
            <span>Her legacy includes:</span>

            <ul>
              <li>Redefining the modern sitcom heroine</li>
              <li>
                Inspiring new generations of actresses drawn to emotional
                honesty
              </li>
              <li>
                Normalizing women leading both comedic and dramatic narratives
              </li>
              <li> Setting new standards for authenticity in public life </li>
              <li> Remaining a fixture in global culture for over 30 years </li>
              <li>
                Building a cross-generational fanbase grounded in love, not
                trends
              </li>
            </ul>
          </div>

          <span>
            Her cultural presence is not fleeting — it is foundational. <br />
            She did not chase relevance; she became timeless.
          </span>
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
