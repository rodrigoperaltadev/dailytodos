import { Auth, signInWithEmailAndPassword } from 'firebase/auth'

export interface AuthUseCase {
  login(email: string, password: string): Promise<void>
}

export class FirebaseAuthUseCase implements AuthUseCase {
  constructor(private auth: Auth) {}

  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password)
    } catch (error) {
      console.log('Error en el inicio de sesión:', error)
    }
  }
}
