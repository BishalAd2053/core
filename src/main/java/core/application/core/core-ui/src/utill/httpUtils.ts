class HttpUtills {

    //Base URL 
     private static BASE_URL:string = "http://192.168.1.100:808";
    //Generic Get Method 
    public static async get<T>(url: String): Promise<T> {
        const response = await fetch(`${this.BASE_URL}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }
}
export default HttpUtills;