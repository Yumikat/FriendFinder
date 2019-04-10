    var companion = [
    {
        "animal": "dog",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eBhILMPbTWp_2rf7LuO9eYxXjzPiSPZjlXQdBWGOl2VDY9aOwg",
        "scores": [4, 5, 3, 4, 2, 1, 4, 2, 5, 1]
    },
    {
        "animal": "cat",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7lu4N3MWdWGRUXcaw-5eWcAZUUWLsU8GGEYcnut4gswMQsQTYw",
        "scores": [3, 2, 3, 1, 2, 5, 2, 3, 2, 1]
    },
    {
        "animal": "bird",
        "photo": "https://s7d2.scene7.com/is/image/PetSmart/ARHERO-CaringForYourBird-20160818?$AR0301$",
        "scores": [2, 4, 3, 5, 3, 4, 1, 2, 4, 5]
    },
    {
        "animal": "reptile",
        "photo": "https://www.zillarules.com/-/media/Images/Zilla-NA/US/Blog-Articles/top-ten/4critters-rectangle.jpg",
        "scores": [3, 3, 4, 2, 4, 4, 2, 1, 2, 4]
    },
    {
        "animal": "rodent",
        "photo": "https://www.thesprucepets.com/thmb/uA80fGqk22ISld0u3C9zHqXWQF8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-rodents-as-pets-1237271-FINAL-5bdb6b22c9e77c0026b49012.png",
        "scores": [1, 1, 2, 2, 3, 3, 3, 4, 2, 2]
    },
    {
        "animal": "dragon",
        "photo": "https://media.wired.com/photos/5ada3a2c1e66870735eada27/master/pass/DragonPasswordFINAL.jpg",
        "scores": [5, 2, 5, 5, 5, 5, 1, 1, 1, 5]
    }
]

module.exports = companion;



//   Determine the user's most compatible friend using the following as a guide:



// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


// Example:


// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5





// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.


// The modal should display both the name and picture of the closest match.