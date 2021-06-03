let URLMapping = function () {
    this.ServerURL="http://localhost:9090/"

    this.FetchAllCountryData = this.ServerURL+'fetchAllCountryData';
    this.FetchCountryDataByName = this.ServerURL+'fetchCountryDataByName';
    this.FetchCountryDataByRegion = this.ServerURL+'fetchCountryDataByRegion';
    this.FetchCountryDataByCode3 = this.ServerURL+'fetchCountryDataByCode3';
};

export default new URLMapping();

