import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal45Component } from './modal45.component';

describe('Modal45Component', () => {
  let component: Modal45Component;
  let fixture: ComponentFixture<Modal45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal45Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
