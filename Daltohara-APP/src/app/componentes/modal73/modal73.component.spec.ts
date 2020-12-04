import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal73Component } from './modal73.component';

describe('Modal73Component', () => {
  let component: Modal73Component;
  let fixture: ComponentFixture<Modal73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal73Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
