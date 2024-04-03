import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaselogComponent } from './pleaselog.component';

describe('PleaselogComponent', () => {
  let component: PleaselogComponent;
  let fixture: ComponentFixture<PleaselogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaselogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PleaselogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
