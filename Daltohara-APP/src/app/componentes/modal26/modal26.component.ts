import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal26",
  templateUrl: "./modal26.component.html",
  styleUrls: ["./modal26.component.scss"],
})
export class Modal26Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
