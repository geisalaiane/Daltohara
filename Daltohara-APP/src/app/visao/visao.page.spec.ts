import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisaoPage } from './visao.page';

describe('VisaoPage', () => {
  let component: VisaoPage;
  let fixture: ComponentFixture<VisaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
