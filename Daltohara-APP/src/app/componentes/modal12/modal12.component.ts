import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal12',
  templateUrl: './modal12.component.html',
  styleUrls: ['./modal12.component.scss'],
})
export class Modal12Component implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() { }
  fecharModal() {
    this.modal.dismiss();
  }

}
