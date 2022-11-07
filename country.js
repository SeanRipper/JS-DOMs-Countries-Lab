class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai!", ["white", "red"]);
let canada = new Country("Canada", "Canadienese", "Hello World, eh?", ["white", "red"]);


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        console.log(usa.name);

        document.getElementById("HelloWorld").innerText = usa.greeting;
        document.getElementById("OfficialLanguage").innerText = usa.lang;
        document.getElementById("CountryName").innerText = usa.name;

        document.getElementById("Color1").style.backgroundColor = usa.colors[0];
        document.getElementById("Color2").style.backgroundColor = usa.colors[2];
        document.getElementById("Color3").style.backgroundColor = usa.colors[1];
    }
    else if (input === "Mexico") {
        country = mexico;
        console.log(mexico.name);

        document.getElementById("HelloWorld").innerText = mexico.greeting;
        document.getElementById("OfficialLanguage").innerText = mexico.lang;
        document.getElementById("CountryName").innerText = mexico.name;

        document.getElementById("Color1").style.backgroundColor = mexico.colors[0];
        document.getElementById("Color2").style.backgroundColor = mexico.colors[2];
        document.getElementById("Color3").style.backgroundColor = mexico.colors[1];
    }
    else if (input === "Algeria") {
        country = algeria;
        console.log(algeria.name);

        document.getElementById("HelloWorld").innerText = algeria.greeting;
        document.getElementById("OfficialLanguage").innerText = algeria.lang;
        document.getElementById("CountryName").innerText = algeria.name;

        document.getElementById("Color1").style.backgroundColor = algeria.colors[0];
        document.getElementById("Color2").style.backgroundColor = algeria.colors[2];
        document.getElementById("Color3").style.backgroundColor = algeria.colors[1];
    }
    else if(input === "Germany"){
        country = germany;
        console.log(germany.name);

        document.getElementById("HelloWorld").innerText = germany.greeting;
        document.getElementById("OfficialLanguage").innerText = germany.lang;
        document.getElementById("CountryName").innerText = germany.name;

        document.getElementById("Color1").style.backgroundColor = germany.colors[0];
        document.getElementById("Color2").style.backgroundColor = germany.colors[2];
        document.getElementById("Color3").style.backgroundColor = germany.colors[1];
    }
    else if(input === "Japan"){
        country = japan;
        console.log(japan.name);

        document.getElementById("HelloWorld").innerText = japan.greeting;
        document.getElementById("OfficialLanguage").innerText = japan.lang;
        document.getElementById("CountryName").innerText = japan.name;

        document.getElementById("Color1").style.backgroundColor = japan.colors[1];
        document.getElementById("Color2").style.backgroundColor = japan.colors[0];
        document.getElementById("Color3").style.backgroundColor = japan.colors[0];
    }
    else if(input === "Canada"){
        country = canada;
        console.log(canada.name);

        document.getElementById("HelloWorld").innerText = canada.greeting;
        document.getElementById("OfficialLanguage").innerText = canada.lang;
        document.getElementById("CountryName").innerText = canada.name;

        document.getElementById("Color1").style.backgroundColor = canada.colors[1];
        document.getElementById("Color2").style.backgroundColor = canada.colors[0];
        document.getElementById("Color3").style.backgroundColor = canada.colors[0];
    }

}
