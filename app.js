var stage = new PIXI.Container();
var renderer = new PIXI.WebGLRenderer(320,120);
stage.buttonMode = true;
stage.interactive = true;
stage.hitArea = new PIXI.Rectangle(0, 0, 320, 120);
stage.defaultCursor = "url(cursor.png) 3 2, auto";
document.body.appendChild(renderer.view);
var images = [
  "background.png",
  "boy.png"
]
PIXI.loader
  .add(images)
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {


  cat = new PIXI.Sprite(
    PIXI.loader.resources["background.png"].texture
  );
  cat.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

  //Add the cat to the stage
  stage.addChild(cat);

  var cat = new PIXI.Sprite(
    PIXI.loader.resources["boy.png"].texture
  );
  cat.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  cat.x = 100;
  cat.y = 40;

  //Add the cat to the stage
  stage.addChild(cat);


  //Render the stage
  renderer.render(stage);
}
