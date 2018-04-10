// Sidebar

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 6000

});

//Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Eforie": null,
    "Costinesti": null,
    "Mangalia": null,
    "Neptun": null,
    "Constanta": null,
    "Mamaia": null
  }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//Scroll Spy

const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Display the current Year in the Footer
function currentY() {
  var date = new Date().getFullYear();
  document.getElementById('copyright').innerHTML = date;

  
}
currentY();