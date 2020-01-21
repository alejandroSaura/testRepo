describe("Huerta", function() {
    
    beforeEach(function() {
        spyOn(Planta, "getColor").and.callFake(function() {
            return "red";
        });
    });

});