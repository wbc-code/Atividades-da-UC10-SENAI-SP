import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 userModel = new User("","")

 mensagem = ""

 constructor(private loginService: LoginService) { }

 receberDados(){
  // console.log(this.userModel)

  this.loginService.login(this.userModel).subscribe( (response) => {
    console.log("response:", response)
    console.log("O Status Code é:", response.status)
    console.log("O token de acesso é:", response.body.accessToken)

    this.mensagem = "Bem vindo " + response.body.user.nome
  }, (erro) => {
    console.log(erro)
    this.mensagem = "Login ou senha incorreta tente novamente!"
    alert(this.mensagem);
  })
 }
}
