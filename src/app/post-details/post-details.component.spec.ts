import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { PostDetailsComponent } from './post-details.component';
import { Observable, from, empty, Subject } from 'rxjs';

class RouterStub {
  navigate(){

  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(value){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable()
  }
  
}

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the page to the posts after saving', ()=> {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['allpost']);
  })

  it('should navigate to not-found page when invalid post id is passed', ()=> {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute)
    route.push({ id: 0 })
    

    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
});
