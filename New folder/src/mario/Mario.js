import React,{useEffect,useState} from 'react'
import platform1 from '../resources/platform1.png'
import platform2 from '../resources/platform2.png'
import platform3 from '../resources/platform3.png'
import hills from '../resources/hills.png'
import background from '../resources/background2.png'
import spritesheet from '../resources/spritesheet.png'
import spritesheetrunright from '../resources/spritesheetrunright.png'
import spritesheetrunleft from '../resources/spritesheetrunleft.png'
import spritesheetstandleft from '../resources/spritesheetstandleft.png'
import './MarioLogic.css'

function Mario() {
    const Madesc0="This game as of now does not work on mobile phones. I will add buttons the on screen in future to control the character. Till then keep jumping, keep exploring."
    const Madesc1="Use the keys,     W => for jumping,     A => for going left,    D => for going right."
    const Madesc2="This game is made with pure javascript and is currently working on React.js. Sprite Sheet is used to animate the sprite. Everything on screen(the character, the platforms, the backgrounds) is a class having some propertites. Object of these classes are drawn on screen recursively to make the game playable. And obviosly, there are many check functions too, to implement game logic."
    const [Madesc,setMadesc]=useState(()=>{return Madesc0});
    useEffect(()=>{
      
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


//setting the size of the canvas
canvas.width = 1024;
canvas.height = 576;

//this value will be added to the velocity recursively to create illussion of gravity
const gravity = 1.5;

//creating class player which stores the property of the player we create
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 114
        this.height = 143
        this.image=createImage(spritesheet)
        this.frame=0
        this.sprites= {
            stand:{
                right: createImage(spritesheet),
                left: createImage(spritesheetstandleft)
            },
            run:{
                right: createImage(spritesheetrunright),
                left: createImage(spritesheetrunleft),
            }
        }
        this.currentSprite= this.sprites.stand.right;
    }



    //function to draw player on the screen
    draw() {
        c.drawImage(
            this.currentSprite,
             114* (Math.floor(this.frame/3)),
             0,
             114,
             143,
             this.position.x, 
             this.position.y,
             this.width,
             this.height
             )
    }
 
    update() {
        this.frame++;
        if(this.frame>=30  && (this.currentSprite=== this.sprites.stand.right||this.currentSprite=== this.sprites.stand.left))this.frame=0;
        else if(this.frame>=24  && (this.currentSprite=== this.sprites.run.right||this.currentSprite=== this.sprites.run.left))this.frame=0;
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        //only add downward velocity to the player if it is not touching the ground
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }

    }
}


//creating a class platform which store the property for the platforms that we will create.
class Platform {
    constructor({ x, y, image1 }) {
        this.position = {
            x: x,
            y: y
        }
        this.image1 = image1;
        this.width = image1.width;
        this.height = image1.height;

    }

    draw() {
        c.drawImage(this.image1, this.position.x, this.position.y)
    }
}



//creating a class Generic Objects which store the property for the background that we will create.
class GenericObject {
    constructor({ x, y, image1 }) {
        this.position = {
            x: x,
            y: y
        }
        this.image1 = image1;
        this.width = image1.width;
        this.height = image1.height;

    }

    draw() {
        c.drawImage(this.image1, this.position.x, this.position.y)
    }
}



//creating a new player
let player = new Player();


//function that returns different images 
function createImage(imageSrc) {
    const image1 = new Image();
    image1.src = imageSrc;
    return image1;
}

let base1 = createImage(platform2);
//creating  new platforms
let platforms = [
    new Platform({
        x: 2050,
        y: 300,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 2450,
        y: 150,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 5610,
        y: 150,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 5610,
        y: 300,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 7900,
        y: 300,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 8300,
        y: 150,
        image1: createImage(platform1)
    }),
    new Platform({
        x: 0,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 580,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 1310,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 3000,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 3780,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 4100,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 4420,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 4740,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 5320,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 6160,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 6940,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 7260,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 7580,
        y: 452,
        image1: createImage(platform3)
    }),
    new Platform({
        x: 8850,
        y: 452,
        image1: base1
    }),
    new Platform({
        x: 9430,
        y: 452,
        image1: base1
    }),
]


//creating bckground
let GenericObjectsBg = [
    new GenericObject({
        x: 0,
        y: -2,
        image1: createImage(background)
    })
];
//creating
let GenericObjectsHills = [
    new GenericObject({
        x: 0,
        y: 0,
        image1: createImage(hills)
    })
];


//object keys to keep track if left and right keys are pressed or not 
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}


let scrollOffset=0;

