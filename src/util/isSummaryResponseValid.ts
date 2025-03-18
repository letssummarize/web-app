import { SummaryResponse } from "@/api/types/api";
import { Logger } from "./logger";

const log = Logger();

/**
 * Validates and normalizes a summary response to ensure it conforms to the SummaryResponse type
 * 
 * This function handles various input formats:
 * - String inputs are wrapped in a SummaryResponse object with nested summary structure
 * - Objects with non-string summary properties have their summary stringified
 * - Objects without a summary property are converted to a SummaryResponse
 * - Valid SummaryResponse objects are returned unchanged
 * 
 * @param response - The response object or string to validate
 * @returns A properly formatted SummaryResponse object
 */
export function isSummaryResponseValid(response: any): SummaryResponse {
  log.info(' Validating summary response:', response);
  
  // Handle string response
  if (typeof response === 'string') {
    return { 
      summary: {
        summary: response
      }
    };
  }
  
  // Handle response with summary as object but not in correct format
  if (response && response.summary && typeof response.summary === 'object' && !response.summary.summary) {
    return {
      summary: {
        summary: JSON.stringify(response.summary)
      }
    };
  }
  
  // Handle response with missing summary
  if (response && !response.summary) {
    return {
      summary: {
        summary: typeof response === 'string' ? response : JSON.stringify(response)
      }
    };
  }
  
  // If response already has the correct structure, return it
  if (response && response.summary && response.summary.summary) {
    return response;
  }
  
  // Default fallback - create a valid structure
  return {
    summary: {
      summary: typeof response === 'object' ? JSON.stringify(response) : String(response)
    }
  };
}