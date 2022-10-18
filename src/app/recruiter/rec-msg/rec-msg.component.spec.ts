import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecMsgComponent } from './rec-msg.component';

describe('RecMsgComponent', () => {
  let component: RecMsgComponent;
  let fixture: ComponentFixture<RecMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
