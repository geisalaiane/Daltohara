import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal42",
  templateUrl: "./modal42.component.html",
  styleUrls: ["./modal42.component.scss"],
})
export class Modal42Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
