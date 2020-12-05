import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal6",
  templateUrl: "./modal6.component.html",
  styleUrls: ["./modal6.component.scss"],
})
export class Modal6Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
