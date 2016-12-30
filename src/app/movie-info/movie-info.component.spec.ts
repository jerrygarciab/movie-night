/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MovieInfoComponent } from './movie-info.component';

describe('MovieInfoComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieInfoComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(MovieInfoComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(MovieInfoComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.movieInfo).toEqual('This is the movie info component');
  }));

//   it('should render title in a h1 tag', async(() => {
//     let fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('app works!');
//   }));
});
