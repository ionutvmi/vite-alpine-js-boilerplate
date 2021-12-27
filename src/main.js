import Alpine from 'alpinejs';
import "./sass/style.scss";

window.Alpine = Alpine;

// auto load all the files from the ./js/components folder
const components = Object.values(import.meta.globEager('./js/components/*.js'));
components.forEach(function (component) {
    Alpine.plugin(component.default);
});


Alpine.start();
