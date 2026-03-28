import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService } from '../../servives/user-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contac',
  imports: [ReactiveFormsModule],
  templateUrl: './contac.html',
  styleUrl: './contac.css',
})
export class Contac {
   private formBuilder = inject(FormBuilder)
   private userService=inject(UserService)
   detail:string=''
   error:boolean=false 
   sentend:boolean=false

  profileForm = this.formBuilder.group({
    namePerson: ['', [Validators.required, Validators.maxLength(85)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(45)] ],
    comment: ['', [ Validators.maxLength(250)]]
  }, { updateOn: 'change' })

  onSend()
  {
    this.error=false

    if(this.profileForm.valid)
    {      
      this.userService.send(this.profileForm.value).subscribe(x =>
      {
        console.log(x)
        if(x.status==200)
        {
          this.sentend=true

          swal.fire({       title: "Registro exitoso",         text: "Se guardo tu informacion",  icon: "success"   })
        }
      }, (error) =>{
        swal.fire({           title: "Error",         text: "Error desconocido",    icon: "error"      })
      })
    }
    else
    {
      this.validator()
      swal.fire({           title: "Error",         text: this.detail.substring(1) ,    icon: "error"      })
    }
  }

  validator()
  {
    this.detail=''

    if(!this.profileForm.get('namePerson')?.valid)
    {
      this.detail=this.detail+', Nombre es requerido y no debe exceder los 85 caracteres'
    }

    if(!this.profileForm.get('email')?.valid)
    {
      this.detail=this.detail+', Email es requerido '
    }

    if(!this.profileForm.get('comment')?.valid)
    {
      this.detail=this.detail+', Comentario no debe exceder los 85 caracteres'
    }

    // this.error=true
  }
}
