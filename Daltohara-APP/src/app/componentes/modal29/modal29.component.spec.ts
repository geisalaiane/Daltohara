import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modal29Component } from './modal29.component';

describe('Modal29Component', () => {
  let component: Modal29Component;
  let fixture: ComponentFixture<Modal29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal29Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modal29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
