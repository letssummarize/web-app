import { SummaryFormat, SummaryLength, SummaryModel, SummarySpeed } from '@/api/enums/api.enums';
import { SummaryOptions } from '@/api/types/api';

export function resetOptions(
  setOptions: (options: SummaryOptions) => void
): void {
  setOptions({
    length: SummaryLength.STANDARD,
    format: SummaryFormat.DEFAULT,
    model: SummaryModel.DEFAULT,
    speed: SummarySpeed.DEFAULT,
  });
}
