module.exports = {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    find(params, populate) {
      return strapi.query('default').find(params, ["data-users", "data-users.history-buy"]);
    },
  };