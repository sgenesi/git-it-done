var getRepoIssues = function (repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

    fetch(apiUrl).then(function (reponse) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
                // pass response data to dom function
                displayIssues(data);
            });
        }
        else {
            alert("There was a problem with your request!");
        }
    });
    console.log(repo)
};

var displayIssues = function (issues) {


};

getRepoIssues("facebook/react");