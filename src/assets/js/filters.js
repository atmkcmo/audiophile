export default {
    uppercase(val) {
      if (typeof val === "string") {
        return val.toUpperCase();
      }
      return val;
    }, 
    currencyFormat(value) {
		let a = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return '$' + a;
	}
  };