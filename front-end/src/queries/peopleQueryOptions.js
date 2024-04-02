import { queryOptions } from "@tanstack/react-query";

export const peopleQueryOptions = queryOptions({
    queryFn: () =>
        fetch("http://localhost:3000/people").then((res) => res.json()),
    queryKey: ["people"],
});
