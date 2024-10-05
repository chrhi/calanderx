import superjson from "superjson";

/**
 * Custom fetcher function similar to axios, with superjson and cookies support.
 *
 * @param url - The URL to fetch
 * @param options - Optional RequestInit options for the fetch request
 * @returns Promise resolving to parsed JSON data
 */
export async function fetcher<A>(
  url: string,
  options: RequestInit = {}
): Promise<A> {
  const defaultOptions: RequestInit = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    // Handle HTTP errors
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const serializedJson = await response.text();

    // Use superjson to handle deserialization of complex structures
    const deserializedJson = superjson.parse<A>(serializedJson);

    return deserializedJson;
  } catch (error) {
    // Catch and handle errors more gracefully
    return Promise.reject({
      message: `Fetch failed: ${error}`,
      status: (error as Response)?.status ?? "Unknown status",
    });
  }
}

/**
 * Example usage:
 *
 * fetcher<User>('https://api.example.com/user', {
 *   method: 'GET',
 *   headers: {
 *     Authorization: 'Bearer token',
 *   }
 * })
 * .then((data) => console.log(data))
 * .catch((error) => console.error(error));
 */
