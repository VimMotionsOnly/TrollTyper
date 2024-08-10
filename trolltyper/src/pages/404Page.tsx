import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/">Go to the homepage</Link>
      </p>
    </div>
  );
}