import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal45",
  templateUrl: "./modal45.component.html",
  styleUrls: ["./modal45.component.scss"],
})
export class Modal45Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
