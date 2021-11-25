const bob = document.querySelector('.face')
const left = document.querySelector('.left-arrow')
const right = document.querySelector('.right-arrow')
let count = 0
// zmienna "bob"- document(ze element w dokumencie dokumencie) 
//querySelector (fraza do zaciagania "class")
//("Face") - klasa zdefiniowana w html

//function moveBob(){
//count += 50;
//bob.style.left = count + 'px';
    //Bob - zmienna / Style - odnosi sie do Stylesheet. Jakiego?
    //Tego co zdefiniowalismy pod zmienna, czyli "face"
    //Left = 100px to jest to co ta funkcja ma dopisac
    //console.log("Hi World");
//

//bob.addEventListener('click', moveBob)
//addEventListener (nasluchuje jakiegos Eventu)
//( x, y) - X wywoluje event a Y definiuje event

function moveRight(){
    count += 50;
    bob.style.left = count + 'px';
    console.log("Moved Right");
}

right.addEventListener('click', moveRight)


function moveLeft(){
    count -= 50;
    bob.style.left = count + 'px';
    console.log("Moved Left");
}

left.addEventListener('click', moveLeft)