import { SummaryResponse } from '@/api/types/api';
import { Logger } from './logger';

const log = Logger();

/**
 * Validates and normalizes a summary response to ensure it conforms to the SummaryResponse type
 *
 * This function handles various input formats:
 * - String inputs are wrapped in a SummaryResponse object
 * - Objects with non-string summary properties have their summary stringified
 * - Objects without a summary property are converted to a SummaryResponse
 * - Valid SummaryResponse objects are returned unchanged
 *
 * @param response - The response object or string to validate
 * @returns A properly formatted SummaryResponse object
 */
export function isSummaryResponseValid(response: any): SummaryResponse {
  log.info('Validating summary response:', response);

  if (typeof response === 'string') {
    return { summary: response };
  }

  if (typeof response === 'object' && response !== null) {
    if (typeof response.summary === 'string') {
      return response as SummaryResponse;
    }
    if (typeof response.summary === 'object' && response.summary !== null) {
      return { ...response, summary: JSON.stringify(response.summary) };
    }
    return { summary: JSON.stringify(response) };
  }

  return { summary: String(response) };
}
