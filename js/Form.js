class Form {
  constructor() {
    this.input=createInput("").attribute("Placeholder","Enter your name")
    this.playButton=createButton("okbutton")
    this.titleImage=createImg("./assets/title.png")
    this.greeting=createElement("h2")
  }
setElementPosition(){
  this.input.position(width/2-100,height/2-80)
  this.playButton.position(width/2-90,height/2-20)
  this.titleImage.position(120,100)
  this.greeting.position(width/2-300,height/2-100)
  
}
hide(){
  this.greeting.hide()
  this.playButton.hide()
  this.input.hide()
}
handlemousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    var message = `Hello ${this.input.value()}
    </br>wait for another player to join`
    this.greeting.html(message)
  
  })
}

display(){
  this.setElementPosition()
  this.handlemousePressed()
}

}
