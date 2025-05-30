import { servicesCardsData } from '@/data/servicesCards';
import Card from './Card';
import Heading from './Typography/Heading';
import { SummaryType } from '@/api/types/api';

interface ServicesCardsProps {
  exclude: SummaryType;
}

function ServicesCards({ exclude }: ServicesCardsProps) {
  return (
    <div>
      <Heading level='h2' center className='mb-8'>
        Need to Summarize Texts or Documents?
      </Heading>
      <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-6'>
        {servicesCardsData
          .filter((card) => card.icon !== exclude)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>
    </div>
  );
}

export default ServicesCards;
