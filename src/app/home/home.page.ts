import { Component } from '@angular/core';
import { ALARMAS } from 'src/data/data.alarma';
import { Alarma } from 'src/interfaces/alarma.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alarmas: Alarma[] = []

  constructor(
    private navCtrl: NavController
  ) {
    this.alarmas = ALARMAS.slice(0);
  }

  reproducir (alarma: Alarma) {
    console.log(alarma);

    let audio = new Audio();

    audio.src = alarma.audio;
    alarma.reproduciendo = true;
    audio.load();
    audio.play();

    setTimeout(() => {
      alarma.reproduciendo = false;
    }, alarma.duracion * 1000);
  }

  goToInfo() {
    this.navCtrl.navigateForward( '/info' );
  }
}
