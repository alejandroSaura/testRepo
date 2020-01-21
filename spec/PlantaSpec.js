describe("Planta", function() {
    
    var planta;

    beforeEach(function() {
        planta = new Planta();
    });

    describe("Si la riegas", function() {

    beforeEach(function() {
        planta = new Planta();
        planta.regar();
    });

    it("crece ese día", function() {
    
        var pesoInicial = planta.peso;            
        planta.pasarDia();
        var pesoFinal = planta.peso;

        expect(pesoFinal > pesoInicial).toBe(true);
    });

    it("si no la vuelves a regar no crece al segundo día", function() {
    
        planta.pasarDia();
        var pesoInicial = planta.peso;
        planta.pasarDia();   
        var pesoFinal = planta.peso;

        expect(pesoFinal == pesoInicial).toBe(true);
    });

    });  

    describe("Si no la riegas", function() {

    beforeEach(function() {
        planta = new Planta();
    });

    it("no crece ese día", function() {
    
        var pesoInicial = planta.peso;            
        planta.pasarDia();
        var pesoFinal = planta.peso;

        expect(pesoFinal == pesoInicial).toBe(true);
    });

    });     

    it("está lista al llegar a cierto peso", function() {
        
        for (var index = 0; index < 20; index++) {
            planta.regar();
            planta.pasarDia();            
        }

        expect(planta.peso >= 20).toBe(true);
        
    });

    it("distintos tipos de planta crecen a ritmo distinto", function() {
        
    });
});