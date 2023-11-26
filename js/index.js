const loadMeals = async(searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    }
    catch(error){
        console.log(error);
    }


}
const displayMeals = (meals) => {
    // console.log(meals);
   
   try{
     //step 1: jar modde element set korbo take call kore niye aste hobe. 
     const mealsContainer = document.getElementById("meals-container");
     mealsContainer.innerHTML = ' ';


     meals.forEach(meal=> {
        // console.log(meal);
        // step 2: element gulo set korar jonno notun container make korte hobe 
     const mealDiv = document.createElement('div');
     mealDiv.classList.add();

     mealDiv.innerHTML = `
     <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-5">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-7 d-flex flex-col justify-content-center align-items-center gap-5">
                    <div class="card-body">
                      <h5 class="card-title fs-4">${meal.strMeal
                      }</h5>
                      <p class="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text small"><a href="#" onclick="loadDetailsMeal(${meal.idMeal})" class="text-warning small fw-bold"data-bs-toggle="modal" data-bs-target="#ModalDetails">View Details</a></p>
                    </div>
                  </div>
                </div>
              </div>
     
     `;
     mealsContainer.appendChild(mealDiv);
     })


   }
   catch(error){
    console.log(error);
   }


}

const searchMeal = () => {
   try{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
    searchText = ' ';
   }
   catch(error){
    console.log(error);
   }
}


const loadDetailsMeal = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealsDetails(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
    
}

const displayMealsDetails = meal => {
    const modalTitle = document.getElementById('ModalDetailsHeader');
    modalTitle.innerText = meal.strMeal;
    console.log(meal);
    const mealsDetailsBody = document.getElementById('mealsDetailsBody');
    mealsDetailsBody.innerHTML =   `
    <img class="img-fluid" src="${meal.strMealThumb}" alt="...">
    <p class="mt-2">Details: ${meal.strInstructions}</p2>
    
    `
}
loadMeals('m');