import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/entidades/persona'

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {
  form: FormGroup;
  nombre: string='';
  second_name: string= '';
  apellido: string= '';
  titulo: string= '';
  banner_img: string='';
  perfil_img: string= '';
  about: string= '';
  edad: string= '';
  residencia: string='';
  email: string= '';




   constructor(private formBuilder: FormBuilder, private sPersona: PersonaService) {
    this.form= this.formBuilder.group({
      titulo:['',[Validators.required]],
      
    })
    }

    ngOnInit() {}

    get Titulo(){
      return this.form.get("titulo");
    }

    get TituloValid(){
      return this.Titulo?.touched && !this.Titulo?.valid;
    }

    onEnviar(event: Event){
      event.preventDefault; 
 
    if (this.form.valid){
      this.onCreate();
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
  onCreate(): void{
    const expe = new Persona(this.nombre, this.second_name, this.apellido, this.titulo, this.banner_img, this.perfil_img, this.about, this.edad, this.residencia, this.email);
      this.sPersona.agregarPersona(expe).subscribe(data=>{alert("Experiencia añadida")
       window.location.reload();
    }, err =>{
      alert("Falló la carga de datos, intente nuevamente");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

}
