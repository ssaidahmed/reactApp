export default toLocaleFormat = function(format) {
     	var f = {y : this.getYear() + 1900,m : this.getMonth() + 1,d : this.getDate(),H : this.getHours(),M : this.getMinutes(),S : this.getSeconds()}
     	for(k in f)
     		format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
     	return format;
};