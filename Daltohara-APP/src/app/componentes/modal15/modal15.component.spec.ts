import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal15Component } from './modal15.component';

describe('Modal15Component', () => {
  let component: Modal15Component;
  let fixture: ComponentFixture<Modal15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal15Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
