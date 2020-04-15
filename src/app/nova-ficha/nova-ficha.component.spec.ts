import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaFichaComponent } from './nova-ficha.component';

describe('NovaFichaComponent', () => {
  let component: NovaFichaComponent;
  let fixture: ComponentFixture<NovaFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
