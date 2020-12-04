import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-modal15',
  templateUrl: './modal15.component.html',
  styleUrls: ['./modal15.component.scss'],
})
export class Modal15Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }

}
