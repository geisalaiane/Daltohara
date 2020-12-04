import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal8Component } from './modal8.component';

describe('Modal8Component', () => {
  let component: Modal8Component;
  let fixture: ComponentFixture<Modal8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal8Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
