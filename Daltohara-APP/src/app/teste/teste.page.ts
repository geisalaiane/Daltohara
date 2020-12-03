import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ToastController,
} from "@ionic/angular";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  imageOption = [
    '2.jpg',
    '3.jpg',
    '5.gif',
    '6.gif',
    '7.gif',
    '12.jpg',
    '15.gif',
    '16.gif',
    '26.gif',
    '29.gif',
    '42.gif',
    '45.jpg',
    '73.gif',
    '74.jpg'
  ]

  randomImage: String
  randomImageNumber: String
  userResponseNumber: any

  corrects: number = 0
  incorrects: number = 0

  constructor(
    private toastCtrl: ToastController,
    public router: Router
  ) {}

  ngOnInit() {
    this.randomImage = this.getRandomImage()
  }

  removeElementByValue(array, element: string) {
    array.forEach((value, index) => {
        if (value == element) array.splice(index, 1);
    });
  }

  getRandomImage() {
    const imageDir = `assets/img/`

    const imageName = this.imageOption[Math.floor(Math.random() * this.imageOption.length)]

    this.removeElementByValue(this.imageOption, imageName)

    const chosenImage = `${imageDir}${imageName}`
    
    return chosenImage
  }

  splitRandomNumber(imagePath: String) {
    const splittedResponse = imagePath.split('/')
    
    const lastPosition = splittedResponse.pop()
    const imageResponseNumber = lastPosition.split('.')[0]

    return imageResponseNumber
  }

  validResponseFromRandomImage(imageResponse: String, userResponse: String) {    
    if (userResponse === this.splitRandomNumber(imageResponse)) {
      return true
    }
    
    return false
  }

  getUserResponse() {
    // @ts-ignore
    this.userResponseNumber = document.getElementById("response").value
  }

  submit(imageResponse: String, userResponse: String) {    
    if (this.imageOption.length > 0) {
      if (this.validResponseFromRandomImage(imageResponse, userResponse)) {
        this.corrects += 1
        this.showToast("Você acertou")
      } else {
        this.incorrects += 1
        this.showToast("Você errou")
      }

      this.randomImage = this.getRandomImage()
    } else {
      this.showToast(`Você terminou o teste, acertos: ${this.corrects}, erros: ${this.incorrects}`)

      this.router.navigate(['home']);
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}