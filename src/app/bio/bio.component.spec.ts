import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioComponent } from './bio.component';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioComponent],
    });
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link to home page', () => {
    const fixture = TestBed.createComponent(BioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.bio-container a.btn-back')?.textContent
    ).toContain('Back');
  });
});
