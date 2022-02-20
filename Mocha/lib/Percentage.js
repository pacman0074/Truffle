module.exports = {

    evolution : function (a,b) {
        if (a == 0) {
            return Infinity;
        } 
        return Math.round(100 * (b-a)/a);
    }
}