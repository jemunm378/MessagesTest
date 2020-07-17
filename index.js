var hash = location.hash;
var user = hash.replace("#", "");
fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/" + user +"/messages/count").then(res => res.json()).then(json => { const messageCount = json.count; console.log(messageCount); document.getElementById("messageCount").innerHTML = messageCount; 
if (messageCount === undefined) {
 window.location.href = "https://spaceflyer234.github.io/ScratchStatistics/users/#Spaceflyer234"
 location.reload();
}});
fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/" + user +"/").then(res => res.json()).then(json => { const username = json.username; console.log(username); document.getElementById("username").innerHTML = username; });
fetch("https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/site-api/users/all/" + user +"/").then(res => res.json()).then(json => { const id = json.id; console.log(id); document.getElementById("id").innerHTML = id; });
fetch("https://cors-anywhere.herokuapp.com/https://scratchdb.lefty.one/v2/user/info/" + user + "/").then(res => res.json()).then(json => { const rank = json.status; console.log(rank); document.getElementById("rank").innerHTML = rank; });
fetch("https://cors-anywhere.herokuapp.com/https://scratchdb.lefty.one/v2/user/info/" + user + "/").then(res => res.json()).then(json => { const following = json.following; console.log(following); document.getElementById("following").innerHTML = following; });
fetch("https://cors-anywhere.herokuapp.com/https://scratchdb.lefty.one/v2/user/info/" + user + "/").then(res => res.json()).then(json => { const followers = json.followers; console.log(followers); document.getElementById("followers").innerHTML = followers; });
fetch("https://cors-anywhere.herokuapp.com/https://scratchdb.lefty.one/v2/user/info/" + user + "/").then(res => res.json()).then(json => { const country = json.country; console.log(country); document.getElementById("country").innerHTML = country; });
