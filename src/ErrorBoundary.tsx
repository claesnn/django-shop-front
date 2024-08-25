import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      Dang! Sorry, an error occured. A developer will surely fix this soon.
    </div>
  );
}
