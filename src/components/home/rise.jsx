import "../../styles/home.css";
import image from "/images/img-5.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">Becoming a Global Icon</span>
      <div className="rise-main">
        <div className="rise-txt">
          Jennifer Aniston’s rise aligned with a cultural shift in how audiences
          connected with characters on screen. Television was becoming more
          intimate, more character-driven, more emotionally accessible — and
          Jennifer arrived at the perfect intersection of timing and talent. Her
          role as Rachel Green on Friends did more than launch her fame. It
          reshaped pop culture. Rachel wasn’t merely a character. She was
          relatable in a way audiences had never seen — flawed, funny,
          expressive, insecure, hopeful, deeply human. <br />
          <div>
            <span>Jennifer infused Rachel with:</span>
            <ul>
              <li>A softness that made vulnerability feel beautiful</li>
              <li>A comedic rhythm that elevated every scene</li>
              <li>A growing emotional sophistication as the show matured</li>
              <li>A style influence that became globally iconic</li>
            </ul>
          </div>
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>

      <div className="rise-main-extra">
        Over ten seasons, she built one of the most recognizable and beloved
        characters in television history. But more importantly, she proved
        herself as an actress capable of balancing emotional nuance with
        irresistible comedic charm. This era launched Jennifer into a rare tier
        of global stardom — one that never faded.
      </div>
    </section>
  );
}
