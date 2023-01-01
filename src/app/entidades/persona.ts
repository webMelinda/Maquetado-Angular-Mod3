export class Persona {
    id?: number;
     nombre: string;
     second_name: string;
     apellido: string;
     titulo: string;
     banner_img: string;
     perfil_img: string;
     about: string;
     edad: string;
     residencia: string;
     email: string;

     constructor(nombre:string, second_name:string, apellido:string, titulo:string, banner_img: string, perfil_img: string,about: string, edad: string,residencia: string, email: string ) {
        this.nombre = nombre;
        this.second_name = second_name;
        this.apellido =apellido;
        this.titulo = titulo;
        this.banner_img = banner_img;
        this.perfil_img = perfil_img;
        this.about = about;
        this.edad = edad;
        this.residencia = residencia;
        this.email = email;
     }
}
