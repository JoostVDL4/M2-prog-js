class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;

        
    }
    eetDino(dino)
    {
        dino.leeft = false;
        console.log(this.naam + "eet de plant "+ dino.naam);
    }
    
    eetPlant(plant)
    {
        console.log(this.naam + "eet de plant "+ plant.naam)
    }
}


class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}


    
        let trex = new Dino("Trex ",true,10);
        console.log(trex);
        let stego = new Dino("Stego ",false,33);
        console.log (stego);
        let dino3 = new Dino("Dino3 ",true,44);
        console.log (dino3);
        let grass = new Plant("grass ");
        console.log (grass);``

    

trex.eetDino(stego);
stego.eetPlant(grass);

