import "../../styles/home.css";
import image from "/images/img-4.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">Biography</span>

      <div className="biography-txt">
        <div>
          Jennifer Joanna Aniston was born in Sherman Oaks, California, into a
          family immersed in the performing arts. Her early years were split
          between the vibrancy of New York and the creative pulse of Los
          Angeles. Surrounded by theater, storytelling, and expressive
          personalities, she learned early what it meant to feel, observe, and
          translate emotion. <br />
          But Jennifer’s childhood was not dominated by Hollywood glamour — it
          was shaped by curiosity, mixed cultural influences, and the grounding
          presence of everyday life. She was the kind of child who drew,
          painted, watched people closely, and found fascination in the small
          details that others overlooked.
        </div>
        <div className="biography-txt-img">
          <img src={image} />
        </div>
        <div>
          <span>Her artistic instincts were shaped by:</span>
          <ul>
            <li>Time spent behind the scenes at stage productions</li>
            <li>Observing the emotional rhythms of actors</li>
            <li>Training in arts-focused schools</li>
            <li>Learning the discipline behind craft, not just performance</li>
          </ul>
        </div>
        <div>
          When she stepped into acting, she did not bring vanity — she brought
          depth. <br />
          Her early career included small appearances and projects that didn’t
          reflect her full potential. There were setbacks, short-lived roles,
          and moments where she doubted her place in the industry. <br />
          And then came the moment that changed television history
        </div>
      </div>
    </section>
  );
}
