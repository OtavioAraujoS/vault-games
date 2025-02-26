import { Combobox } from '@/components/Combobox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Game } from '@/types/Games';

interface FillFieldsByPreviousGameProps {
  label: string;
  gameList: Game[];
  handleFillForm: (game: Game) => void;
}

export const FillFieldsByPreviousGame = ({
  label,
  gameList,
  handleFillForm,
}: FillFieldsByPreviousGameProps) => {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={['fillList']}>
      <AccordionItem value="fillList">
        <AccordionTrigger>
          <h2 className="text-md font-bold dark:text-white">{label}</h2>
        </AccordionTrigger>
        <AccordionContent className="w-full">
          <div className="flex flex-col gap-3 flex-wrap">
            <Combobox
              items={gameList}
              labelKey="nome"
              valueKey="_id"
              placeholder="Selecione o jogo base pelo nome"
              onChange={handleFillForm}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
