<h1>Adding New Customization Options</h1>

This document explains how to extend the customization options in the **Let's Summarize Web Application** by adding new parameters to the summarization request.

---

## Steps to Add a New Customization Option

To add a new customization option, follow these steps:

### 1. Define the New Option in Enums

Add the new customization type to the [enums file](../src/api/enums/api.enums.ts):

```ts
export enum SummaryNewOption {
  OPTION1 = 'option1',
  OPTION2 = 'option2',
  DEFAULT = OPTION1,
}
```

---

### 2. Extend the Type Definitions

Modify the TypeScript types to include the new option, in the [`api.d.ts` file](../src/api/types/api.d.ts):

```ts
import { SummaryNewOption } from '../enums/api.enums';

export interface SummaryOptions {
  length?: SummaryLength;
  format?: SummaryFormat;
  model?: SummaryModel;
  speed?: SummarySpeed;
  listen?: boolean;
  lang?: SummarizationLanguage;
  customInstructions?: string;
  newOption?: SummaryNewOption; // <-- Add the new option here
}
```

---

### 3. Update the Customization Modal

Add the new customization option to the UI, in the [customization modal](../src/components/Modal/CustomizationModal.tsx).

#### 1. Define Options for the Dropdown

Modify the options list:

```ts
const newOptionChoices = [
  { label: 'Option 1', value: SummaryNewOption.OPTION1 },
  { label: 'Option 2', value: SummaryNewOption.OPTION2 },
];
```

#### 2. Create a State for the New Option

Add a new state variable:

```ts
const [newOption, setNewOption] = useState<SummaryNewOption>(
  options.newOption || SummaryNewOption.DEFAULT
);
```

#### 3. Handle Selection Changes

Implement a function to handle changes:

```ts
const handleNewOptionChange = (value: string) => {
  setNewOption(value as SummaryNewOption);
};
```

#### 4. Add the UI Component

Insert the new customization control inside the modal:

```tsx
<Select
  label="New Customization Option"
  options={newOptionChoices}
  value={newOption}
  onChange={handleNewOptionChange}
  description="Choose a new customization option."
/>
```

#### Pass the New Option to the Save Function

Modify the `handleSave` function:

```ts
const handleSave = () => {
  onSave({
    ...options,
    newOption: newOption,
  });
  onClose();
};
```

---

## Final Check

Ensure the following:

- Enums updated in [enums file](../src/api/enums/api.enums.ts)
- Types updated in [types file](../src/api/types/api.d.ts)
- UI updated in [customization modal](../src/components/Modal/CustomizationModal.tsx)

Once done, run the application and verify that the new customization option appears in the UI and is correctly passed to the API.

```bash
pnpm dev
```