import { useQuery } from "@tanstack/react-query";

export function usePeopleQuery() {
    return useQuery({
        queryFn: () =>
            fetch("http://localhost:3000/people").then((res) => res.json()),
        queryKey: ["people"],
    });
}
