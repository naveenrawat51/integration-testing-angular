import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { CounterComponent } from './counter.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 // to test whether element contains the data or not (interpolation)
  it('Should render total Counts', ()=>{
    component.othersCount = 21;
    component.myCount = 1;
    fixture.detectChanges();
   
    let de =  fixture.debugElement.query(By.css('.Count-count'));

    let el: HTMLElement = de.nativeElement;
    
    expect(el.innerText).toContain('22');
  });

  // to test highlight class applied to an li when the value of the mycount is 1 (class binding)
  it('Should highlight the upCount button when if count value if 1', () =>{
    component.myCount = 1;
    fixture.detectChanges();

    let db = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(db.classes['highlighted']).toBeTruthy();
  })

  //to test the increase of count when someone click on increaseCount button
  it('should increase the count when click on increaseCount button', ()=>{
   let button =  fixture.debugElement.query(By.css('.glyphicon-menu-up'));
   button.triggerEventHandler('click', null);

   expect(component.totalCounts).toBe(1);
  })
    //to test the increase of count when someone click on increaseCount button
    it('should decrease the count when click on decreaseCount button', ()=>{
      let button =  fixture.debugElement.query(By.css('.glyphicon-menu-down'));
      button.triggerEventHandler('click', null);
   
      expect(component.totalCounts).toBe(0);
     })
});
