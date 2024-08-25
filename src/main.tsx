import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./routes/Index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  categoryDelete,
  categoryDeleteIntent,
  categoryOptions,
  categoryPost,
  categoryPostIntent,
} from "./services/fetchCategories.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient.ts";
import ErrorBoundary from "./ErrorBoundary.tsx";
import App from "./App.tsx";
import Items from "./routes/Items.tsx";
import { itemOptions, itemPost } from "./services/fetchItems.ts";
import { itemSingleOptions } from "./services/fetchItem.ts";
import ItemsDetail from "./routes/ItemsDetail.tsx";
import {
  counterOptions,
  counterPost,
  counterPostIntent,
} from "./services/fetchCounter.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: () =>
          Promise.all([
            queryClient.fetchQuery(categoryOptions),
            queryClient.fetchQuery(counterOptions),
          ]),
        action: async ({ request }) => {
          const formData = await request.formData();
          const intent = formData.get("intent");
          switch (intent) {
            case categoryPostIntent:
              return categoryPost(formData);
            case categoryDeleteIntent:
              return categoryDelete(formData);
            case counterPostIntent:
              return counterPost();
            default:
              return null;
          }
        },
      },
      {
        path: "items",
        element: <Items />,
        loader: () => queryClient.fetchQuery(itemOptions),
        action: async ({ request }) => itemPost(request),
      },
      {
        path: "items/:id",
        loader: ({ params }) =>
          queryClient.fetchQuery(itemSingleOptions(params.id!)),
        element: <ItemsDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
