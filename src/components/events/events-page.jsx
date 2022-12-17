import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div>
      <div className="events_page">
        {data.map((ev) => (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <Image alt={ev.title} width={500} height={500} src={ev.image} />
            <h2>events in {ev.id}</h2>
          </Link>
        ))}
        {/* <a href="">
          <img />
          <h2>Events in London</h2>
        </a>
        <a hred="">
          <img />
          <h2>Events in San Francisco</h2>
        </a>
        <a hred="">
          <img />
          <h2>Events in Barcelona</h2>
        </a> */}
      </div>
    </div>
  );
};

export default AllEvents;
