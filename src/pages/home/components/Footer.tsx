import { Button } from '@/components/ui/button';
import { Code, FileUser, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-black backdrop-blur-sm mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 text-sm text-yellow-600">
        <p className="text-center md:text-left">
          <span className="font-medium text-white">
            Transformando ideias em código
          </span>{' '}
          e experiências em inovação.
        </p>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-white transition-colors"
          >
            <a
              href="mailto:otaviodev08@gmail.com"
              aria-label="Enviar email para Otávio Araujo"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-white transition-colors"
          >
            <a
              href="https://www.linkedin.com/in/ot%C3%A1vio-araujo-77474b1ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Otávio Araujo"
            >
              <FileUser className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-text-white transition-colors"
          >
            <a
              href="https://github.com/OtavioAraujoS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Otávio Araujo"
            >
              <Code className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="text-center text-xs text-white pb-4">
        © {new Date().getFullYear()} Otávio Araujo. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
