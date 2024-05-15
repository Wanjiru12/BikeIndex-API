// bike.js
export default class StolenBike {
    static getStolenBike(location) {
        const url = `https://bikeindex.org/api/v3/search?page=1&per_page=10&location=${location}&distance=10&stolenness=proximity`;
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                throw error;
            });
    }
}