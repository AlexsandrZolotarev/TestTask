import Luxe from '../assets/Luxe.png'
import Duplex from '../assets/Duplex.png'
import Business from '../assets/Business.png'

let namesImages = {
    'duplex' :Duplex,
    'luxe': Luxe,
    'business': Business,
};
Array.from(document.getElementsByClassName('item_room__image')).forEach(element => {
    element.src = namesImages[element.classList[1]];
    element.alt = 'Изображение комнаты';
});