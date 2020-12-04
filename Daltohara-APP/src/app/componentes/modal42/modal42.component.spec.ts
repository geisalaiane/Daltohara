import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal42Component } from './modal42.component';

describe('Modal42Component', () => {
  let component: Modal42Component;
  let fixture: ComponentFixture<Modal42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal42Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
