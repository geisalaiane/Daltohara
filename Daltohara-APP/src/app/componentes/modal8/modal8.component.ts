import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal8",
  templateUrl: "./modal8.component.html",
  styleUrls: ["./modal8.component.scss"],
})
export class Modal8Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