// Function to reset the game once we fall into the pit
function init() {

    player = new Player();

    base1 = createImage(platform2)
    platforms = [
        new Platform({
            x: 2050,
            y: 300,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 2450,
            y: 150,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 5610,
            y: 150,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 5610,
            y: 300,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 7900,
            y: 300,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 8300,
            y: 150,
            image1: createImage(platform1)
        }),
        new Platform({
            x: 0,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 580,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 1310,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 3000,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 3780,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 4100,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 4420,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 4740,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 5320,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 6160,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 6940,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 7260,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 7580,
            y: 452,
            image1: createImage(platform3)
        }),
        new Platform({
            x: 8850,
            y: 452,
            image1: base1
        }),
        new Platform({
            x: 9430,
            y: 452,
            image1: base1
        }),
    ];

    //creating bckground
  GenericObjectsBg = [
    new GenericObject({
        x: 0,
        y: -2,
        image1: createImage(background)
    })
];
//creating
GenericObjectsHills = [
    new GenericObject({
        x: 0,
        y: 0,
        image1: createImage(hills)
    })
];
  scrollOffset=0;
}
//recursive that calls update player to add velocity to update palyers position
function animate() {
    //to keep drawing our player
    requestAnimationFrame(animate);
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height);

    //to keep drawing the background
    GenericObjectsBg.forEach(genobj => {
        genobj.draw();
    });
    //to keep drawing the hills
    GenericObjectsHills.forEach(genobj => {
        genobj.draw();
    });

    //to keep drawing the platform
    platforms.forEach(platform => {
        platform.draw();
    });

    player.update();
    //checks for moving player left and right
    //player only moves when between 100 & 400px in x axis after this backgrounds move
    if (keys.right.pressed && (player.position.x <= 400)) {
        player.velocity.x = 5;
    }
    else if ((keys.left.pressed && player.position.x > 100)||(keys.left.pressed && scrollOffset===0 && player.position.x > 0)) {
        player.velocity.x = -5;
    }
    else {
        player.velocity.x = 0;
        //if player reached the limiting positions and keys are still pressed move the platform
        if (keys.right.pressed) {

            scrollOffset += 5.
            platforms.forEach(platform => {
                platform.position.x -= 5;
            });
            GenericObjectsHills.forEach(genobj => {
                genobj.position.x -= 2;
            });
            GenericObjectsBg.forEach(genobj => {
                genobj.position.x -= 1;
            });
        }
        else if (keys.left.pressed && scrollOffset>0) {
            scrollOffset -= 5.
            platforms.forEach(platform => {
                platform.position.x += 5;
            });
            GenericObjectsHills.forEach(genobj => {
                genobj.position.x += 2;
            });
            GenericObjectsBg.forEach(genobj => {
                genobj.position.x += 1;
            });

        }
    }

    //this is for the collision detection between player and platform
    platforms.forEach(platform => {
        if ((player.position.y + player.height <= platform.position.y) && (player.position.y + player.height + player.velocity.y >= platform.position.y )&&( player.position.x + player.width >= platform.position.x )&& (player.position.x <= platform.position.x + platform.width)) {
            player.velocity.y = 0;
        }
    });


    //player loose condition
    if (player.position.y > canvas.height) {
        init();
    }

}

animate();



//adding controls to the player
//adding movement when key is pressed
window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            //moving player left on clicking "a" 
            player.currentSprite=player.sprites.run.left;    
            keys.left.pressed = true;
            break;
        case 83:
            //moving player downwards on clicking "s"
            break;
        case 68:
            //moving player right on clicking "d"
            keys.right.pressed = true;
            player.currentSprite=player.sprites.run.right;
            break;
        case 87:
            //moving player upwards on clicking "w"
            if (player.velocity.y === 0)
                player.velocity.y -= 25;
            break;
        default:
            break;
    }
})

//removing movement when key is unpressed
window.addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            //stoping player left movement
            player.currentSprite=player.sprites.stand.left; 
            keys.left.pressed = false;
            break;
        case 83:
            //stoping player down movement
            break;
        case 68:
            //stoping player right movement
            keys.right.pressed = false;
            player.currentSprite=player.sprites.stand.right;
            break;
        case 87:
            //stoping player up movement
            player.velocity.y = 0;
            break;
        default:
            break;
    }
})
    },[])
    
  return (
    <div className='mario'>
        <div className="Marioheading">
            <h2> Jumping Jack</h2>
        </div>
        <canvas ></canvas>
        <div className="marioleftsec">
            <div className="marioglassBlock">
            <div className="MarioList">
                    <div className="MariofirstBox" onClick={()=>setMadesc(Madesc1)}>Instructions</div>
                    <div className="MariofirstBox" onClick={()=>setMadesc(Madesc2)}>Information</div>
                   
                   </div>
                   <div className="MarioDesc"> <p>
                     {Madesc}
                    </p></div>
            </div>
        </div>
       
    </div>
  )
}

export default Mario