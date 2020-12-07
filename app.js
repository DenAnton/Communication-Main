class App {
    constructor(){
        this.searchInputE = document.querySelector('.search-input');
    }
    async searchMeal(){
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);

            if(res.status == 400){
            throw new Error('Error')
            }

            const json = await res.json();
            console.log(json)
        } catch(error){
            console.log(error)
        }
        
    }
    run(){
        this.searchMeal();
    }
}

const app = new App();
app.run(); 

