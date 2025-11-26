import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Eye, EyeOff, Mail, Lock, Chrome } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Page } from "../hooks/useNavigation";
import { UserService } from "../api/services/userService";

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Chama o serviço de login definido no userService.ts
      // Certifique-se que o backend espera { email, senha }
      const response = await UserService.login({ email, senha: password });
      
      // Se o backend devolver um token JWT, é boa prática guardá-lo
      if (response.token) {
        localStorage.setItem("token", response.token);
        // Configurar o token como header padrão para futuras requisições seria o ideal aqui
      }

      // Login com sucesso -> Redireciona para a Home (ou Dashboard)
      onNavigate('home');
    } catch (error: any) {
      console.error("Erro no login:", error);
      const mensagemErro = error.response?.data?.message || "Email ou senha incorretos.";
      alert(`Erro: ${mensagemErro}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 
            className="text-[#E53935] mb-2"
            style={{ fontSize: '2rem', fontWeight: '700' }}
          >
            Olho no Lance!
          </h1>
          <h2 className="mt-6 text-3xl font-extrabold text-[#444444]">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-sm text-[#666666]">
            Insira os seus dados para aceder à sua conta
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-[#444444]">
                    Senha
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#E53935] hover:underline"
                    onClick={() => alert("Funcionalidade de recuperação de senha ainda não implementada")}
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua senha"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#E53935] text-white hover:bg-[#d32f2f]"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>

              <div className="relative mt-6">
                <Separator />
                <div className="absolute inset-0 flex justify-center">
                  <span className="bg-white px-4 text-sm text-[#666666]">ou entre com</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mt-6">
                <Button type="button" variant="outline" className="w-full">
                  <Chrome className="w-4 h-4 mr-2" />
                  Google
                </Button>
              </div>

              <div className="text-center mt-6">
                <p className="text-[#666666]">
                  Não tem uma conta?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate('register')}
                    className="text-[#E53935] hover:underline font-medium"
                  >
                    Cadastre-se
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}