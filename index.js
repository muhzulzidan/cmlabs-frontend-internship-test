$(document).ready(function () {
    // Get the category parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');

    if (category) {
        // Fetch meals based on the selected category
        $.ajax({
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category,
            method: 'GET',
            success: function (response) {
                var meals = response.meals;

                // Loop through the meals and create HTML elements
                meals.forEach(function (meal) {
                    var mealItem = $('<div class="col-md-4 mb-4"></div>');
                    var mealLink = $('<a href="meal_detail.html?id=' + meal.idMeal + '"></a>');
                    var mealImage = $('<img src="' + meal.strMealThumb + '" class="img-fluid">');
                    var mealName = $('<h4>' + meal.strMeal + '</h4>');

                    // Append elements to the meal list
                    mealLink.append(mealImage, mealName);
                    mealItem.append(mealLink);
                    $('#mealList').append(mealItem);
                });
            }
        });
    }
});


$(document).ready(function () {
    // Fetch meal categories from API
    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        method: 'GET',
        success: function (response) {
            var categories = response.categories;

            // Loop through the categories and create HTML elements
            categories.forEach(function (category) {
                var categoryItem = $('<div class="col-md-4 mb-4"></div>');
                var categoryLink = $('<a href="category_detail.html?category=' + category.strCategory + '"></a>');
                var categoryImage = $('<img src="' + category.strCategoryThumb + '" class="img-fluid">');
                var categoryName = $('<h4>' + category.strCategory + '</h4>');

                // Append elements to the category list
                categoryLink.append(categoryImage, categoryName);
                categoryItem.append(categoryLink);
                $('#categoryList').append(categoryItem);
            });
        }
    });
});


$(document).ready(function () {
    // Get the meal ID parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var mealId = urlParams.get('id');

    if (mealId) {
        // Fetch meal details based on the selected meal ID
        $.ajax({
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId,
            method: 'GET',
            success: function (response) {
                var meal = response.meals[0];

                // Set the meal details in the HTML elements
                $('#mealImage').attr('src', meal.strMealThumb);
                $('#mealName').text(meal.strMeal);
                $('#mealDescription').text(meal.strInstructions);

                // Get the recipe details and append them to the list
                for (var i = 1; i <= 20; i++) {
                    var ingredient = meal['strIngredient' + i];
                    var measure = meal['strMeasure' + i];
                    if (ingredient && measure) {
                        $('#mealRecipe').append('<li>' + measure + ' ' + ingredient + '</li>');
                    }
                }

                // Embed YouTube video if available
                var youtubeLink = meal.strYoutube;
                if (youtubeLink) {
                    var videoId = youtubeLink.split('v=')[1];
                    var embeddedVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>');
                    $('#mealVideo').append(embeddedVideo);
                }
            }
        });
    }
});