// Renderiza texto inicial
ReactDOM.render(
    <i>Seja bem vindo a nossa locadora, escolha o filme de sua preferência e se divirta assitindo-o.</i>,
    document.getElementById("app")
);

// NavBar
function handleRentClick(url) {
    window.location.href = url;
}

ReactDOM.render(
    <a href="#Lançamento">Lançamentos</a>,
    document.getElementById("Lançamentos")
);

ReactDOM.render(
    <a href="#A1">Ação</a>,
    document.getElementById("Ação")
);

ReactDOM.render(
    <a href="#F1">Ficção científica</a>,
    document.getElementById("Ficção cientifica")
);

// Lançamentos
ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TtBsm1hDP7CQ0bRgfbMzbvuMTgy96v_IWQ&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-302445/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img1")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_v25AAT2lpy40vIn9Bsjg__57ou-rgY3yFg&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-52933/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img2")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUwZBjMl_ryINuwyfd9PnYTYONyhYRc_Kgg&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-191112/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img3")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEaoE0hEpnyh0rLsiIEqBZkOwnRI17LsCpA&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-197214/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img4")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ9OUkYwRqZCQkOa0kYJjyrorKXgznF9HbA&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-61282/creditos/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img5")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Zn6iFgN62TeNsOVgH4MIksk9i5e5yx8pig&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-141621/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("img6")
);

// Filmes de Ação
ReactDOM.render(
    <div>
        <div><img src="https://cinema10.com.br/upload/filmes/filmes_2476_images.jpg?default=poster" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-211012/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA1")
);

ReactDOM.render(
    <div>
        <div><img src="https://cinema10.com.br/upload/filmes/filmes_12810_01-1.jpg?default=poster" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-211012/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA2")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwylFTYZtUHG8H2eaU1l-_YYh0ml8vZI9zA&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.primevideo.com/-/pt/detail/Os-Renegados/0R87ULG0GMLZXOO38Y1RIEN5ZM')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA3")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2b8cc8lR7NX6XkjxEhcduKAVWvkY38ny3A&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-142913/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA4")
);

ReactDOM.render(
    <div>
        <div><img src="https://cineacao.wordpress.com/wp-content/uploads/2011/02/incontrolavel.jpg?w=636" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-129345/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA5")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmeVmR9_Buw5I28PuGslHbmOb9O-yHP8Rog&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.primevideo.com/-/pt/detail/Esquema-de-Risco---Opera%C3%A7%C3%A3o-Fortune/0IOD7JXVX6KUS12T7TN8FDFVYY')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgA6")
);

// Ficção Científica
ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcsszE3AHwDzoK50pzFU6Oj9SbkvQPMR1GA&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-219931/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF1")
);

ReactDOM.render(
    <div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7QUdlEnFye2dtDdv6B1gYf6xle4aZfY3EQ&s" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-302445/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF2")
);

ReactDOM.render(
    <div>
        <div><img src="https://s2.glbimg.com/szb1-_IWvdZoDm1mjIXZkgs8Ze8=/e.glbimg.com/og/ed/f/original/2018/02/22/annihilation_vertical-main_pre_bpo.jpg" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.netflix.com/br/title/80206300')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF3")
);

ReactDOM.render(
    <div>
        <div><img src="https://media.fstatic.com/UrJx-B5EnELV5-dOlHwhjS5QByo=/210x303/smart/filters:format(webp)/media/movies/covers/2024/01/cats_I9AIY55.jpg" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-133392/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF4")
);

ReactDOM.render(
    <div>
        <div><img src="https://media.fstatic.com/_rRs7-WukAV6zSqI5ksSwV4pacs=/210x303/smart/filters:format(webp)/media/movies/covers/2010/08/ee17059e510afd71b5dce35d8c908329.jpg" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.adorocinema.com/filmes/filme-1975/')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF5")
);

ReactDOM.render(
    <div>
        <div><img src="https://cdn.awsli.com.br/300x300/2597/2597891/produto/217407676/poster-cartaz-metropolis-b-5d42fda2.jpg" height="300px"/></div>
        <div><button className="rentButton" onClick={() => handleRentClick('https://www.amazon.com.br/Complete-Metropolis-Brigitte-Helm/dp/B0040QYROA')}>Ver Filme</button></div>
    </div>,
    document.getElementById("imgF6")
);

// Footer
ReactDOM.render(
    <p>Retornar o filme no prazo estipulado, caso contrário uma multa cumulativa será aplicada.</p>,
    document.getElementById("multa")
);

ReactDOM.render(
    <a href="https://zarakbarreto.com.br/" className="button2">Clique aqui para resolver problemas com a locação</a>,
    document.getElementById("btnContato")
);

document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
