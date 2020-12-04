import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal5",
  templateUrl: "./modal5.component.html",
  styleUrls: ["./modal5.component.scss"],
})
export class Modal5Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
