import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const activePage = (currentPageRoute) => {
    const router = useRouter();
    console.log(router);
    if (router.route === currentPageRoute) return "active";
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo m6">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className={activePage("/login")}>
            <Link href="/login">
              <a>LOGIN</a>
            </Link>
          </li>
          <li className={activePage("/signup")}>
            <Link href="/signup">
              <a>SIGNUP</a>
            </Link>
          </li>
          <li className={activePage("/create")}>
            <Link href="/create">
              <a>CREATE</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
