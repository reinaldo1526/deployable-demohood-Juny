import { Component, OnInit } from '@angular/core';

// UI Components imports
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay,share } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) { }

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), shareReplay()
    )

  ngOnInit() {
  }

}
