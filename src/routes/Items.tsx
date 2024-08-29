import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { itemOptions } from "../services/fetchItems";
import Heading from "../components/Heading";
import Card from "../components/Card";

export default function Items() {
  const { data } = useQuery(itemOptions);
  return (
    <>
      <Card className="place-items-center">
        <Heading size="h2">Items</Heading>
        <div className="grid grid-cols-2 gap-4">
          {data?.map((item) => (
            <div key={item.id} className="flex border-b gap-6 pb-4">
              <div className="w-3/4 flex flex-col gap-4">
                <Link to={`/items/${item.id}`} className="text-xl font-bold">
                  {item.title}
                </Link>
                <p className="text-slate-600">{item.description}</p>
                <p>Price: {item.price}$</p>
                {item.category && (
                  <div className="w-fit bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </div>
                )}
              </div>
              <div className="flex w-1/4 align-middle my-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
