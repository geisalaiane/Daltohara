import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal12Component } from './modal12.component';

describe('Modal12Component', () => {
  let component: Modal12Component;
  let fixture: ComponentFixture<Modal12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal12Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
