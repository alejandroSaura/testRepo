class Planta
{
    constructor()
    {
        this.color = "white";
        this.peso = 1;
        this.estado = "seca";
        this.crecimientoPorDia = 1;
        this.longitud = 1;
        this.edad = 15;
        this.dueño = "alex";
        this.numeroDeHojas = 34;

        this. hihds = "lqjsdl";
    }

    dameColor()
    {
        var fechaDeLondres = HttpRequest();

        var color = "white";
        switch(fechaDeLondres)
        {
            // 1000 lineas - 5 segundos
        }

        console.log("color");

        return color;
    }

    regar()
    {
        this.estado = "humeda";
    }

    pasarDia()
    {
        if (this.estado === "humeda")
        {
            this.peso += this.crecimientoPorDia;
            this.estado = "seca";

            this.peso += this.crecimientoPorDia;
            this.estado = "seca";

            this.peso += this.crecimientoPorDia;
            this.estado = "seca";
        }
    }

    estarLista()
    {
        if(this.peso >= 20)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}