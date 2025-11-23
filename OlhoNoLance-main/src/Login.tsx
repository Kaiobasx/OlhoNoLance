import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Separator } from "./components/ui/separator";
import { Eye, EyeOff, Mail, Lock, Chrome, Facebook, Apple } from "lucide-react";
import { Page } from "./hooks/useNavigation";

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular login
    setTimeout(() => {
      console.log("Login attempt:", formData);
      alert("Login realizado com sucesso!");
      setIsLoading(false);
      onNavigate('home');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    alert(`Login com ${provider} em desenvolvimento!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <h1 
            className="text-[#E53935] mb-2"
            style={{ fontSize: '2rem', fontWeight: '700' }}
          >
            Olho no Lance!
          </h1>
          <p className="text-[#666666]">Entre na sua conta</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-[#444444]">Bem-vindo de volta!</CardTitle>
            <CardDescription>
              Entre com sua conta para continuar participando dos leilões
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Formulário de Login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked: boolean) => handleInputChange("rememberMe", checked as boolean)}
                  />
                  <label htmlFor="remember" className="text-sm text-[#666666]">
                    Lembrar de mim
                  </label>
                </div>
                
                <button
                  type="button"
                  className="text-sm text-[#E53935] hover:underline"
                >
                  Esqueci minha senha
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#E53935] text-white hover:bg-[#d32f2f]"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            {/* Separador */}
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex justify-center">
                <span className="bg-white px-4 text-sm text-[#666666]">ou continue com</span>
              </div>
            </div>

            {/* Login Social */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin("Google")}
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continuar com Google
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Continuar com Facebook
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin("Apple")}
              >
                <Apple className="w-4 h-4 mr-2" />
                Continuar com Apple
              </Button>
            </div>

            {/* Link para cadastro */}
            <div className="text-center">
              <p className="text-[#666666]">
                Não tem uma conta?{" "}
                <button
                  onClick={() => onNavigate('register')}
                  className="text-[#E53935] hover:underline font-medium"
                >
                  Cadastre-se gratuitamente
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Informações de segurança */}
        <Card className="border-[#E53935] bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#E53935] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-[#444444] font-medium mb-1">
                  Sua segurança é nossa prioridade
                </h3>
                <p className="text-[#666666] text-sm">
                  Utilizamos criptografia de última geração para proteger seus dados 
                  e transações. Nunca compartilhamos suas informações com terceiros.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Links úteis */}
        <div className="text-center text-sm text-[#666666] space-x-4">
          <button 
            onClick={() => onNavigate('about')}
            className="hover:text-[#E53935]"
          >
            Sobre Nós
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate('contact')}
            className="hover:text-[#E53935]"
          >
            Suporte
          </button>
          <span>•</span>
          <button className="hover:text-[#E53935]">
            Termos de Uso
          </button>
        </div>
      </div>
    </div>
  );
}