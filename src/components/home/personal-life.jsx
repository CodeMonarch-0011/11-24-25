import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";
import image from "/images/img-8.webp";

export function PersonalLife() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">Personal Life & Interest</span>
      <div className="personal-life-txt">
        <span>
          Away from the cameras, Jennifer’s world is built on grounding energy,
          mindful living, and creative self-care.
        </span>

        <div className="personal-life-text-mid">
          <div className="personal-life-list">
            <span>She is deeply connected to:</span>

            <ul>
              <li>Fitness, yoga, and holistic wellness</li>
              <li>Balanced living with emphasis on inner peace</li>
              <li>Her dogs, who bring comfort, joy, and companionship</li>
              <li>Reading, journaling, and exploring emotional growth</li>
              <li>Close-knit friendships that span decades</li>
              <li>
                A passion for interior design and warm, soulful aesthetics
              </li>
            </ul>
          </div>

          <div className="personal-life-img">
            <img src={image} />
          </div>
        </div>

        <span>
          Jennifer protects her private life with gentle boundaries. She knows
          what it means to be seen — and what it means to keep certain spaces
          sacred. Her life philosophy blends strength with softness, ambition
          with calm, success with simplicity.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>
    </section>
  );
}
