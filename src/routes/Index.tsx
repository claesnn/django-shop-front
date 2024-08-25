import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import CategoryList from "../components/CategoryList";
import Counter from "../components/Counter";
import CategoryForm from "../components/CategoryForm";
import Heading from "../components/Heading";
import Card from "../components/Card";

function Logos() {
  return (
    <div className="flex space-x-10 mx-auto">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} width={96} height={96} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} width={96} height={96} alt="React logo" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="place-items-center">
        <Heading size="h2">Vite + React</Heading>
        <Logos />
        <Counter />
      </Card>
      <div className="flex gap-4">
        <Card className="place-items-center w-1/2">
          <Heading size="h3">Categories</Heading>
          <CategoryList />
        </Card>
        <Card className="place-items-center w-1/2">
          <Heading size="h3">Add Category</Heading>
          <CategoryForm />
        </Card>
      </div>
    </div>
  );
}

export default Index;
