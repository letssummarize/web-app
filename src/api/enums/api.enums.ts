export enum SummaryLength {
  SHORT = 'brief',
  STANDARD = 'standard',
  DETAILED = 'comprehensive',
}

export enum SummaryFormat {
  BULLET_POINTS = 'bullet-points',
  NARRATIVE = 'narrative',
  DEFAULT = 'default',
}

export enum SummaryModel {
  OPENAI = 'openai',
  DEEPSEEK = 'deepseek',
  DEFAULT = DEEPSEEK,
}

export enum SummarySpeed {
  FAST = 'fast',
  SLOW = 'slow',
  DEFAULT = FAST,
}

export enum SummarizationLanguage {
  EN = 'english',
  AR = 'arabic',
  DEFAULT = 'default'
}