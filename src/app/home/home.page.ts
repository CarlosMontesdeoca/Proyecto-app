import { Component } from '@angular/core';
import { ALARMAS } from 'src/data/data.alarma';
import { Alarma } from 'src/interfaces/alarma.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alarmas: Alarma[] = []

  constructor() {
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
}
