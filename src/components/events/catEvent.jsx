import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data }) => {
  return (
    <div className="cat_events">
      <h1>Events in {data[0].city}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image alt={ev.id} height={300} width={300} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>

      {/* <a href="/event/evnts1">Event1</a>
      <a href="/event/evnts1">Event2</a>
      <a href="/event/evnts1">Event3</a>
      <a href="/event/evnts1">Event4</a>
      <a href="/event/evnts1">Event5</a> */}
    </div>
  );
};

export default CatEvent;
