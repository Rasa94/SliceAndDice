// Window that shows the users database 

const recipeDB = document.querySelector('.recipeDB');
const recipeTable = document.querySelector('.recipeTable');

const url = 'http://localhost:5000/sliceanddice/';

const res = new Request(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})

fetch(res)
    .then(res => res.json())
    .then(res => {
        res.data.forEach(element => {
            console.log(element._id);
            recipeTable.innerHTML +=      
                                `<tr>
                                    <td>${element._id}</td>
                                    <th>'Name:'</th>
                                    <td>${element.name}</td>
                                    <th>'Description:'</th>
                                    <td>${element.description}</td>
                                    <th>'Ingredients:'</th>
                                    <td>${element.ingredients}</td>
                                    <th>'Steps:'</th>
                                    <td>${element.steps}</td>  
                                </tr>
                                <button class="delete">Del</button>`;             
        });
})     

recipeDB.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList == 'delete') {
        let recipeId = e.target.previousElementSibling.firstChild.childNodes[1].innerText;
        const delReq = new Request(`${url}/${recipeId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    
        fetch(delReq)
                    .then(res => res.json())
                    .then(() => {
                        e.target.previousElementSibling.firstChild.innerHTML = '';
                        e.target.innerHTML = '';
                        e.target.classList = 'none';
                    })
    }        
        
}), true;