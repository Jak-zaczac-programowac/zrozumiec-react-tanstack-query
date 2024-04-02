import { queryOptions } from "@tanstack/react-query";

export const peopleQueryOptions = queryOptions({
    queryKey: ["people"],
    queryFn: () =>
        fetch("http://localhost:3000/people").then((response) =>
            response.json()
        ),
});
