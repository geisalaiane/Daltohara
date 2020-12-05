import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal74Component } from './modal74.component';

describe('Modal74Component', () => {
  let component: Modal74Component;
  let fixture: ComponentFixture<Modal74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal74Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
