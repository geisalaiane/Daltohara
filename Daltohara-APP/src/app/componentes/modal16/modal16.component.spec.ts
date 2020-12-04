import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal16Component } from './modal16.component';

describe('Modal16Component', () => {
  let component: Modal16Component;
  let fixture: ComponentFixture<Modal16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal16Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
