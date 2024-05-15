
//Business Logic
export default class StolenBike {
  static getStolenBike(location) {
    return fetch(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${location}&distance=20&stolenness=proximity&${process.env.API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error.message;
      });
  }

}
