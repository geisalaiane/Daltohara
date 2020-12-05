import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal73",
  templateUrl: "./modal73.component.html",
  styleUrls: ["./modal73.component.scss"],
})
export class Modal73Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
