import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal29",
  templateUrl: "./modal29.component.html",
  styleUrls: ["./modal29.component.scss"],
})
export class Modal29Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
