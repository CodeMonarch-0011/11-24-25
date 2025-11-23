import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Looking Ahead</span>

      <div>
        <span>Jennifer’s future continues to expand into new territories:</span>

        <ul>
          <li>
            More dramatic, multi-layered roles that highlight maturity and depth
          </li>
          <li>
            Expanded work as a producer, shaping stories from behind the scenes
          </li>
          <li>
            Potential ventures in wellness, lifestyle, and personal brand
            curation
          </li>
          <li>Creative collaborations centered on emotional storytelling</li>
          <li>Continued evolution in prestige television</li>
          <li>
            A deeper exploration of personal creative expression — beyond
            expectation
          </li>
        </ul>

        <span>
          Her next chapter is not about reinvention — it is about refinement.{" "}
          <br /> <br />
          The world knows the star. <br />
          It continues to discover the storyteller, the creator, and the woman.
        </span>
      </div>

      <div className="looking-ahead-txt">
        Her trajectory is not simply upward — it is evolving, deepening,
        refining. The world has seen the image.
        <br />
        Now it continues to discover the story.
      </div>
      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
