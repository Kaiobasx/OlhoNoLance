import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Progress } from "../components/ui/progress";
import { Eye, EyeOff, Mail, Lock, Phone, Chrome, Check } from "lucide-react";
import { Page } from "../hooks/useNavigation";

interface RegisterProps {
  onNavigate: (page: Page) => void;
}

export function Register({ onNavigate }: RegisterProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Passo 1 - Dados básicos
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Passo 2 - Segurança
    password: "",
    confirmPassword: "",
    
    // Passo 3 - Endereço
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    
    // Passo 4 - Preferências
    interests: [] as string[],
    newsletter: true,
    terms: false,
    privacy: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const interests = [
    "Futebol", "Basquete", "Tênis", "Fórmula 1", "Olimpíadas", 
    "Vôlei", "Golf", "Baseball", "Hockey", "Rugby"
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests;
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];
    handleInputChange("interests", newInterests);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone ? true : false;
      case 2:
        return formData.password && formData.confirmPassword && formData.password === formData.confirmPassword ? true : false;
      case 3:
        return formData.cep && formData.street && formData.city && formData.state ? true : false;
      case 4:
        return formData.terms && formData.privacy ? true : false;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    
    setIsLoading(true);
    
    // Simular cadastro
    setTimeout(() => {
      console.log("Registration data:", formData);
      alert("Cadastro realizado com sucesso! Bem-vindo ao Olho no Lance!");
      setIsLoading(false);
      onNavigate('home');
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-[#444444] font-medium">Dados Pessoais</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Nome *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Sobrenome *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Seu sobrenome"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#444444] mb-2">
                E-mail *
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
                Telefone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-[#444444] font-medium">Criar Senha</h3>
            
            <div>
              <label className="block text-sm font-medium text-[#444444] mb-2">
                Senha *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Mínimo 8 caracteres"
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

            <div>
              <label className="block text-sm font-medium text-[#444444] mb-2">
                Confirmar Senha *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  placeholder="Digite a senha novamente"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">As senhas não coincidem</p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-[#444444] mb-2">Critérios da senha:</h4>
              <ul className="text-sm text-[#666666] space-y-1">
                <li className="flex items-center gap-2">
                  <Check className={`w-3 h-3 ${formData.password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                  Mínimo 8 caracteres
                </li>
                <li className="flex items-center gap-2">
                  <Check className={`w-3 h-3 ${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                  Pelo menos 1 letra maiúscula
                </li>
                <li className="flex items-center gap-2">
                  <Check className={`w-3 h-3 ${/[0-9]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                  Pelo menos 1 número
                </li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-[#444444] font-medium">Endereço</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  CEP *
                </label>
                <Input
                  value={formData.cep}
                  onChange={(e) => handleInputChange("cep", e.target.value)}
                  placeholder="00000-000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Estado *
                </label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="PR">Paraná</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#444444] mb-2">
                Rua *
              </label>
              <Input
                value={formData.street}
                onChange={(e) => handleInputChange("street", e.target.value)}
                placeholder="Nome da rua"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Número
                </label>
                <Input
                  value={formData.number}
                  onChange={(e) => handleInputChange("number", e.target.value)}
                  placeholder="123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Complemento
                </label>
                <Input
                  value={formData.complement}
                  onChange={(e) => handleInputChange("complement", e.target.value)}
                  placeholder="Apto, casa, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Bairro
                </label>
                <Input
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                  placeholder="Nome do bairro"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444444] mb-2">
                  Cidade *
                </label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Nome da cidade"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-[#444444] font-medium">Finalização</h3>
            
            <div>
              <h4 className="text-sm font-medium text-[#444444] mb-3">
                Interesses Esportivos (opcional)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <label htmlFor={interest} className="text-sm text-[#666666]">
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                />
                <label htmlFor="newsletter" className="text-sm text-[#666666]">
                  Quero receber novidades e ofertas por e-mail
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-[#666666]">
                  Aceito os <span className="text-[#E53935] hover:underline cursor-pointer">Termos de Uso</span> *
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                />
                <label htmlFor="privacy" className="text-sm text-[#666666]">
                  Aceito a <span className="text-[#E53935] hover:underline cursor-pointer">Política de Privacidade</span> *
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Logo e header */}
        <div className="text-center mb-8">
          <h1 
            className="text-[#E53935] mb-2"
            style={{ fontSize: '2rem', fontWeight: '700' }}
          >
            Olho no Lance!
          </h1>
          <p className="text-[#666666]">Crie sua conta e comece a participar dos leilões</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-[#444444]">
                Passo {currentStep} de {totalSteps}
              </CardTitle>
              <span className="text-sm text-[#666666]">
                {Math.round(progress)}% completo
              </span>
            </div>
            <Progress value={progress} className="mb-4" />
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}

              {/* Botões de navegação */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Voltar
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className="bg-[#E53935] text-white hover:bg-[#d32f2f]"
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!validateStep(4) || isLoading}
                    className="bg-[#E53935] text-white hover:bg-[#d32f2f]"
                  >
                    {isLoading ? "Criando conta..." : "Criar Conta"}
                  </Button>
                )}
              </div>
            </form>

            {/* Login social (apenas no primeiro passo) */}
            {currentStep === 1 && (
              <>
                <div className="relative mt-6">
                  <Separator />
                  <div className="absolute inset-0 flex justify-center">
                    <span className="bg-white px-4 text-sm text-[#666666]">ou cadastre-se com</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 mt-6">
                  <Button type="button" variant="outline" className="w-full">
                    <Chrome className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                </div>
              </>
            )}

            {/* Link para login */}
            <div className="text-center mt-6">
              <p className="text-[#666666]">
                Já tem uma conta?{" "}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-[#E53935] hover:underline font-medium"
                >
                  Faça login
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}