const bees = document.createElement('img');

import myHeader from "./components/myHeader.js";
import myBanner from "./components/myBanner.js";
import myPost from "./components/myPost.js";
import myAside from "./components/myAside.js";

myHeader.listTitle();
myHeader.displayCompany();
myBanner.showImage();
myBanner.showSectionBanner();
myPost.showPost();
myAside.showAside();


/* Bees animation*/
bees.src = './img/bee.gif';
bees.id = 'bees';
document.body.appendChild(bees);