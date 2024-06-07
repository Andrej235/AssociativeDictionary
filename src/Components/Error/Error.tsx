import "./Error.scss";
import { Link, useAsyncError, useRouteError } from "react-router-dom";
import Icon from "../Icon/Icon";

type errorResponse = {
  status: number;
  statusText: string;
  data: any;
};

export default function Error() {
  const routeError: errorResponse = useRouteError() as errorResponse;
  const asyncError: errorResponse = useAsyncError() as errorResponse;

  console.error(routeError, asyncError);

  return (
    <div className="error-page-container">
      <div className="route-error-container">
        <h1>Izgleda da si se izgubio</h1>
        <h2>
          <Link to="/" className="primary-home-link">
            Evo
          </Link>
          &nbsp;nacin da se vratis kuci&nbsp;
          <Link to="/" className="secondary-home-link">
            <Icon name="map" />
          </Link>
        </h2>
      </div>
    </div>
  );
}
