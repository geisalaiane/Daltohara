import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal7Component } from './modal7.component';

describe('Modal7Component', () => {
  let component: Modal7Component;
  let fixture: ComponentFixture<Modal7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
