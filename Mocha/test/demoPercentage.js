var assert = require("assert");
var Percentage = require("../lib/Percentage")

describe("Percentage", function() {
    describe ("#Evolution", function (){
        it("should give an evolution", function() {
            assert.equal(Percentage.evolution(100,200), 100, "Erreur calcul évolution 100 à 200 !!");
            assert.equal(Percentage.evolution(100,150), 50, "Erreur calcul évolution 100 à 150 !!");
            assert.equal(Percentage.evolution(100,50), -50, "Erreur calcul évolution 100 à 50 !!");
        })

        it("should handle 0 evolution", function() {
            assert.equal(Percentage.evolution(0, 100), Infinity, "Erreur calcul évolution de 100 à 0 !!");
        })

        it ("should round value", function() {
            assert.equal(Percentage.evolution(30,50), 67, "Erreur calcul de la valeur arrondi de 30 à 50 !!")
        })
    })
})