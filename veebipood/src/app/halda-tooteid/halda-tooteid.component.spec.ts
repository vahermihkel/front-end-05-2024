import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTooteidComponent } from './halda-tooteid.component';

describe('HaldaTooteidComponent', () => {
  let component: HaldaTooteidComponent;
  let fixture: ComponentFixture<HaldaTooteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTooteidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaldaTooteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
