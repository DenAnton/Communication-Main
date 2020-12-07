class App {
    constructor(){
        this.searchInputE = document.querySelector('.search-input');
        this.list = document.querySelector('#list');
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
            this.list.innerHTML = ''
            for (let i = 0; i < this.meals.length; i++) {
                this.list.innerHTML += `
                <li>
                    <h2>${this.meals[i].strMeal}</h2>
                    <img src="${this.meals[i].strMealThumb}"></img>
                    <p>${this.meals[i].strInstructions}</p>
                    <hr>
                </li>`;
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
            const searchStr = this.searchInputE.value;
            this.searchMeal(searchStr);
            console.log(searchStr)
        });
        
        /* this.searchInputE.addEventListener('keyup',(event) => {
            event.preventDefault()
            if(event.keyCode === 13) {
                event.preventDefault()
                this.button.click()
            }
            testtesttest
        }) */
    }
}

const app = new App();
app.run();

