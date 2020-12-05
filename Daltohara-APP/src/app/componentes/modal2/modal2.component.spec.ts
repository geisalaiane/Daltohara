import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal2Component } from './modal2.component';

describe('Modal2Component', () => {
  let component: Modal2Component;
  let fixture: ComponentFixture<Modal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
