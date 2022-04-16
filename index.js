/* 
    TV Guide
    
    Write an async function called findShow(query)
        performs a fetch call to:
        https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons
        and returns the resulting show object
        
    Build a layout to display the show
        - Title
        - Summary
        - Seasons listed as individual divs
*/

async function findShow(query) {
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`);
    const show = await response.json();
    return show;
}

findShow('the big bang theory').then(show => {
    console.log(show);
    document.body.innerHTML = `
        <div class="my-show">
            <div class="my-show-title">${show.name}</div>

            <div class="my-show-summary">${show.summary}</div>
            
            ${show._embedded.seasons.map(season => {
                return `<div class="my-show-season">Season ${season.number}</div>`
            }).join('')}
        </div>
    `;
    
});