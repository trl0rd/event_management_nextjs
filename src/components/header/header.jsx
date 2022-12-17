import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image
          alt="logo"
          src={
            "https://static.vecteezy.com/system/resources/previews/006/150/816/original/alphabet-letter-icon-logo-ar-free-vector.jpg"
          }
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events" legacyBehavior>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="about-us">About-Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">Id excepteur ipsum incididunt.</p>
    </div>
  </header>
);
