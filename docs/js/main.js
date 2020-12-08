// JS code for all pages. Adds the navbar dynamicly so if I want to change a link later on all pages I can.
let navMarkup = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a class="navbar-brand" href="index.html"> <img class="nav__logo" src="img/logo.png" alt="logo" /> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation" > <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarsDefault"> <ul class="navbar-nav mr-auto"> <li class="nav-item"> <a class="nav-link" href="menu.html">Menu</a> </li> <li class="nav-item"> <a class="nav-link" href="book.html">Book</a> </li> <li class="nav-item"> <a class="nav-link" href="about.html">About</a> </li> </ul> </div> </nav>
`;
document.getElementById("nav").innerHTML = navMarkup;

// TODO: Find data and images for menu.
// TODO: Podesti se bootstrap grid system
// TODO: Odgledati jQueiry predavanje.
// TODO: Check what documenataion means in this case.

/*
SEO Checklist
Book Tabel (Native JS i Regex)
Menu (dynamic)
jQuery animacije i mozda neke druge stvari
*/
