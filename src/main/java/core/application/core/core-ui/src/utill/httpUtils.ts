async function name(params: type) {
    // Function implementation for 'name' goes here
}

interface httpInterface<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: undefined | T;
    response?: Response;
}

class ApiError extends Error {
    constructor(public status: number, public statusText: string, public url: string) {
        super(`Error ${status}: ${statusText} at ${url}`);
        this.name = "ApiError";
    }
}

export const httpUtills = async<T extends BodyInit | null | undefined, R>(params: httpInterface<T>): Promise<R> => {
    const { url, method, headers, body } = params;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body,
        });

        if (!response.ok) {
            throw new ApiError(response.status, response.statusText, url);
        }

        const result: R = await response.json();
        return result;
    } catch (error) {
        if (error instanceof ApiError) {
            console.error("API request Error:", error.message);
        } else {
            console.error("Unexpected Error:", error);
        }
        throw error; // Rethrow the error for further handling by the caller
    }
};