import "../../styles/home.css";
import { Data } from "../../static-contents/career-highlights";
// import image from "/images/1762466779839.jpg";

// eslint-disable-next-line react/prop-types
function FilmWorkListCard({ hdr, cnt }) {
  return (
    <div className="film-work-list-card">
      <div className="film-work-list-card-hdr">
        <div className="pointer" aria-hidden />
        <span>{hdr}</span>
      </div>

      <div className="film-work-list-card-txt">{cnt}</div>
    </div>
  );
}

export function FilmWork() {
  return (
    <section className="film-work" id="film-work">
      <span className="film-work-hdr">Career Highlights & Contributions</span>

      <div className="film-work-cnt">
        <div className="film-work-cnt-main">
          <span>
            Jennifer’s portfolio spans genres, mediums, and emotional registers:
          </span>

          <div className="film-work-list">
            {Data.map((dt, i) => (
              <FilmWorkListCard key={i} hdr={dt.hdr} cnt={dt.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
