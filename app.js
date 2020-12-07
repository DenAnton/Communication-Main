class App {
    constructor(){
        this.searchInputE = document.querySelector('.search-input');
        this.wrapper = document.querySelector('.wrapper');
        this.button = document.querySelector('#button');
        this.meals = [];
    }
    async searchMeal(inputValue){
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);

            if(res.status == 400){
            throw new Error('Error')
            }

            const json = await res.json();
            this.meals = json.meals;
            for (let i = 0; i < this.meals.length; i++) {
                this.wrapper.innerHTML += `
                    <h2>${this.meals[i].strMeal}</h2>
                    <p>${this.meals[i].strInstructions}</p>
                `;
            }
            console.log(this.meals)
        } catch(error){
            console.log(error)
        }
        
    }
    run(){
        this.addEventListeners();
        this.searchMeal();
    }
    addEventListeners() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("works");
            const searchStr = this.searchInputE.value;
            this.searchMeal(searchStr);
        });
    }
}

const app = new App();
app.run(); 

