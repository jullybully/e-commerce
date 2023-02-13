import React from "react";
import "./Button.css";
import "./HomeContent.css";

export function HomeContent() {
  return (
    <>
      <div class="container">
        <div class="col1 col1-align">
          <div className="text-ver__hor">
            <h2>CGI. Modern interior | 3Ds max </h2>
          </div>
          <div className="text-ver__hor">
            <p>
              Modern apartment in soft colors. One of the difficulties in this
              project was to position a TVset. The large TV in the living room
              is positioned so that it can be rotated and viewed in three zones
              (sofa, dining area, kitchen).
            </p>
          </div>
          <div className="text-ver__hor">
          <a className="button-black" href="/tables">Tables</a>
          </div>
        </div>
        <div class="col2">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e121cc160876469.63bc440f5cc7e.jpg"
            alt="baldai" className="image-width"
          />
        </div>
      </div>
      <div className="container">
        <div className="col1">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e121cc160876469.63bc440f5cc7e.jpg"
            alt="baldai" className="image-width"
          />
        </div>
        <div className="col2 col2-align">
          <div className="text-ver__hor">
            <h2>CGI. Modern interior | 3Ds max </h2>
          </div>
          <div className="text-ver__hor">
            <p>
              Modern apartment in soft colors. One of the difficulties in this
              project was to position a TVset. The large TV in the living room
              is positioned so that it can be rotated and viewed in three zones
              (sofa, dining area, kitchen).
            </p>
          </div>
          <div className="text-ver__hor">
          <a className="button-black" href="/tables">Tables</a>
          </div>
        </div>
      </div>
    </>
  );
}
