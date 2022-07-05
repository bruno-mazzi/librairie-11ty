function sortList() {
  document.querySelector('.filters').style.display = 'block';
    
  var options = {
      valueNames: [ 'ouvrage-title', { name: 'time', attr: 'data-time' } ]
  };
      
  var collectionList = new List('js-collection', options);
}

function changeTheme() {
  const btn = document.querySelector(".btn-toggle");
    const currentTheme = localStorage.getItem("theme");

    btn.classList.add("show-btn");


    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-mode");
        document.querySelector('.btn-toggle').innerHTML = 'Interface clair'
    } else {
        document.body.classList.toggle("light-mode");
        document.querySelector('.btn-toggle').innerHTML = 'Interface sombre'
    }


    btn.addEventListener("click", function() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.toggle("light-mode");
            document.body.classList.toggle("dark-mode");
            document.querySelector('.btn-toggle').innerHTML = 'Interface clair'
            var theme = "dark";
        } else {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");
            document.querySelector('.btn-toggle').innerHTML = 'Interface sombre'
            var theme = "light";
        }

        localStorage.setItem("theme", theme);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  sortList()
  changeTheme()
});