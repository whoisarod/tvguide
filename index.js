async function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    let show = await response.json();
    return show;
}

function getShowHTML(show) {
    return `
        <div class="my-show">
            <div class="my-show-title">
            ${show.name}
        </div>
        
        <div class="my-show-summary">
            ${show.summary}
        </div>
        </div>
    `;
}

function displayShows(shows) {    
    document.body.innerHTML = `
        <div class="my-shows">
        ${shows.map(show => getShowHTML(show.show)).join('')}
        </div>
    `; 
}

findShow('office').then(displayShows)
    .catch(error => console.log(error));