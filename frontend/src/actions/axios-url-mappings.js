let URLMapping = function () {
    this.ServerURL="http://localhost:9090/"

    this.FetchAllCountryData = this.ServerURL+'fetchAllCountryData';
};

export default new URLMapping();

