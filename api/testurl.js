async function postData() {
    // Prepare the data to be sent
    var data = {
        title: "foo",
        body: "bar",
        userId: 1
    };
    var jsonData = JSON.stringify(data);

    try {
        // Make the POST request using the fetch API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
postData();
    
































// // Prepare the data to be sent
// var data = {
//     title: "foo",
//     body: "bar",
//     userId: 1
// };
// var jsonData = JSON.stringify(data);

// // Make the POST request using the fetch API
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: jsonData
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
