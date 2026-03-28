import { Component, OnInit, ElementRef, model, signal, viewChild, input } from '@angular/core';
import { Observable, interval} from 'rxjs'
import { retry, take, map } from 'rxjs/operators'

@Component({
  selector: 'app-chronometer',
  imports: [],
  templateUrl: './chronometer.html',
  styleUrl: './chronometer.css',
})
export class Chronometer implements OnInit 
{
    counter = signal(5);
    cronometr = viewChild<ElementRef<HTMLParagraphElement>>('cronometr');
    stoper=model.required<boolean>();
    
  ngOnInit() {
    this.cronometr()?.nativeElement.addEventListener('animationend', (ev) => 
      {
      if (ev.animationName.endsWith('decrement') || ev.animationName.endsWith('increment')) {
        this.animationFinished();
      }
    });    
    
    this.initCounter().subscribe(x =>
    {
      console.log(x)
    })
    
  }
  modify(n: number) {
    const targetClass = n > 0 ? 'increment' : 'decrement';
    this.counter.update(x => (x += n));
    this.cronometr()?.nativeElement.classList.add(targetClass);
  }
  animationFinished() {
    this.cronometr()?.nativeElement.classList.remove('increment', 'decrement');
  }
  ngOnDestroy() {
    this.cronometr()?.nativeElement.removeEventListener('animationend', this.animationFinished);
  }

  

  initCounter=() =>
  {
    return interval(1000).pipe( map(x => {
      
      if(this.counter()>0)
        {          
          console.log(this.counter())
          this.modify(-1)
        }
        else
        {          
          this.stoper.set(true)
          
        }

      return x
    }), take(6))
    
  }
}
