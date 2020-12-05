import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal16",
  templateUrl: "./modal16.component.html",
  styleUrls: ["./modal16.component.scss"],
})
export class Modal16Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
