import "../../styles/home.css";
import { DATA } from "../../static-contents/creative-style";

// eslint-disable-next-line react/prop-types
function CreativeStyleCard({ title, content, id }) {
  return (
    <div className="creative-style-card">
      <span>{id}</span>
      <div className="creative-style-card-content">
        <span>{title}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

export function CreativeStyle() {
  return (
    <section className="creative-style">
      <span className="creative-style-hdr">
        Creative Style & Artistic Identity
      </span>

      <div className="creative-style-main">
        <span>Jennifer’s creative DNA is shaped by three defining forces:</span>

        <div className="creative-style-main-list">
          {DATA.map((data) => (
            <CreativeStyleCard
              {...data}
              key={`creative-style-card-${data.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
