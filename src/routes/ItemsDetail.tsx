import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemSingleOptions } from "../services/fetchItem";
import Heading from "../components/Heading";

export default function ItemsDetail() {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery(itemSingleOptions(id!));
  return (
    data && (
      <div className="flex flex-col gap-4">
        <Heading size="h2">Item Detail</Heading>
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <p className="text-gray-600">{data.description}</p>
        <span className="text-sm font-semibold text-gray-700">
          ${data.price}
        </span>
        {data.category && (
          <span className="w-fit inline-block px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {data.category}
          </span>
        )}
        <img
          src={data.image}
          alt={data.title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    )
  );
}
