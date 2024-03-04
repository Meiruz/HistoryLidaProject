var url = new URL(document.location.href),
    id = new URLSearchParams(url.search).get("id")
document.getElementById("title").innerHTML = groups[id-1].name
document.getElementsByTagName("title")[0].innerHTML = groups[id-1].name

for (var j = 0, m = groups[id-1].items.length; j < m; j++) {
    let button = document.createElement('div');
    button.classList.add('point');
    button.style.top = `${groups[id-1].items[j].center[1]}%`;
    button.style.left = `${groups[id-1].items[j].center[0]}%`;
    button.style.background = "url('img/" + id + ".png')"; 

    button.style.backgroundRepeat = 'no-repeat'
    button.style.backgroundPosition = 'center'
    button.style.backgroundSize = 'cover'
    
    let attr = document.createAttribute('i');
    attr.value = j;
    button.setAttributeNode(attr);

    button.addEventListener('click', () => {
        openMenu(groups[id-1].items[button.getAttribute('i')].name, groups[id-1].items[button.getAttribute('i')].about, groups[id-1].items[button.getAttribute('i')].image)
    })

    document.querySelector('#map').appendChild(button);
}

function openMenu(name, about, img) {
    document.querySelector('.information_header').style.minHeight = "50px";
    document.querySelector('.information_header').style.alignItems = 'center';
    document.querySelector('.information_header').style.background = '#b3b3b3';
    document.querySelector('.inf').innerHTML = ''
    document.querySelector('.information_text').innerHTML = ''
    document.querySelector('.inf').style.color = "black";
    document.querySelector('.inf').style.paddingTop = "0";
    document.querySelector('.inf').style.background = "none";

    if (img != '') {
        document.querySelector('.information_header').style.minHeight = "350px";
        document.querySelector('.information_header').style.alignItems = 'end';
        document.querySelector('.information_header').style.background = 'url("' + img + '")';
        document.querySelector('.information_header').style.backgroundRepeat = 'no-repeat'
        document.querySelector('.information_header').style.backgroundPosition = 'center'
        document.querySelector('.information_header').style.backgroundSize = 'cover'
    }
    
    let nameEl = document.createElement('p');
    nameEl.classList.add('name_page');
    nameEl.innerHTML = "" + name
    nameEl.id = 'name_page';
    
    if (img == '') {
        document.querySelector('.information_text').innerHTML = '' + about;
        document.querySelector('.inf').appendChild(nameEl)
    } else {
        document.querySelector('.inf').style.color = "white";
        document.querySelector('.inf').style.paddingTop = "20px";
        document.querySelector('.inf').style.background = "rgb(0,0,0)";
        document.querySelector('.inf').style.background = "linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(255,255,255,0) 100%)";
        document.querySelector('.inf').appendChild(nameEl)
        document.querySelector('.information_text').innerHTML = '' + about;
        document.querySelector('#name_page').style.paddingBottom = '10px';
    }

    document.getElementById('menu').classList.add('open');
}

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('menu').classList.remove('open');
})