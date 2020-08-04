class TV{
    constructor(...args)
    {
        [this.brand,  this.price, this.inches, this.OnOFFStatus,this.channel = 1, this.volume = 50] = args;
    }

    increaseVolume()
    {
        if(this.volume < 100) 
        {
            this.volume++;
        }
    }

    decreaseVolume()
    {
        if(this.volume > 0) 
        {
            this.volume--;
        }
    }

    reset()
    {
        this.volume = 50;
        this.channel = 1;
    }

    status()
    {
        return this.brand + ' at channel ' + this.channel + ', volume' + this.volume;
    }

    setChannel()
    {
        if(value > 50) 
        {
            this.channel = value;
        }
    }
}

class LED extends TV 
{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args)
    {
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel()
    { 
        return this.viewingAngel;
    }
    
    backLight()
    { 
        return this.backLight;
    }
    display()
    { 
        return this.energyUse + this.lifeSpan + this.refreshRate;
    }
}

class Plasma extends TV
{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args){
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel()
    { 
        return this.viewingAngel;
    }
    backLight()
    { 
        return this.backLight;
    }
    display()
    { 
        return this.energyUse + this.lifeSpan + this.refreshRate;
    }
}

let tv = new TV("SONY",50000,50,"On")
console.log(tv)

let led = new LED(150,5,10,50,brand="INTEX",price=10000,inches=150,OnOffstatus="ON")
console.log(led)
