class Movie
{
    constructor(name, studio, rating = "PG")
    {
        this.name = name;
        this.studio = studio;
        this.rating = rating;
    } 
    getPg()
    {
        if(this.rating = 'G') 
        {
          return 'Yes';
        }
        
        return 'No';
    }
}

let movie1 = new Movie("Casino Royale", "Eon Production", "G");
console.log(movie1.getPg());
