import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal26Component } from './modal26.component';

describe('Modal26Component', () => {
  let component: Modal26Component;
  let fixture: ComponentFixture<Modal26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal26Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
