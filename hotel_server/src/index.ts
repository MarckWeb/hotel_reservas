//Para entender la inyección de dependencias, puedes compararlo con la forma en que funcionan los servicios públicos en una ciudad. Imagina que necesitas agua para tu casa. En lugar de construir tu propio pozo y sistema de suministro de agua, simplemente te conectas al sistema de suministro de agua de la ciudad. En este caso, la ciudad proporciona el servicio de agua a través de su sistema de suministro, y tú solo lo usas cuando lo necesitas. Esto es similar a cómo funciona la inyección de dependencias en la programación.

class UserService {
   getUsers(): string[] {
      return ['User 1', 'User 2', 'User 3'];
   }
}

class UserController {
   constructor(private readonly userService: UserService) { }

   getUsers(): string[] {
      return this.userService.getUsers();
   }
}

const userService = new UserService();
const userController = new UserController(userService);

console.log(userController.getUsers());

//En este ejemplo, UserController depende de UserService para obtener la lista de usuarios. En lugar de crear una nueva instancia de UserService dentro de UserController, se pasa una instancia existente a través del constructor. Esto es inyección de dependencias.