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
    expiration=180
    counter = signal(this.expiration);
    cronometr = viewChild<ElementRef<HTMLParagraphElement>>('cronometr');
    stoper=model.required<boolean>();
    counterLast=signal(Math.trunc(this.counter()/60))
    
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
    this.counterLast.update(x => Math.trunc(this.counter()/60))
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
    return interval(700).pipe( map(x => {
      
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
    }), take(this.expiration+1))
    
  }
}
