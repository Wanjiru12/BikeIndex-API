// bike.js
export default class StolenBike {
    static getStolenBike(location) {
        const oneWeekAgo = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
        const url = `https://bikeindex.org/api/v3/search?page=1&per_page=25&{location}&distance=10&stolenness=proximity&stolen_after=${oneWeekAgo}`;
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Network response was not ok: ${response.statusText}`
                    );
                }
                return response.json();
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                throw error;
            });
    }
}