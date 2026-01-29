import React from "react";
import "@/styles/contact/map-box.css";

function MapBox() {
  return (
    <section className="mapbox" data-mapbox="true">
      <figure>
        <iframe
          title="Jagatpura Jaipur Map"
          src="https://www.google.com/maps?q=Jagatpura,Jaipur,Rajasthan&output=embed"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>
  );
}

export default MapBox;
