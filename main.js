import myHeader from "./components/myHeader.js";
import myBanner from "./components/myBanner.js";
import myPost from "./components/myPost.js";
import myAside from "./components/myAside.js";
import myBlog from "./components/myBlog.js";

const bees = document.createElement('img');

myHeader.showHeader();
myBanner.showBanner();
myPost.showPost();
myAside.showAside();
myBlog.showBlog();





/* Bees animation*/
bees.src = './img/bee.gif';
bees.id = 'bees';
document.body.appendChild(bees);